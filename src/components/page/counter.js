import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/slice/counterSlice";

export function Counter() {
  const inputRef = useRef();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment(inputRef.current.value))}
        >
          Increment
        </button>
        <input ref={inputRef} />
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
