import { MapPin, Phone, Clock } from 'lucide-react';

export default function Location() {
  return (
    <div className="container bg-[#6B939B] mx-auto px-4 py-20 border-b-4  border-red-500">
      <h1 className="text-4xl font-bold mb-20 text-center text-red-500 rounded-full bg-white py-3 px-5 mx-20">Our Location</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 text-red-500 flex-shrink-0" />
                <p className="text-gray-700">
                  123 Burger Street<br />
                  New York, NY 10001
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-red-500" />
                <p className="text-gray-700">(123) 456-7890</p>
              </div>
              <div className="flex items-start">
                <Clock className="mr-3 text-red-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-semibold">Hours of Operation:</p>
                  <p className="text-gray-700">Monday - Friday: 11:00 AM - 10:00 PM</p>
                  <p className="text-gray-700">Saturday - Sunday: 12:00 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="h-[400px] md:h-full relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919534!2d-74.00597368459418!3d40.74076797932818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1621436591972!5m2!1sen!2sus"
            className="absolute inset-0 w-full h-full rounded-lg shadow-md"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Eatsy Restaurant Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
