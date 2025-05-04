import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CalendarDays, Clapperboard, Users, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getLatestYouTubeVideo, YouTubeVideo } from '@/services/youtube'; // Assuming service exists
import { HeroAnimations } from '@/components/page/hero-animations'; // Import the client component

// Server component to fetch latest video
async function LatestSermonCard() {
  let latestVideo: YouTubeVideo | null = null;
  let error: string | null = null;

  try {
    // TODO: Replace 'rccgslchannel' with the actual channel ID
    latestVideo = await getLatestYouTubeVideo('rccgslchannel');
  } catch (err) {
     console.error("Failed to fetch latest video:", err);
     error = "Could not load the latest sermon at this time.";
     // Use a placeholder/default video on error
     latestVideo = {
        videoId: 'dQw4w9WgXcQ', // Example placeholder
        title: 'Sermon Placeholder',
        description: 'Unable to load the latest sermon details.',
        thumbnailUrl: `https://picsum.photos/480/270?random=${Date.now()}`, // Placeholder image
     }
  }


  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clapperboard className="w-5 h-5 text-primary" />
          Latest Sermon
        </CardTitle>
      </CardHeader>
      <CardContent>
        {error && <p className="text-destructive mb-4">{error}</p>}
        {latestVideo && (
          <>
            <div className="aspect-video overflow-hidden rounded-lg mb-4">
              <a
                href={`https://www.youtube.com/watch?v=${latestVideo.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch sermon: ${latestVideo.title}`}
              >
                <Image
                  src={latestVideo.thumbnailUrl || `https://picsum.photos/480/270?random=${Date.now()}`}
                  alt={`Thumbnail for ${latestVideo.title}`}
                  width={480}
                  height={270}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint="church sermon video"
                  // Removed onError handler as it cannot be passed from Server Component
                />
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-1">{latestVideo.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{latestVideo.description}</p>
             <Button asChild variant="outline">
               <a
                 href={`https://www.youtube.com/watch?v=${latestVideo.videoId}`}
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 Watch Now
               </a>
             </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}

// Live Stream Embed Component
function LiveStreamEmbed() {
  // TODO: Replace with the actual YouTube Live Stream URL or Embed ID
  const liveStreamUrl = "https://www.youtube.com/embed/live_stream?channel=UC3z9rRoiie3RXzhUxv1Bdqw&autoplay=1"; // Replace UC... with channel ID

  return (
    <Card className="bg-secondary">
        <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
                 <Clapperboard className="w-5 h-5" />
                 Live Service
            </CardTitle>
        </CardHeader>
      <CardContent>
        <div className="aspect-video overflow-hidden rounded-lg shadow-md">
          <iframe
            width="100%"
            height="100%"
            src={liveStreamUrl}
            title="RCCG Solution Centre Live Stream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
         <p className="text-center mt-4 text-muted-foreground text-sm">Join us live every Sunday!</p>
      </CardContent>
    </Card>
  );
}


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center bg-gradient-to-r from-primary/80 to-primary text-primary-foreground">
        <Image
          src={`https://picsum.photos/1920/1080?random=1`}
          alt="Church congregation"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          priority
          data-ai-hint="church welcome banner"
        />
        <div className="relative z-10 container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md animate-fade-in-up">
            Welcome to RCCG Sierra Leone
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl mt-4 mb-8 drop-shadow animate-fade-in-up animation-delay-200">
            A place of worship, community, and finding solutions in Christ.
          </p>
          <div className="space-x-4 animate-fade-in-up animation-delay-400">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/events">Upcoming Events</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="#about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Welcome & Service Times (Left Column) */}
          <div className="md:col-span-2 space-y-8">
            {/* Live Stream Section */}
             <LiveStreamEmbed />


            {/* Welcome Message */}
            <Card>
              <CardHeader>
                <CardTitle id="about" className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary"/>
                    Join Our Family
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We are delighted to welcome you to the Redeemed Christian Church of God, Solution Centre. Whether you're new to the area or seeking a church home, we invite you to experience God's love and purpose with us.
                </p>
                <Button asChild>
                    <Link href="/contact">Visit Us</Link>
                </Button>
              </CardContent>
            </Card>

             {/* Service Times */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-primary" />
                    Service Times
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                 <p><strong>Sunday Service:</strong> 10:00 AM - 12:00 PM</p>
                 <p><strong>Midweek Service (Digging Deep):</strong> Wednesday 7:00 PM - 8:30 PM</p>
                 <p><strong>Monthly Vigil (Solution Night):</strong> Last Friday of the Month 10:00 PM</p>
              </CardContent>
            </Card>


          </div>

          {/* Latest Sermon & Location (Right Column) */}
          <div className="space-y-8">
            <LatestSermonCard />

            {/* Location */}
             <Card>
               <CardHeader>
                 <CardTitle className="flex items-center gap-2">
                   <MapPin className="w-5 h-5 text-primary" />
                   Find Us
                 </CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-muted-foreground mb-4">
                   123 Solution Way, <br />
                   Cityville, ST 12345
                 </p>
                 <Button asChild variant="outline">
                   <Link href="/contact#map">Get Directions</Link>
                 </Button>
               </CardContent>
             </Card>
          </div>
        </div>
      </section>

      {/* Add other sections like Events highlight, Ministries later */}
      <HeroAnimations /> {/* Add the client component here */}
    </div>
  );
}
