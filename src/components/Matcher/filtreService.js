import { createSlice } from "@reduxjs/toolkit";

const CACHE_DELAY = 10;

const slice = createSlice({
  name: "filter",
  initialState: {
    list: [
      {
        title: "Cost of living",
        fields: [
          { label: "Low Income Tax", value: "low_income_tax" },
          { label: "Low Living Costs", value: "low_living_costs" },
          { label: "Text Text Txt", value: "text_text_txt" },
        ],
      },
      {
        title: "Lifestyle",
        fields: [
          { label: "😊Happy", value: "happy" },
          { label: "😄Fun", value: "fun" },
          { label: "🤞Peaceful", value: "peaceful" },
          { label: "💃Night life", value: "night_life" },
        ],
      },
      {
        title: "Life quality",
        fields: [
          { label: "Healthcare", value: "healthcare" },
          { label: "Wealthy Economy", value: "weathy_economy" },
          { label: "Low Crime", value: "low_crime" },
          { label: "Low Pollen", value: "low_pollen" },
          { label: "Few Guns", value: "few_guns" },
          { label: "Clean", value: "clean" },
          { label: "Few Corona Cases", value: "few_corona_cases" },
          { label: "Low Traffic", value: "low_traffic" },
        ],
      },
      {
        title: "Weather",
        fields: [
          { label: "🔥Hot", value: "hot" },
          { label: "🌨️Cold", value: "cold" },
          { label: "🌞Sunny", value: "sunny" },
        ],
      },
      {
        title: "Schools",
        fields: [
          { label: "Best Schools", value: "best_schools" },
          { label: "Low Living Costs", value: "low_living_costs0" },
          { label: "Best High Schools", value: "best_high_schools" },
        ],
      },
      {
        title: "Schools",
        fields: [
          { label: "Best Schools", value: "best_schools1" },
          { label: "Low Living Costs", value: "low_living_costs1" },
          { label: "Best High Schools", value: "best_high_schools1" },
        ],
      },
    ],
    loading: false,
    lastFetch: null,
    form: {
      title: "",
      text: "",
    },
  },
  reducers: {},
});

export const {} = slice.actions;

export default slice.reducer;