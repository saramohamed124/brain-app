import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  currentLevelId: number;
  coins: number;
  unlockedLevels: number[];
}

const initialState: GameState = {
  currentLevelId: 1, // نبدأ من المستوى الأول
  coins: 50, // رصيد مبدئي للمساعدة
  unlockedLevels: [1],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    // الانتقال للمستوى التالي
    nextLevel: (state) => {
      state.currentLevelId += 1;
      if (!state.unlockedLevels.includes(state.currentLevelId)) {
        state.unlockedLevels.push(state.currentLevelId);
      }
    },
    // إضافة عملات عند الفوز
    addCoins: (state, action: PayloadAction<number>) => {
      state.coins += action.payload;
    },
    // خصم عملات عند استخدام تلميح (Hint)
    useHint: (state, action: PayloadAction<number>) => {
      if (state.coins >= action.payload) {
        state.coins -= action.payload;
      }
    },
    // تعيين مستوى معين (مثلاً عند اختيار مستوى من القائمة)
    setCurrentLevel: (state, action: PayloadAction<number>) => {
      state.currentLevelId = action.payload;
    },
  },
});

export const { nextLevel, addCoins, useHint, setCurrentLevel } =
  gameSlice.actions;
export default gameSlice.reducer;
