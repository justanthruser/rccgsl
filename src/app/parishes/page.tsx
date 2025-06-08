import { MapPin, Phone, Mail, Clock, User } from 'lucide-react';
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
    phone: '+234 804 000 0000', // Phone number was in scientific notation
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
  }
,
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
  // Add more parishes as needed
  // Contact admin for full list
];

export default function ParishesPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Parishes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find a parish near you and join us for worship, fellowship, and spiritual growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {parishes.map((parish, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{parish.name}</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-2 mt-0.5 flex-shrink-0" />
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
                    
                    <div className="mt-3">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        Service Times:
                      </h4>
                      <ul className="space-y-1">
                        {parish.services.map((service, i) => (
                          <li key={i} className="text-gray-600 text-sm">
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-3">
                  <Button className="w-full" variant="outline" asChild>
                    <a href={`tel:${parish.phone}`}>
                      Call Now
                    </a>
                  </Button>
                  <Button className="w-full" asChild>
                    <a href={`https://maps.google.com?q=${encodeURIComponent(parish.address)}`} target="_blank" rel="noopener noreferrer">
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Can't find a parish near you?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're constantly expanding our network of parishes. Let us know your location, and we'll help you find the nearest RCCG parish.
          </p>
          <Button variant="outline" asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </div>
  );
}