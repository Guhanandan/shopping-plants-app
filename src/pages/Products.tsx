import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addToCart } from '../store/cartSlice';
import { setSelectedCategory } from '../store/plantSlice';

export default function Products() {
  const dispatch = useDispatch();
  const { plants, selectedCategory } = useSelector((state: RootState) => state.plants);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const categories = ['all', 'succulents', 'indoor', 'outdoor'];
  const filteredPlants = selectedCategory && selectedCategory !== 'all'
    ? plants.filter(plant => plant.category === selectedCategory)
    : plants;

  const isInCart = (plantId: number) => cartItems.some(item => item.id === plantId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => dispatch(setSelectedCategory(category === 'all' ? null : category))}
            className={`px-4 py-2 rounded-lg ${
              (category === 'all' && !selectedCategory) || category === selectedCategory
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPlants.map(plant => (
          <div key={plant.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
              <p className="text-gray-600 mb-4">{plant.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${plant.price.toFixed(2)}</span>
                <button
                  onClick={() => dispatch(addToCart(plant))}
                  disabled={isInCart(plant.id)}
                  className={`px-4 py-2 rounded-lg ${
                    isInCart(plant.id)
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {isInCart(plant.id) ? 'In Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}