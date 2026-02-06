import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CalendarDays, Clapperboard, Users, MapPin, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getLatestYouTubeVideo, YouTubeVideo } from '@/services/youtube';
// import { HeroAnimations } from '@/components/page/hero-animations';

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
  const liveStreamUrl = "https://www.youtube.com/live/bSAfXS-9bks?si=7r4DI74Pzn1R6iTM&autoplay=1";

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
      <section className="relative min-h-screen flex items-center justify-center py-20 w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/church-bg.jpg"
            alt="RCCG Sierra Leone Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              Welcome to RCCG <span className="text-primary-foreground/90">Sierra Leone</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
              Where miracles happen and lives are transformed through faith, love, and community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg shadow-primary/20 transition-all hover:scale-105">
                <Link href="/events" className="flex items-center">
                  Join Us
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white/10 rounded-full px-8 backdrop-blur-sm transition-all">
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
      <section id="welcome" className="relative py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                    Welcome <span className="text-primary italic">Home</span>
                  </h2>
                  <p className="text-xl text-primary/80 font-medium">
                    A community growing in faith, love, and purpose
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We are a loving community committed to sharing the gospel of Jesus Christ.
                    Our mission is simple: to raise people of faith and walk with them on their journey to heaven—together.
                  </p>

                  <div className="pt-4">
                    <Button asChild size="lg" className="rounded-full px-8 shadow-md hover:shadow-lg transition-all">
                      <Link href="/about">
                        Plan a Visit
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-500 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    Led by Pastor Juwon Ariyo • Serving Sierra Leone since 2024
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/5 to-primary/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70"></div>
              <div className="relative h-[450px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl ring-8 ring-white/50 transform md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <Image
                  src="/images/pastor-in-charge.jpeg"
                  alt="Pastor Juwon Ariyo"
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-medium text-lg drop-shadow-md italic">"Come as you are."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative py-12 -mt-16 z-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service Times */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="relative bg-white/60 backdrop-blur-xl border-white/40 shadow-xl shadow-black/5 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CalendarDays className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 leading-tight">Service Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary/70">Sundays</span>
                      <Link href="/events" className="text-lg font-medium text-gray-800 hover:text-primary transition-colors flex items-center justify-between group/link">
                        Sunday Service
                        <span className="text-sm font-bold bg-white px-3 py-1 rounded-full shadow-sm">10:00 AM</span>
                      </Link>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary/70">Wednesdays</span>
                      <Link href="/events" className="text-lg font-medium text-gray-800 hover:text-primary transition-colors flex items-center justify-between group/link">
                        Bible Study
                        <span className="text-sm font-bold bg-white px-3 py-1 rounded-full shadow-sm">7:00 PM</span>
                      </Link>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary/70">Fridays</span>
                      <Link href="/events" className="text-lg font-medium text-gray-800 hover:text-primary transition-colors flex items-center justify-between group/link">
                        Prayer Meeting
                        <span className="text-sm font-bold bg-white px-3 py-1 rounded-full shadow-sm">7:00 PM</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Get Involved */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="relative bg-white/60 backdrop-blur-xl border-white/40 shadow-xl shadow-black/5 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 leading-tight">Get Involved</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    <Link href="https://forms.gle/ExETxADCyYWu5k9k7" className="group/btn flex items-center justify-between p-4 bg-white/50 hover:bg-primary hover:text-white rounded-2xl transition-all duration-300">
                      <span className="font-semibold">Join a Department</span>
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover/btn:opacity-100 -translate-x-2 group-hover/btn:translate-x-0 transition-all" />
                    </Link>
                    <Link href="https://forms.gle/ExETxADCyYWu5k9k7" className="group/btn flex items-center justify-between p-4 bg-white/50 hover:bg-primary hover:text-white rounded-2xl transition-all duration-300">
                      <span className="font-semibold">Volunteer</span>
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover/btn:opacity-100 -translate-x-2 group-hover/btn:translate-x-0 transition-all" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Visit Us */}
            <div className="group relative lg:col-span-1 sm:col-span-2 shadow-2xl">
              <Card className="relative bg-primary text-primary-foreground rounded-3xl overflow-hidden h-full hover:shadow-primary/20 transition-all duration-500 border-none">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform">
                  <MapPin className="w-32 h-32" />
                </div>
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold leading-tight">Visit Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <address className="not-italic text-lg opacity-90 leading-relaxed">
                    69 Sanders Street<br />
                    Freetown, Sierra Leone
                  </address>
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider opacity-60">Call Us Anytime</span>
                    <a href="tel:+2348057119569" className="text-2xl font-bold block hover:underline decoration-white/30 truncate">
                      (234) 805 711 9569
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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
