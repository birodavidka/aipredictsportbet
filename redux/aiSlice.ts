import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAIPredictions } from "@/services/aiPredictionsService";

interface AIPrediction {
  id: string;
  match: string;
  recommendedBet: string;
  confidence: number; // AI által adott valószínűség
}

interface AIState {
  predictions: AIPrediction[];
  loading: boolean;
}

const initialState: AIState = {
  predictions: [],
  loading: false,
};

// 🔥 AI ajánlások lekérése Firestore-ból
export const fetchAIPredictions = createAsyncThunk("ai/fetchPredictions", async () => {
  return await getAIPredictions();
});

const aiSlice = createSlice({
  name: "ai",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAIPredictions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAIPredictions.fulfilled, (state, action) => {
        state.predictions = action.payload;
        state.loading = false;
      });
  },
});

export default aiSlice.reducer;
