import { configureStore } from "@reduxjs/toolkit";
import bookingSlice from "./reducers/bookingSlice";

const store = configureStore({
  reducer: {
    booking: bookingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
