import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = {
        id: id,
        name: name,
        topicId: topicId,
        cardIds: cardIds
      };
    }
  }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const addQuiz = quizzesSlice.actions.addQuiz;
export const quizzesReducer = quizzesSlice.reducer;
export const addQuizAndAssotiate = (payload) => {
  return (dispatch) => {
    dispatch(addQuiz(payload));
    dispatch(addQuizId(payload));
  };
};
