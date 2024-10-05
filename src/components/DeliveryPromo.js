import React from 'react';
import { FastFood, Building2, Utensils } from 'lucide-react'; // Changed Burger to FastFood

export default function DeliveryPromo() {
  return (
    <div className="relative bg-[#f5e6c9] overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNbNo_z9SqAXCb-juBP-HTnuyhJks7ADzISM5A92fsC-dkLK7_n8DEZMLNgp-xozpIn3s&usqp=CAU"
              alt="Eatsy delivery bag"
              width={400}
              height={400}
              className="mx-auto"
            />
            {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="bg-red-500 rounded-full p-8">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Eatsy logo"
                  width={100}
                  height={100}
                />
              </div>
            </div> */}
          </div>
          <div>
            <h2 className="text-red-500 text-sm font-bold mb-2">#StayHome</h2>
            <h3 className="text-4xl font-bold mb-8 text-red-500">Free delivery 7<br />days a week</h3>
            <div className="space-y-6 mb-96">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4">
                  <Utensils className="text-red-500" size={24} /> {/* Replaced Burger */}
                </div>
                <div>
                  <h4 className="font-bold mb-1">Choose Burger</h4>
                  <p className="text-gray-600">Sesame snaps tootsie roll dessert candy canes apple pie marzipan topping toffee croissant.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4">
                  <Building2 className="text-red-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Delivery or Takeaway</h4>
                  <p className="text-gray-600">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4">
                  <Utensils className="text-red-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Enjoy Burger</h4>
                  <p className="text-gray-600">Praesent interdum mollis neque purus sed diam integer, in egestas nulla eget pede.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#EF4444" fillOpacity="1" d="M0,96L80,106.7C160,117,320,139,480,138.7C640,139,800,117,960,112C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
   
    </div>
  );
}
