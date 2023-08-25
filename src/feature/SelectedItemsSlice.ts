import { createSlice } from '@reduxjs/toolkit';

export interface SelectedItemsState{
    items: string[];
}
export interface SelectedItemCheck {
    itemList: SelectedItemsState;
}


const initialState: SelectedItemsState = {
    items: [],
  };

let SelectedItemsSlice = createSlice({
    name: 'selecteditem',
    initialState,
    reducers: {
        SelectedItem: (state,action) => {
            const place = action.payload;
            state.items.push(place)
        }

    }

});

export default SelectedItemsSlice.reducer;
export const { SelectedItem } =
  SelectedItemsSlice.actions;