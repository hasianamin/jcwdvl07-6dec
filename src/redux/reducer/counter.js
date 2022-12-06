import axios from "axios";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  counter: 10,
};

// const [data, setData] = useState({counter: 10})
// setData(data += 1)

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter += 1;
    },
    decrement: (state, action) => {
      state.counter -= 1;
    },
    random: (state, action) => {
      state.counter = action.payload;
    },
    generate: (state, action) => {
      state.counter = action.payload;
    },
  },
});
//<button onClick={()=>setData(data += 1)}>tambah</button>
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

export function randomNumber() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "https://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1"
      );
      dispatch(counterSlice.actions.random(data[0]));
    } catch (error) {
      console.log(error);
    }
  };
}

export function generateNumber(data) {
  return (dispatch) => {
    dispatch(counterSlice.actions.generate(data));
  };
}
