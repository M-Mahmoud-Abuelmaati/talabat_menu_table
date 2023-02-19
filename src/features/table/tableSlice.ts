import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import { API, Token } from "../../constants/api";
import { ITable } from "../../types";

export interface TableState {
  value: ITable[];
  status: "idle" | "loading" | "failed";
}

const initialState: TableState = {
  value: [],
  status: "idle",
};

export const getTables = createAsyncThunk("table/fetchTables", async () => {
  try {
    const response = await axios.get(`${API.main}/table`, {
      headers: {
        Authorization: "Bearer " + Token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTables.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTables.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload.data.docs.filter((i: any) => i.name.length <= 10).map((i: any) => ({id: i._id, name: i.name}));
      })
      .addCase(getTables.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectTables = (state: RootState) => state.table.value;

export default tableSlice.reducer;
