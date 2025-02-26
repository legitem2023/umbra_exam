import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TagState {
  tags: string[];
}

const initialState: TagState = {
  tags: [],
};

const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTag: (state, action: PayloadAction<string>) => {
      if (!state.tags.includes(action.payload)) {
        state.tags.push(action.payload);
      }
    },
    removeTag: (state, action: PayloadAction<string>) => {
      state.tags = state.tags.filter(tag => tag !== action.payload);
    },
    setTags: (state, action: PayloadAction<string[]>) => {
      state.tags = action.payload;
    },
    clearTags: (state) => {
      state.tags = [];
    },
  },
});

export const { addTag, removeTag, setTags, clearTags } = tagSlice.actions;
export default tagSlice.reducer;
