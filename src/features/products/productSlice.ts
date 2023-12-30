import { Product } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import harryPotterImage from '../../assets/images/photo_2023-12-18_16-33-03-1.webp';
import adventImage from '../../assets/images/photo_2023-12-01_16-03-24.webp';

interface ProductsState {
  items: Product[];
}

const mockProducts: Product[] = [
  {
    id: uuidv4(),
    name: 'Harry Potter workbook',
    price: 250,
    description:
      'Для шанувальників Гаррі Поттера та англійської мови.\n' +
      '\n' +
      '🦉для дітей та дорослих (9+)\n' +
      '\n' +
      '🦉 3 рівня складності (А1, А2, В1)\n' +
      '\n' +
      '🦉3 відеофрагмента (до 5 хвилин) з QR-кодом\n' +
      '\n' +
      '🦉20 сторінок\n' +
      '\n' +
      '(Словник з 93 слів та фраз, 15 захоплюючих вправ, гарні ілюстрації, сторінка цікавих фактів)\n' +
      '\n' +
      '🦉 словник у вигляді електронних карток Quizlet, з якими можна грати та ефективнозапам’ятовувати (доступ по QR-коду)\n' +
      '\n' +
      '🦉 посилання на увесь фільм в оригіналі з субтитрами\n' +
      '\n' +
      '🦉відповіді у кінці',
    imageUrl: harryPotterImage,
  },
  {
    id: uuidv4(),
    name: 'English Advent',
    price: 448,
    description:
      'English Advent містить:\n' +
      '\n' +
      '24 сторінок різноманітних різдвяних завдань для рівнів А2, В1, В2\n' +
      '\n' +
      '(говоріння, читання, аудіювання, письмо, ідіоми, словник, тести, різдвяні пісні, фільми, фестивалі, загадки, рецепти та багато іншого)\n' +
      '\n' +
      '✨️ Підходить для самостійного навчання або як готовий зимовий та різдвяний матеріал для уроків з учнями.',
    imageUrl: adventImage,
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
