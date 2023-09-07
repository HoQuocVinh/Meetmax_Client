import { PayloadAction } from "@reduxjs/toolkit";
import { ImageItem } from "~/interface/ImageInterface";

const { createSlice } = require("@reduxjs/toolkit");

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isShowModal: false,
    isShowDraggble: false,
    isShowFelling: false,
    // images: [] as string[],
    images: [] as ImageItem[],
  },
  reducers: {
    toggleModal: (state: any, { payload }: PayloadAction<boolean>) => {
      state.isShowModal = payload;
    },
    toggleDraggbleImage: (state: any, { payload }: PayloadAction<boolean>) => {
      state.isShowDraggble = payload;
    },
    toggleFelling: (state: any, { payload }: PayloadAction<boolean>) => {
      state.isShowFelling = payload;
    },
    // addImages: (state: any, { payload }: PayloadAction<string[]>) => {
    //   state.images = [...state.images, ...payload];
    // },
    addImages: (state: any, { payload }: PayloadAction<string[]>) => {
      state.images = [...state.images, ...payload];
    },
    clearImages: (state: any) => {
      state.images = [];
    },
  },
});

export const {
  toggleModal,
  toggleDraggbleImage,
  toggleFelling,
  addImages,
  clearImages,
} = modalSlice.actions;

export default modalSlice.reducer;
