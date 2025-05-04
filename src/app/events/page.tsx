import { CalendarEvent, getUpcomingEvents } from '@/services/google-calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock } from 'lucide-react';
import { format } from 'date-fns';

async function fetchEvents(): Promise<CalendarEvent[]> {
  try {
    // TODO: Replace with actual Calendar ID
    const events = await getUpcomingEvents('rccgsl@example.com');
    // Sort events by start date
    return events.sort((a, b) => a.start.getTime() - b.start.getTime());
  } catch (error) {
    console.error("Failed to fetch calendar events:", error);
    // Return empty array or handle error state appropriately
    return [];
  }
}

function EventItem({ event }: { event: CalendarEvent }) {
  return (
    <Card className="mb-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary">{event.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground flex items-center gap-4 pt-1">
           <span className="flex items-center gap-1.5">
             <CalendarDays className="w-4 h-4" />
             {format(event.start, 'PPP')} {/* Format: Oct 27, 2024 */}
           </span>
           <span className="flex items-center gap-1.5">
             <Clock className="w-4 h-4" />
              {format(event.start, 'p')} - {format(event.end, 'p')} {/* Format: 10:00 AM - 12:00 PM */}
           </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-foreground">{event.description || "No description available."}</p>
      </CardContent>
    </Card>
  );
}

export default async function EventsPage() {
  const events = await fetchEvents();

  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <h1 className="text-3xl font-bold tracking-tight mb-8 text-center md:text-left">
        Upcoming Events
      </h1>

      {events.length > 0 ? (
         <div className="space-y-6">
          {events.map((event) => (
            <EventItem key={event.id} event={event} />
          ))}
         </div>
      ) : (
        <Card>
         <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
                No upcoming events found. Please check back later!
            </p>
          </CardContent>
        </Card>
      )}
       {/* Placeholder for a full calendar view if needed later */}
       {/* <div className="mt-12">
         <p className="text-center text-muted-foreground">(Calendar component will be added here)</p>
       </div> */}
    </div>
  );
}

// Add metadata for SEO
export const metadata = {
  title: 'Upcoming Events - Solution Centre Online',
  description: 'Find out about upcoming events and activities at RCCG Solution Centre.',
};
