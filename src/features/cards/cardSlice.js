import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = { id: id, front: front, back: back };
    }
  }
});

export const addCard = cardSlice.actions.addCard;
export const selectCards = (state) => state.cards.cards;
export const cardReducer = cardSlice.reducer;
