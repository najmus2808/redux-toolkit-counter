import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          style={{
            color: "red",
            width: "300px",
            height: "50px",
            fontSize: "20px",
          }}
        >
          Increment
        </button>
        <span style={{ margin: "0px 10px 0px 10px", fontSize: "25px" }}>
          {count}
        </span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          style={{
            color: "red",
            width: "300px",
            height: "50px",
            fontSize: "20px",
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
