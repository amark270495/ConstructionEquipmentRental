import React from 'react';

const EquipmentCard = ({ name, type, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img className="w-full h-56 object-cover object-center" src={image} alt={name} onError={(e) => {e.target.onerror = null; e.target.src='https://placehold.co/600x400/cccccc/000000?text=Image+Not+Found'}} />
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

export default EquipmentCard;