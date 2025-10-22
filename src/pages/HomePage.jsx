import React from 'react';
import EquipmentCard from '../components/EquipmentCard.jsx';

const HomePage = () => {
    const equipment = [
    { name: 'Excavator', type: 'Heavy Machinery', image: 'https://placehold.co/600x400/cccccc/000000?text=Excavator' },
    { name: 'Bulldozer', type: 'Heavy Machinery', image: 'https://placehold.co/600x400/cccccc/000000?text=Bulldozer' },
    { name: 'Crane', type: 'Lifting Equipment', image: 'https://placehold.co/600x400/cccccc/000000?text=Crane' },
    { name: 'Dump Truck', type: 'Hauling Equipment', image: 'https://placehold.co/600x400/cccccc/000000?text=Dump+Truck' },
    { name: 'Grader', type: 'Heavy Machinery', image: 'https://placehold.co/600x400/cccccc/000000?text=Grader' },
    { name: 'Loader', type: 'Heavy Machinery', image: 'https://placehold.co/600x400/cccccc/000000?text=Loader' },
  ];
  
  return (
    <div>
      <header className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Your Trusted Equipment Partner
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            High-quality construction equipment for rent or sale. We have what you need to get the job done right.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="relative rounded-md shadow-sm w-full">
              <input type="text" className="form-input block w-full sm:text-sm sm:leading-5 p-4 rounded-md" placeholder="Search for equipment..." />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Featured Equipment</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {equipment.map(item => <EquipmentCard key={item.name} {...item} />)}
            </div>
        </div>
      </main>

       <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; 2025 EquipRent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;