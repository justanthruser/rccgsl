import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CalendarDays, Clapperboard, Users, MapPin, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getLatestYouTubeVideo, YouTubeVideo } from '@/services/youtube';
import { HeroAnimations } from '@/components/page/hero-animations';

async function LatestSermonCard() {
  let latestVideo: YouTubeVideo | null = null;
  let error: string | null = null;

  try {
    latestVideo = await getLatestYouTubeVideo('rccgslchannel');
  } catch (err) {
    console.error("Failed to fetch latest video:", err);
    error = "Could not load the latest sermon at this time.";
    latestVideo = {
      videoId: 'dQw4w9WgXcQ',
      title: 'Sermon Placeholder',
      description: 'Unable to load the latest sermon details.',
      thumbnailUrl: `https://picsum.photos/480/270?random=${Date.now()}`,
    }
  }

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gradient">
          <Clapperboard className="w-5 h-5" />
          Latest Sermon
        </CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="rounded-lg bg-destructive/10 p-4 mb-4">
            <p className="text-destructive">{error}</p>
          </div>
        )}
        {latestVideo && (
          <div className="space-y-4">
            <div className="aspect-video overflow-hidden rounded-lg">
              <a
                href={`https://www.youtube.com/watch?v=${latestVideo.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch sermon: ${latestVideo.title}`}
                className="block hover-scale"
              >
                <Image
                  src={latestVideo.thumbnailUrl || `https://picsum.photos/480/270?random=${Date.now()}`}
                  alt={`Thumbnail for ${latestVideo.title}`}
                  width={480}
                  height={270}
                  className="w-full h-full object-cover"
                  data-ai-hint="church sermon video"
                />
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">{latestVideo.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{latestVideo.description}</p>
              <Button asChild variant="default" className="w-full sm:w-auto">
                <a
                  href={`https://www.youtube.com/watch?v=${latestVideo.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Watch Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function LiveStreamEmbed() {
  const liveStreamUrl = "https://www.youtube.com/embed/live_stream?channel=UC3z9rRoiie3RXzhUxv1Bdqw&autoplay=1";

  return (
    <Card className="card-hover bg-secondary/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gradient">
          <Clapperboard className="w-5 h-5" />
          Live Service
        </CardTitle>
        <CardDescription>Join us for our live service</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src={liveStreamUrl}
            title="RCCG Solution Centre Live Stream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative -mt-8 py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-gradient">
                Welcome to RCCG Sierra Leone - Solution Centre
              </h1>
              <p className="text-xl text-muted-foreground">
                Where miracles happen and lives are transformed through faith, love, and community.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/events">
                    Join Us
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#live-service">Watch Live</Link>
                </Button>
              </div>
            </div>
            {/* <div className="relative h-[400px]">
              <HeroAnimations />
            </div> */}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto max-w-5xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-primary" />
                Service Times
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Sunday Service: 10:00 AM</li>
                <li>Bible Study: Wednesday 7:00 PM</li>
                <li>Prayer Meeting: Friday 7:00 PM</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Get Involved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Join a Department</li>
                <li>Volunteer</li>
                <li>Community Outreach</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-hover sm:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Visit Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <address className="not-italic">
                69 Sanders Street<br />
                Freetown, Sierra Leone<br />
                <a href="tel:+1234567890" className="text-primary hover:underline">
                  (234) 805 711 9569
                </a>
              </address>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Live Service Section */}
      <section id="live-service" className="container mx-auto max-w-5xl scroll-mt-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <LiveStreamEmbed />
          <LatestSermonCard />
        </div>
      </section>
    </div>
  );
}
