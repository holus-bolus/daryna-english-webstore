import { Product } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
  items: Product[];
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    description: 'This is product 1',
    imageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 300,
    description: 'This is product 2',
    imageUrl: 'https://picsum.photos/200/300',
  },
];

const initialState: ProductsState = {
  items: mockProducts,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addProducts } = productsSlice.actions;

export default productsSlice.reducer;
