import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { quizzesReducer } from "../quizzes/quizzesSlice";
const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      // THIS IS ACTION CREATOR
      const { id, name, icon } = action.payload;
      state.topics[id] = { id: id, name: name, icon: icon, quizIds: [] };
    },
    addQuizId: (state, action) => {
      const { id, topicId } = action.payload;
      state.topics[topicId].quizIds.push(id);
    }
  }
});

export const addTopic = topicsSlice.actions.addTopic;
// after addTopic(payload) you will recieve {type: "topics/addTopic", payload: payload}, this is an action
export const selectTopics = (state) => state.topics.topics;
// This is selector. It's selects all topics from the state (not so hard, just commenting everything)
export const topicsReducer = topicsSlice.reducer;
//it is waiting for actions, for example addTopic

export const addQuizId = topicsSlice.actions.addQuizId;
