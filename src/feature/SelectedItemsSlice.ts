import { createSlice } from '@reduxjs/toolkit';
import { itemsProps } from '@/components/CreateRoom/Step/SelectCard/PlaceInfoCarousel';
import produce from 'immer'; // immer 라이브러리 import
import { ReactNode } from 'react';

export interface SelectedItemsState {
  house: itemsProps[];
  food: itemsProps[];
  attraction: itemsProps[];
}
export interface SelectedItemCheck {
  itemList: SelectedItemsState;
}

const initialState: SelectedItemsState = {
  house: [{ IMG: '', name: '' }],
  food: [{ IMG: '', name: '' }],
  attraction: [{ IMG: '', name: '' }],
};

const SelectedItemsSlice = createSlice({
  name: 'selecteditem',
  initialState,
  reducers: {
    SelectedHouseItem: (state, action) => {
      const place = action.payload;
      const hasDuplicate = state.house.some((item) => item.name === place.name);

      if (!hasDuplicate) {
        return produce(state, (draft) => {
          draft.house.push(place);
        });
      }
      return state;
    },
    SelectedFoodItem: (state, action) => {
      const place = action.payload;
      const hasDuplicate = state.food.some((item) => item.name === place.name);

      if (!hasDuplicate) {
        return produce(state, (draft) => {
          draft.food.push(place);
        });
      }
    },
    SelectedAttractionItem: (state, action) => {
      const place = action.payload;
      const hasDuplicate = state.attraction.some(
        (item) => item.name === place.name,
      );

      if (!hasDuplicate) {
        return produce(state, (draft) => {
          draft.attraction.push(place);
        });
      }
    },
    removeSelectedItem: (state, action) => {
      const { category, itemToRemove } = action.payload;

      return produce(state, (draft) => {
        if (category === 'house') {
          draft.house = draft.house.filter(
            (item) => item.name !== itemToRemove.name,
          );
        } else if (category === 'food') {
          draft.food = draft.food.filter(
            (item) => item.name !== itemToRemove.name,
          );
        } else if (category === 'attraction') {
          draft.attraction = draft.attraction.filter(
            (item) => item.name !== itemToRemove.name,
          );
        }
      });
    },
    removeAll: (state) => {
      return produce(state, (draft) => {
        draft.house = [];
        draft.food = [];
        draft.attraction = [];
      });
    },
  },
});
export default SelectedItemsSlice.reducer;
export const {
  SelectedHouseItem,
  SelectedFoodItem,
  SelectedAttractionItem,
  removeSelectedItem,
  removeAll,
} = SelectedItemsSlice.actions;
