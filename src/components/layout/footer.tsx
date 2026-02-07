import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Clock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
              Redeemed Christian Church of God, Sierra Leone is a movement of RCCG Global in Sierra Leone with the mission of spreading the gospel of Jesus Christ and making disciples of all nations.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/rccgsierraleone/" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/rccg_sl_" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:rccgsierraleoneo1@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/sermons" className="text-gray-400 hover:text-white transition-colors">Sermons</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/ministries" className="text-gray-400 hover:text-white transition-colors">Ministries</Link></li>
              <li><Link href="/give" className="text-gray-400 hover:text-white transition-colors">Give</Link></li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Times</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-2" />
                Sunday Service: 10:00 AM
              </li>
              <li className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-2" />
                Bible Study: Wed 7:00 PM
              </li>
              <li className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-2" />
                Prayer Meeting: Fri 7:00 PM
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">69 Sanders Street, Freetown, Sierra Leone</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-primary mr-2" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">(234) 805 711 9569</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-primary mr-2" />
                <a href="mailto:info@rccgsl.org" className="text-gray-400 hover:text-white transition-colors">info@rccgsl.org</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} RCCG Solution Centre. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
