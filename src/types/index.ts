export interface Plant {
  id: number;
  name: string;
  price: number;
  category: 'succulents' | 'indoor' | 'outdoor';
  image: string;
  description: string;
}

export interface CartItem extends Plant {
  quantity: number;
}