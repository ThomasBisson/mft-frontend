import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface BasketState {
  needToOpen: boolean;
}

// Define the initial state using that type
const initialState: BasketState = {
    needToOpen: false,
}

export const basketSlice = createSlice({
  name: 'basket',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    open: state => {
      state.needToOpen = true;
    },
    close: state => {
      state.needToOpen = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // }
  },
  selectors: {
    selectBasketNeedToOpen: basket => basket.needToOpen,
  }
})

export const { open, close } = basketSlice.actions
export const { selectBasketNeedToOpen } = basketSlice.selectors
export default basketSlice.reducer;