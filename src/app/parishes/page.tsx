'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const parishes = [
  {
    name: 'The Anchor Centre',
    address: 'Regent Road, Freetown',
    phone: '+232 77 755 968',
    pastor: 'Pastor Juwon Ariyo',
    services: ['Sunday: 8:00 AM - 11:00 AM', 'Wednesday: 5:30 PM - 7:00 PM']
  },
  {
    name: 'Peace Assembly Area',
    address: '69, Sanders Street, Freetown',
    phone: '+232 88 116 237',
    pastor: 'Pastor Olukoya Adewale',
    services: ['Sunday: 9:00 AM - 12:00 PM', 'Thursday: 6:00 PM - 7:30 PM']
  },
  {
    name: 'Potters House Parish',
    address: 'Off Regent Road-Back of NATCOM Hill Station',
    phone: '+232 99 662 802',
    pastor: 'Pastor Saffa Joshua',
    services: ['Sunday: 8:30 AM - 11:30 AM', 'Tuesday: 5:30 PM - 7:00 PM']
  },
  {
    name: 'Mount of Olives Parish',
    address: '4, Edna Drive, Wilkinson Road, Freetown',
    phone: '+234 804 000 0000', 
    pastor: 'Pastor Ifesineke Inwafili',
    services: ['Sunday: 9:30 AM - 12:30 PM', 'Friday: 6:00 PM - 7:30 PM']
  },
  {
    name: 'Divine Manifestation Area',
    address: '81, Freetown Road, Goderich',
    phone: '+232 31 286 090',
    pastor: 'Pastor Sheku John Foday',
    services: ['Sunday: 8:00 AM - 11:00 AM', 'Wednesday: 5:30 PM - 7:00 PM']
  },
  {
    name: 'Flames of Miracle Parish',
    address: '4, Abacha Street, Freetown',
    phone: '+232 76 733 667',
    pastor: 'Pastor Yambasu Olivetta',
    services: ['Sunday: 9:00 AM - 12:00 PM', 'Thursday: 6:00 PM - 7:30 PM']
  },
  {
    name: 'Praise Sanctuary Area',
    address: 'Off Peninsular Road, By Emergency Hospital, Adonkia',
    phone: '+232 32 863 148',
    pastor: 'Pastor Omotosho Michael',
    services: ['Sunday: 8:30 AM - 11:30 AM', 'Tuesday: 5:30 PM - 7:00 PM']
  },
  {
    name: 'Desire of Nations Parish',
    address: 'Temgbe Town, Freetown',
    phone: '+232 76 426 108',
    pastor: 'Pastor James Osaro',
    services: ['Sunday: 9:00 AM - 12:00 PM', 'Friday: 6:00 PM - 7:30 PM']
  },
  {
    name: 'Precious Corner Stone Parish',
    address: '45B Main Motor Road, Benkeh Area, Tintofor, Lungi',
    phone: '+232 77 058 136',
    pastor: 'Pastor Samuel Baryoh',
    services: ['Sunday: 8:00 AM - 11:00 AM', 'Wednesday: 5:30 PM - 7:00 PM']
  },
  {
    name: 'City of David Parish - Lungi',
    address: 'Lungi',
    phone: '+232 77 774 858',
    pastor: 'Pastor Comfort Richard',
    services: ['Sunday: 9:00 AM - 12:00 PM', 'Thursday: 6:00 PM - 7:30 PM']
  },
  {
    name: 'Shining Light Parish',
    address: 'Tardi, Lungi',
    phone: '+232 30 194 409',
    pastor: 'Pastor Alfred Deen Kamara',
    services: ['Sunday: 8:30 AM - 11:30 AM', 'Tuesday: 5:30 PM - 7:00 PM']
  },
  {
    name: 'Word of Life Parish',
    address: 'Transmeter, Lungi',
    phone: '+232 79 429 376',
    pastor: 'Pastor Emmanuel M. Sesay',
    services: ['Sunday: 9:00 AM - 12:00 PM', 'Thursday: 6:00 PM - 7:30 PM']
  },
  {
    name: 'Dominion Area',
    address: 'Bernlyn Primary School, A.J. Momoh Street, Tower Hill, Freetown',
    phone: '+232 76 446 131',
    pastor: 'Pastor Samuel Olajide Akingbade',
    services: ['Sunday: 8:00 AM - 11:00 AM', 'Wednesday: 5:30 PM - 7:00 PM']
  },
  {
    name: 'Liberty Model Parish',
    address: 'New England Mount Camel, Behind International School, Freetown',
    phone: '+232 77 941 929',
    pastor: 'Pastor John Paul Anyichie',
    services: ['Sunday: 9:30 AM - 12:30 PM', 'Friday: 6:00 PM - 7:30 PM']
  },
  {
    name: 'Mega Dominion Assembly Parish',
    address: 'Makoloh, Koya Chiefdom',
    phone: '+232 78 912 870',
    pastor: 'Pastor Michael Akingbade',
    services: ['Sunday: 8:00 AM - 11:00 AM', 'Wednesday: 5:30 PM - 7:00 PM']
  },
  {
    name: 'Rock of Ages Parish',
    address: 'Alpha Wurie Drive, Hill Station',
    phone: '+232 76 384 917',
    pastor: 'Pastor Daniel Momoh Sandy',
    services: ['Sunday: 9:00 AM - 12:00 PM', 'Thursday: 6:00 PM - 7:30 PM']
  },
  {
    name: 'Dominion Praise Parish',
    address: "N'Guala, Moyamba District",
    phone: '+232 75 695 550',
    pastor: 'Pastor Ambrose Joshua Samu',
    services: ['Sunday: 8:30 AM - 11:30 AM', 'Tuesday: 5:30 PM - 7:00 PM']
  },
  {
    name: 'Garden of Peace Parish',
    address: 'No 9, Redemption School, Wilberforce',
    phone: '+232 76 625 626',
    pastor: 'Pastor Makallay Bangura',
    services: ['Sunday: 9:00 AM - 12:00 PM', 'Friday: 6:00 PM - 7:30 PM']
  },
  {
    name: 'Prince of Peace Parish',
    address: 'IMATT, Hill Station, Freetown',
    phone: '+232 77 438 306',
    pastor: 'Pastor Joshua Kallon',
    services: ['Sunday: 8:00 AM - 11:00 AM', 'Wednesday: 5:30 PM - 7:00 PM']
  },
  {
    name: 'City of God',
    address: 'Furah Bay College, Freetown',
    phone: '+232 99 436 040',
    pastor: 'Pastor Samson Adeniyi Ajakaye',
    services: ['Sunday: 9:00 AM - 12:00 PM', 'Thursday: 6:00 PM - 7:30 PM']
  },
  {
    name: 'Fortress Assembly Area',
    address: 'Soldier Tong, Looking Town, Grafton Village, Freetown',
    phone: '+232 88 042 425',
    pastor: 'Pastor Ben-Shidah Olukayode J.',
    services: ['Sunday: 9:00 AM - 12:00 PM', 'Thursday: 6:00 PM - 7:30 PM']
  },
  {
    name: 'Comforter Parish',
    address: 'Old Walf, Wellington',
    phone: '+232 78 188 574',
    pastor: 'Pastor Kargbo Theresa',
    services: ['Sunday: 8:00 AM - 11:00 AM', 'Wednesday: 5:30 PM - 7:00 PM']
  },
  {
    name: 'Faith Assembly',
    address: 'Freetown',
    phone: '+232 77 008 252',
    pastor: 'Pastor Thomas Tikeh Meindy',
    services: ['Sunday: 9:00 AM - 12:00 PM', 'Friday: 6:00 PM - 7:30 PM']
  },
  {
    name: "Joseph's Palace Area",
    address: '58, Kroo Town Road, Opposite Adelaide Street, Freetown',
    phone: '+232 30 088 788',
    pastor: 'Pastor Eegunnike Patrick',
    services: ['Sunday: 8:30 AM - 11:30 AM', 'Tuesday: 5:30 PM - 7:00 PM']
  },
  {
    name: 'Miracle Assembly Parish',
    address: 'Waterloo Street, Freetown',
    phone: '+232 78 030 018',
    pastor: 'Pastor Zainab Mansaray',
    services: ['Sunday: 9:00 AM - 12:00 PM', 'Thursday: 6:00 PM - 7:30 PM']
  },
  {
    name: 'Christ House',
    address: 'Kongo Town, Freetown',
    phone: '+232 99 723 835',
    pastor: 'Pastor Rufin Etche',
    services: ['Sunday: 8:00 AM - 11:00 AM', 'Wednesday: 5:30 PM - 7:00 PM']
  },
  {
    name: 'Power Sanctuary Area',
    address: '15C, Main Motor Road, Calaba Town',
    phone: '+232 76 553 262',
    pastor: 'Pastor Sia Momoh',
    services: ['Sunday: 9:30 AM - 12:30 PM', 'Friday: 6:00 PM - 7:30 PM']
  },
  {
    name: 'Rehoboth Parish',
    address: 'Mayenkine, Calaba Town',
    phone: '+232 78 182 748',
    pastor: 'Pastor Fatu Esther Turay',
    services: ['Sunday: 8:00 AM - 11:00 AM', 'Wednesday: 5:30 PM - 7:00 PM']
  },
  {
    name: 'Power Parish',
    address: 'Waterloo, Campbell Town',
    phone: '+232 79 788 545',
    pastor: 'Pastor Gilbert Sonny',
    services: ['Sunday: 9:00 AM - 12:00 PM', 'Thursday: 6:00 PM - 7:30 PM']
  },
  {
    name: 'Faith Area',
    address: 'John F. Kennedy Primary School, Cline Town, Freetown',
    phone: '+232 76 545 299',
    pastor: 'Pastor Abubakar Bangura',
    services: ['Sunday: 8:30 AM - 11:30 AM', 'Tuesday: 5:30 PM - 7:00 PM']
  },
  // Add more parishes as needed
  // Contact admin for full list
];

