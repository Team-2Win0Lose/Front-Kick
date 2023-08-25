import { createSlice } from '@reduxjs/toolkit';
import { itemsProps } from '@/components/CreateRoom/Step/SelectCard/PlaceInfoCarousel';
import produce from 'immer'; // immer 라이브러리 import

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
      // immer의 produce 함수를 사용하여 변경 작업 수행
      return produce(state, (draft) => {
        draft.house.push(place);
      });
    },
    SelectedFoodItem: (state, action) => {
      const place = action.payload;
      return produce(state, (draft) => {
        draft.food.push(place);
      });
    },
    SelectedAttractionItem: (state, action) => {
      const place = action.payload;
      return produce(state, (draft) => {
        draft.attraction.push(place);
      });
    },
  },
});
export default SelectedItemsSlice.reducer;
export const { SelectedHouseItem, SelectedFoodItem, SelectedAttractionItem } =
  SelectedItemsSlice.actions;
