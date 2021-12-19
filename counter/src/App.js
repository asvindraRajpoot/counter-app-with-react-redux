import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from './store/action';

function App(props) {
  console.log(props.dispatch)
  return (
    <div>
      <h1>Counter App with Redux</h1>
      <div id="root" className="container">
        <div className="out">
          <small>{props.count}</small>
        </div>
        <div className="flex center">
          <div className="box">
            <span className="inc" onClick={() => props.dispatch(increment())}>Increment</span>
          </div>
          <div className="box">
            <span className="dec" onClick={() => props.dispatch(decrement())}>Decrement</span>
          </div>
          <div className="box">
            <span className="res" onClick={() => props.dispatch(reset())}>Reset</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function getCount(state) {
  return {
    count: state.count,
  };
}

export default connect(getCount)(App);