const ITEMS_PER_PAGE = 9;

export default function ParishesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(parishes.length / ITEMS_PER_PAGE);
  
  // Get current parishes
  const indexOfLastParish = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstParish = indexOfLastParish - ITEMS_PER_PAGE;
  const currentParishes = parishes.slice(indexOfFirstParish, indexOfLastParish);
  
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Parishes</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find an RCCG parish near you. We have {parishes.length} locations across Sierra Leone to serve you better.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {currentParishes.map((parish, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{parish.name}</h3>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">{parish.address}</p>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-2" />
                  <a href={`tel:${parish.phone}`} className="text-gray-600 hover:text-primary">
                    {parish.phone}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-2" />
                  <a href="mailto:info@rccgsl.org" className="text-gray-600 hover:text-primary">
                    info@rccgsl.org
                  </a>
                </div>
                
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex items-center text-gray-700 mb-2">
                    <User className="h-5 w-5 text-primary mr-2" />
                    <span className="font-medium">Pastor:</span>
                    <span className="ml-1">{parish.pastor}</span>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Service Times:</p>
                        <ul className="list-disc list-inside text-gray-600 ml-1">
                          {parish.services.map((service, i) => (
                            <li key={i} className="text-sm">{service}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-3">
                <Button variant="outline" className="flex-1" asChild>
                  <a href={`tel:${parish.phone}`}>
                    <Phone className="h-4 w-4 mr-2" /> Call
                  </a>
                </Button>
                <Button className="flex-1" asChild>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(parish.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-4 w-4 mr-2" /> Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium ${
              currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium ${
              currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{indexOfFirstParish + 1}</span> to{' '}
              <span className="font-medium">
                {Math.min(indexOfLastParish, parishes.length)}
              </span>{' '}
              of <span className="font-medium">{parishes.length}</span> parishes
            </p>
          </div>
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                  currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              
              {/* Page numbers */}
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                // Show first page, last page, current page, and pages around current page
                let pageNumber;
                if (totalPages <= 5) {
                  pageNumber = i + 1;
                } else if (currentPage <= 3) {
                  pageNumber = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNumber = totalPages - 4 + i;
                } else {
                  pageNumber = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNumber}
                    onClick={() => paginate(pageNumber)}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                      currentPage === pageNumber
                        ? 'bg-primary text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary z-10'
                        : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
              
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                  currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span className="sr-only">Next</span>
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}