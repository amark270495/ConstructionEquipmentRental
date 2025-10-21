import React from 'react';

// TopNavigation Component
const TopNavigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-800">EquipRent</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Equipment</a>
                <a href="#" className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                {/* Heroicon name: bell */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button type="button" className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// EquipmentCard Component
const EquipmentCard = ({ name, type, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img className="w-full h-56 object-cover object-center" src={image} alt={name} />
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-sm text-gray-600">{type}</p>
        <button className="mt-4 w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
          View Details
        </button>
      </div>
    </div>
  );
};

// HomePage Component
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
              <input type="text" className="form-input block w-full sm:text-sm sm:leading-5 p-4" placeholder="Search for equipment..." />
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
          <p className="text-gray-400">&copy; 2024 EquipRent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Main App Component that ties everything together
const App = () => {
  return (
    <div>
      <TopNavigation />
      <HomePage />
    </div>
  );
};

export default App;