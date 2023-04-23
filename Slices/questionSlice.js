import { createSlice } from "@reduxjs/toolkit";

//initial state - all the checkbox options. One state for each option
/**
 * Q1: How would you rate your Customer Experience?
 *   a. Horrible b. Not Satisfied c. Satisfied d. Excellent
 *
 * Q2. Choose all the Job types that apply:
 *   a. Landscaping b. Concrete c. Pavers d. Design
 *
 * Q3. Tell us about your experience
 */
const initialState = {
  RatingOptionHorrible: false,
  RatingOptionNSatisfied: false,
  RatingOptionSatisfied: false,
  RatingOptionExcellent: false,
  ServiceOptionLandscaping: false,
  ServiceOptionConcrete: false,
  ServiceOptionPavers: false,
  ServiceOptionDesign: false,
  OptionalTextInput: "",
};

// create data slice
export const questionSlice = createSlice({
  name: "questionData",
  initialState,
  reducers: {
    setRatingOptionHorrible: (state, action) => {
      state.RatingOptionHorrible = action.payload;
    },
    setRatingOptionNSatisfied: (state, action) => {
      state.RatingOptionNSatisfied = action.payload;
    },
    setRatingOptionSatisfied: (state, action) => {
      state.RatingOptionSatisfied = action.payload;
    },
    setRatingOptionExcellent: (state, action) => {
      state.RatingOptionExcellent = action.payload;
    },
    setServiceOptionLandscaping: (state, action) => {
      state.ServiceOptionLandscaping = action.payload;
    },
    setServiceOptionConcrete: (state, action) => {
      state.ServiceOptionConcrete = action.payload;
    },
    setServiceOptionPavers: (state, action) => {
      state.ServiceOptionPavers = action.payload;
    },
    setServiceOptionDesign: (state, action) => {
      state.ServiceOptionDesign = action.payload;
    },
    setOptionalTextInput: (state, action) => {
      state.OptionalTextInput = action.payload;
    },
  },
});

// export reducers
export const {
  setRatingOptionHorrible,
  setRatingOptionNSatisfied,
  setRatingOptionSatisfied,
  setRatingOptionExcellent,
  setServiceOptionLandscaping,
  setServiceOptionConcrete,
  setServiceOptionPavers,
  setServiceOptionDesign,
  setOptionalTextInput,
} = questionSlice.actions;

// create and export selectors
export const selectRatingOptionHorrible = (state) =>
  state.questionData.RatingOptionHorrible;

export const selectRatingOptionNSatisfied = (state) =>
  state.questionData.RatingOptionNSatisfied;

export const selectRatingOptionSatisfied = (state) =>
  state.questionData.RatingOptionSatisfied;

export const selectRatingOptionExcellent = (state) =>
  state.questionData.RatingOptionExcellent;

export const selectServiceOptionLandscaping = (state) =>
  state.questionData.ServiceOptionLandscaping;

export const selectServiceOptionConcrete = (state) =>
  state.questionData.ServiceOptionConcrete;

export const selectServiceOptionPavers = (state) =>
  state.questionData.ServiceOptionPavers;

export const selectServiceOptionDesign = (state) =>
  state.questionData.ServiceOptionDesign;

export const selectOptionalTextInput = (state) =>
  state.questionData.OptionalTextInput;

export default questionSlice.reducer;
