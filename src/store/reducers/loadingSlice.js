import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      isLoading: false,
      isSkeleton: true,
};
const LoadingSlice = createSlice({
      name: "loading",
      initialState,
      reducers: {
            setLoadingTrue: (state) => {
                  state.isLoading = true;
            },
            setLoadingFalse: (state) => {
                  state.isLoading = false;
            },
            showSkeletonFalse: (state) => {
                  state.isSkeleton = false;
            },
      },
});
export const { setLoadingTrue, setLoadingFalse, showSkeletonFalse } = LoadingSlice.actions;
export default LoadingSlice.reducer;
