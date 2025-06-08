import { MapPin, Phone, Mail, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const parishes = [
  {
    name: 'RCCG Solution Centre',
    address: '69 Sanders Street, Freetown',
    phone: '+232 30 123456',
    email: 'solutioncentre@rccgsl.org',
    pastor: 'Pastor John Doe',
    services: ['Sunday: 8:00 AM - 11:00 AM', 'Wednesday: 5:30 PM - 7:00 PM']
  },
  {
    name: 'RCCG House of Praise',
    address: '123 Main Street, Freetown',
    phone: '+232 30 234567',
    email: 'houseofpraise@rccgsl.org',
    pastor: 'Pastor Jane Smith',
    services: ['Sunday: 9:00 AM - 12:00 PM', 'Thursday: 6:00 PM - 7:30 PM']
  },
  {
    name: 'RCCG Divine Encounter',
    address: '456 Church Road, Freetown',
    phone: '+232 30 345678',
    email: 'divineencounter@rccgsl.org',
    pastor: 'Pastor Michael Johnson',
    services: ['Sunday: 7:30 AM - 10:30 AM', 'Tuesday: 5:00 PM - 6:30 PM']
  },
  {
    name: 'RCCG Glory Tabernacle',
    address: '789 Worship Avenue, Freetown',
    phone: '+232 30 456789',
    email: 'glorytabernacle@rccgsl.org',
    pastor: 'Pastor Sarah Williams',
    services: ['Sunday: 10:00 AM - 1:00 PM', 'Friday: 5:00 PM - 7:00 PM']
  }
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
                    <a href={`mailto:${parish.email}`} className="text-gray-600 hover:text-primary">
                      {parish.email}
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