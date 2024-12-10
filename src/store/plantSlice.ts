import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Plant } from '../types';

const plants: Plant[] = [
  {
    id: 1,
    name: "Snake Plant",
    price: 29.99,
    category: "indoor",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7a?auto=format&fit=crop&w=800&q=80",
    description: "Easy-care indoor plant with striking vertical leaves"
  },
  {
    id: 2,
    name: "Echeveria Elegans",
    price: 14.99,
    category: "succulents",
    image: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=800&q=80",
    description: "Beautiful rosette-forming succulent"
  },
  {
    id: 3,
    name: "Monstera Deliciosa",
    price: 49.99,
    category: "indoor",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
    description: "Tropical plant with distinctive split leaves"
  },
  {
    id: 4,
    name: "Lavender",
    price: 19.99,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=800&q=80",
    description: "Fragrant flowering herb perfect for gardens"
  },
  {
    id: 5,
    name: "Jade Plant",
    price: 24.99,
    category: "succulents",
    image: "https://images.unsplash.com/photo-1509937528035-ad76254b0356?auto=format&fit=crop&w=800&q=80",
    description: "Classic succulent known for good luck"
  },
  {
    id: 6,
    name: "Hydrangea",
    price: 34.99,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1504198580308-d186fefc3fbb?auto=format&fit=crop&w=800&q=80",
    description: "Stunning flowering shrub with large blooms"
  }
];

interface PlantState {
  plants: Plant[];
  selectedCategory: string | null;
}

const initialState: PlantState = {
  plants,
  selectedCategory: null
};

const plantSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    }
  }
});

export const { setSelectedCategory } = plantSlice.actions;
export default plantSlice.reducer;