'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Loader2, CornerDownLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { answerChurchQuestions } from '@/ai/flows/answer-church-questions';
import { cn } from '@/lib/utils';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

export function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async () => {
    const userMessage = inputValue.trim();
    if (!userMessage || isLoading) return;

    setMessages(prev => [...prev, { id: Date.now(), text: userMessage, sender: 'user' }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await answerChurchQuestions({ question: userMessage });
      setMessages(prev => [...prev, { id: Date.now() + 1, text: response.answer, sender: 'ai' }]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: "Sorry, I couldn't get an answer right now.", sender: 'ai' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
        // Use setTimeout to ensure the scroll happens after the DOM updates
        setTimeout(() => {
             if (scrollAreaRef.current) {
                 const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
                 if (scrollElement) {
                     scrollElement.scrollTop = scrollElement.scrollHeight;
                 }
             }
        }, 0);
    }
  }, [messages]);


  return (
    <>
      <Button
        variant="primary"
        size="icon"
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg z-50 bg-primary hover:bg-primary/90"
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Chat"
      >
        <Bot className="h-6 w-6 text-primary-foreground" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] p-0 flex flex-col h-[70vh]">
          <DialogHeader className="p-4 border-b">
            <DialogTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              Solution Centre Assistant
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    'flex items-start gap-3',
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  {message.sender === 'ai' && (
                    <Avatar className="w-8 h-8 border">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <Bot className="w-4 h-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      'rounded-lg p-3 max-w-[75%] text-sm',
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    )}
                  >
                    {message.text}
                  </div>
                   {message.sender === 'user' && (
                     <Avatar className="w-8 h-8 border">
                       <AvatarFallback className="bg-secondary text-secondary-foreground">
                         U
                       </AvatarFallback>
                     </Avatar>
                   )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3 justify-start">
                   <Avatar className="w-8 h-8 border">
                     <AvatarFallback className="bg-primary text-primary-foreground">
                       <Bot className="w-4 h-4" />
                     </AvatarFallback>
                   </Avatar>
                  <div className="rounded-lg p-3 bg-muted text-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <DialogFooter className="p-4 border-t">
            <div className="relative flex items-center w-full">
              <Input
                placeholder="Ask a question..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="pr-10"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                aria-label="Send message"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Press <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"><CornerDownLeft size={10} /></kbd> to send.
              </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
