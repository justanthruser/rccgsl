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
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 bg-cover bg-center w-full" 
               style={{
                 backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/church-bg.jpg")',
                 backgroundAttachment: 'fixed',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 margin: 0,
                 paddingLeft: '1rem',
                 paddingRight: '1rem'
               }}>
        <div className="absolute inset-0"></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Welcome to RCCG Sierra Leone
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Where miracles happen and lives are transformed through faith, love, and community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/events" className="flex items-center">
                  Join Us
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link href="#live-service" className="flex items-center">
                  Watch Live
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <a 
            href="#welcome" 
            className="animate-bounce w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"
            aria-label="Scroll down"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="py-20 bg-white">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Welcome to Our Church</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                We are a loving community of believers committed to spreading the gospel of Jesus Christ. 
                Our mission is to raise people who will make it to heaven and take as many people as possible with them.
              </p>
              <Button asChild>
                <Link href="/about" className="mt-4">
                  Learn More About Us
                </Link>
              </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="/images/church-interior.jpg" 
                alt="Church Interior"
                fill
                className="object-cover"
              />
            </div>
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
                <Link href="/events" className="flex items-center gap-2">Sunday Service: 10:00 AM</Link>
                <Link href="/events" className="flex items-center gap-2">Bible Study: Wednesday 7:00 PM</Link>
                <Link href="/events" className="flex items-center gap-2">Prayer Meeting: Friday 7:00 PM</Link>
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
                <Link href="https://forms.gle/ExETxADCyYWu5k9k7" className="flex items-center gap-2">Join a Department</Link>
                <Link href="https://forms.gle/ExETxADCyYWu5k9k7" className="flex items-center gap-2">Volunteer</Link>
                <Link href="https://forms.gle/ExETxADCyYWu5k9k7" className="flex items-center gap-2">Community Outreach</Link>
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

      {/* Prayer Request Section */}
      <section id="prayer-request" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Submit a Prayer Request</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in the power of prayer. Share your prayer requests with us, and our prayer team will pray for you.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Peter Favor"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="prayer-request" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Prayer Request *
                </label>
                <textarea
                  id="prayer-request"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Please share your prayer request here..."
                  required
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input
                  id="prayer-privacy"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="prayer-privacy" className="ml-2 block text-sm text-gray-700">
                  I would like this request to remain private (only visible to prayer team)
                </label>
              </div>
              
              <div className="text-center">
                <Button type="submit" size="lg" className="px-8">
                  Submit Prayer Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
