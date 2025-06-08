'use client';

import { useState } from 'react';
import { Search, Filter, Play, Calendar, Clock, User, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

const sermons = [
  {
    id: 1,
    title: 'The Power of Faith',
    preacher: 'Pastor Favor Chi',
    date: '2023-11-15',
    duration: '45:22',
    thumbnail: '/images/sermon-1.jpg',
    category: 'Faith',
    series: 'Foundations of Faith',
    videoUrl: 'https://www.youtube.com/embed/example1',
    audioUrl: '#',
    downloads: {
      video: '#',
      audio: '#',
      notes: '#'
    },
    description: 'In this powerful message, Pastor John explores the depths of faith and how it can move mountains in our lives.'
  },
  {
    id: 2,
    title: 'Walking in Love',
    preacher: 'Pastor Favor Chi',
    date: '2023-11-08',
    duration: '38:15',
    thumbnail: '/images/sermon-2.jpg',
    category: 'Love',
    series: 'The Greatest Commandment',
    videoUrl: 'https://www.youtube.com/embed/example2',
    audioUrl: '#',
    downloads: {
      video: '#',
      audio: '#',
      notes: '#'
    },
    description: 'Discover the transformative power of walking in love in every area of your life.'
  },
  // Add more sermon objects as needed
];

const categories = ['All', 'Faith', 'Love', 'Hope', 'Salvation', 'Family', 'Leadership'];
const series = ['All', 'Foundations of Faith', 'The Greatest Commandment', 'Walking with God'];

export default function SermonsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSeries, setSelectedSeries] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedSermon, setSelectedSermon] = useState(null);

  const filteredSermons = sermons.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       sermon.preacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       sermon.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || sermon.category === selectedCategory;
    const matchesSeries = selectedSeries === 'All' || sermon.series === selectedSeries;
    
    return matchesSearch && matchesCategory && matchesSeries;
  });

  const sortedSermons = [...filteredSermons].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === 'oldest') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'preacher') {
      return a.preacher.localeCompare(b.preacher);
    }
    return 0;
  });

  const openSermonModal = (sermon: any) => {
    setSelectedSermon(sermon);
    // In a real app, you might want to use a modal or routing to show the full sermon
    console.log('Selected sermon:', sermon);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sermons</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch or listen to inspiring messages from our services.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search sermons..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full">
                <Filter className="h-4 w-4 mr-2 opacity-50" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedSeries} onValueChange={setSelectedSeries}>
              <SelectTrigger className="w-full">
                <Filter className="h-4 w-4 mr-2 opacity-50" />
                <SelectValue placeholder="Series" />
              </SelectTrigger>
              <SelectContent>
                {series.map((seriesItem) => (
                  <SelectItem key={seriesItem} value={seriesItem}>
                    {seriesItem}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full">
                <span>Sort by: </span>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="title">Title (A-Z)</SelectItem>
                <SelectItem value="preacher">Preacher (A-Z)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              {filteredSermons.length} {filteredSermons.length === 1 ? 'sermon' : 'sermons'} found
            </p>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download All
            </Button>
          </div>
        </div>

        {/* Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedSermons.map((sermon) => (
            <Card key={sermon.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-video bg-gray-100">
                <img
                  src={sermon.thumbnail}
                  alt={sermon.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="lg"
                    className="rounded-full w-16 h-16 bg-white/90 hover:bg-white"
                    onClick={() => openSermonModal(sermon)}
                  >
                    <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {sermon.duration}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {sermon.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    {new Date(sermon.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{sermon.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{sermon.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    <span>{sermon.preacher}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary">
                    Watch
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedSermons.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No sermons found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedSeries('All');
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}

        {/* Pagination would go here */}
        {sortedSermons.length > 0 && (
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="default" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}