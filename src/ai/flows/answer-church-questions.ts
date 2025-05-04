'use server';

/**
 * @fileOverview An AI agent to answer questions about the church based on available data.
 *
 * - answerChurchQuestions - A function that answers questions about the church.
 * - AnswerChurchQuestionsInput - The input type for the answerChurchQuestions function.
 * - AnswerChurchQuestionsOutput - The return type for the answerChurchQuestions function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';
import {getUpcomingEvents} from '@/services/google-calendar';
import {getLatestYouTubeVideo} from '@/services/youtube';

const AnswerChurchQuestionsInputSchema = z.object({
  question: z.string().describe('The question about the church.'),
});
export type AnswerChurchQuestionsInput = z.infer<typeof AnswerChurchQuestionsInputSchema>;

const AnswerChurchQuestionsOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about the church.'),
});
export type AnswerChurchQuestionsOutput = z.infer<typeof AnswerChurchQuestionsOutputSchema>;

export async function answerChurchQuestions(input: AnswerChurchQuestionsInput): Promise<AnswerChurchQuestionsOutput> {
  return answerChurchQuestionsFlow(input);
}

const answerChurchQuestionsPrompt = ai.definePrompt({
  name: 'answerChurchQuestionsPrompt',
  input: {
    schema: z.object({
      question: z.string().describe('The question about the church.'),
      events: z.string().describe('Upcoming events at the church.'),
      latestSermonTitle: z.string().describe('The title of the latest sermon.'),
      latestSermonDescription: z.string().describe('The description of the latest sermon.'),
    }),
  },
  output: {
    schema: z.object({
      answer: z.string().describe('The answer to the question about the church.'),
    }),
  },
  prompt: `You are an AI assistant answering questions about the Redeemed Christian Church of God, Solution Centre. Use the following information to answer the question.\n\nQuestion: {{{question}}}\n\nUpcoming Events: {{{events}}}\n\nLatest Sermon Title: {{{latestSermonTitle}}}\nLatest Sermon Description: {{{latestSermonDescription}}}\n\nAnswer:`,
});

const answerChurchQuestionsFlow = ai.defineFlow<
  typeof AnswerChurchQuestionsInputSchema,
  typeof AnswerChurchQuestionsOutputSchema
>(
  {
    name: 'answerChurchQuestionsFlow',
    inputSchema: AnswerChurchQuestionsInputSchema,
    outputSchema: AnswerChurchQuestionsOutputSchema,
  },
  async input => {
    const events = await getUpcomingEvents('rccgsl@example.com');
    const latestVideo = await getLatestYouTubeVideo('rccgslchannel');

    const eventsString = events.map(event => `${event.title}: ${event.description} (${event.start.toLocaleDateString()})`).join('\n');

    const {output} = await answerChurchQuestionsPrompt({
      question: input.question,
      events: eventsString,
      latestSermonTitle: latestVideo.title,
      latestSermonDescription: latestVideo.description,
    });
    return output!;
  }
);
