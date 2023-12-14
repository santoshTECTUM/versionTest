import { createSlice } from "@reduxjs/toolkit";

const vSixSlicing = createSlice({
    name: 'vSix',
    initialState: {

        value: 0
    },

    reducers: {

        Increment(state, payload) {
            // console.log(state, payload);
            state.value = payload.payload
        },

        Decrement(state, payload) {
            // console.log(state, payload);
            state.value = payload.payload
        },

    }
})

export const { Increment, Decrement } = vSixSlicing.actions

export default vSixSlicing.reducer