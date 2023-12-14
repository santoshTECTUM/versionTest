import { configureStore } from "@reduxjs/toolkit";
import Decrement from "./versionSixSlice";
import Increment from "./versionSixSlice";

const GlobalStore = configureStore({

    reducer: {
        vSix: Increment,
        vSix: Decrement
    }
})

export default GlobalStore