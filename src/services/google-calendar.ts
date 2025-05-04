
import { addDays, setHours, setMinutes } from 'date-fns';

/**
 * Represents a calendar event.
 */
export interface CalendarEvent {
  /**
   * The ID of the event.
   */
  id: string;
  /**
   * The title of the event.
   */
  title: string;
  /**
   * The start time of the event.
   */
  start: Date;
  /**
   * The end time of the event.
   */
  end: Date;
  /**
   * The description of the event.
   */
  description: string;
}

/**
 * Asynchronously retrieves a list of upcoming events from a Google Calendar.
 *
 * @param calendarId The ID of the Google Calendar.
 * @returns A promise that resolves to an array of CalendarEvent objects.
 */
export async function getUpcomingEvents(calendarId: string): Promise<CalendarEvent[]> {
  // TODO: Implement this by calling the Google Calendar API.

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  const now = new Date();
  const nextSunday = addDays(now, (7 - now.getDay()) % 7 || 7); // Get next Sunday or today if Sunday

  // Placeholder data - Replace with actual API call logic
  const placeholderEvents: CalendarEvent[] = [
    {
      id: '1',
      title: 'Sunday Worship Service',
      start: setMinutes(setHours(nextSunday, 10), 0), // Next Sunday at 10:00 AM
      end: setMinutes(setHours(nextSunday, 12), 0),   // Next Sunday at 12:00 PM
      description: 'Join us for our weekly worship service. All are welcome!',
    },
    {
        id: '2',
        title: 'Midweek Bible Study (Digging Deep)',
        // Find the next Wednesday
        start: setMinutes(setHours(addDays(now, (3 - now.getDay() + 7) % 7 || 7), 19), 0), // Next Wednesday 7:00 PM
        end: setMinutes(setHours(addDays(now, (3 - now.getDay() + 7) % 7 || 7), 20), 30), // Next Wednesday 8:30 PM
        description: 'Deepen your understanding of the scriptures with us.',
    },
    {
        id: '3',
        title: 'Monthly Vigil (Solution Night)',
        // Find the last Friday of the *next* month for demonstration
        start: setMinutes(setHours(new Date(now.getFullYear(), now.getMonth() + 2, 0), 22), 0), // Last day of next month, 10:00 PM
        end: setMinutes(setHours(addDays(new Date(now.getFullYear(), now.getMonth() + 2, 0), 1), 1), 0), // Next day 1:00 AM
        description: 'A night of powerful prayers and seeking God\'s solutions.',
    },
    {
      id: '4',
      title: 'Community Outreach',
      start: setMinutes(setHours(addDays(nextSunday, 13), 14), 0), // Two Saturdays from next Sunday, 2 PM
      end: setMinutes(setHours(addDays(nextSunday, 13), 16), 0),   // Two Saturdays from next Sunday, 4 PM
      description: 'Serving our local community. Volunteers needed!',
    },
  ];

  // Filter out past events just in case calculation is off
  return placeholderEvents.filter(event => event.start > now)
                         .sort((a, b) => a.start.getTime() - b.start.getTime());
}
