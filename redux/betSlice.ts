import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { saveBet, getUserBets } from "@/services/firestoreService";

interface Bet {
  id?: string;
  match: string;
  stake: number;
  odds: number;
  createdAt?: string; // 🔥 Timestamp helyett string (ISO dátum)
}

interface BetsState {
  bets: Bet[];
  loading: boolean;
}

const initialState: BetsState = {
  bets: [],
  loading: false,
};

// 🔥 1️⃣ Új fogadási szelvény mentése Firestore-ba és Redux frissítése
export const addBet = createAsyncThunk(
  "bets/addBet",
  async ({ userId, match, stake, odds }: { userId: string; match: string; stake: number; odds: number }) => {
    await saveBet(userId, match, stake, odds);
    return { match, stake, odds, createdAt: new Date().toISOString() }; // 🔥 Dátumot ISO stringként mentjük
  }
);

// 🔥 2️⃣ Felhasználó fogadásainak lekérése Firestore-ból
export const fetchUserBets = createAsyncThunk("bets/fetchUserBets", async (userId: string) => {
  const bets = await getUserBets(userId);
  return bets.map((bet) => ({
    ...bet,
    createdAt: bet.createdAt ? new Date(bet.createdAt.seconds * 1000).toISOString() : null, // 🔥 Firestore Timestamp -> ISO string
  }));
});

const betsSlice = createSlice({
  name: "bets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserBets.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserBets.fulfilled, (state, action) => {
        state.bets = action.payload ?? [];
        state.loading = false;
      })
      .addCase(addBet.fulfilled, (state, action) => {
        state.bets.push(action.payload);
      });
  },
});

export default betsSlice.reducer;
