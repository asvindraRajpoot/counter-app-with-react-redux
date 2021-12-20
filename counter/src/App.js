import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset, updateStep } from './store/action';




function App(props) {
  console.log(props.dispatch)


  function handleClick(step) {
    props.dispatch(updateStep(step))
  }
  return (
    <div>
      <div>
        <h1>Counter App with Redux</h1>
        <div id="root" className="container">
          <div className="out">
            <small>{props.count}</small>
          </div>
          <div>
            <div className="out">
              <strong>Steps</strong>
            </div>
            <div className="flex center">
              <div className="box steps">
                <span className="five" onClick={() => handleClick(5)}>5</span>
              </div>
              <div className="box steps">
                <span className="ten" onClick={() => handleClick(10)}>10</span>
              </div>
              <div className="box steps">
                <span className="fivteen" onClick={() => handleClick(15)}>15</span>
              </div>
            </div>
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
          <div>
          </div></div></div>

    </div>
  );
}

function getCount(state) {
  return {
    count: state.count,
    step: state.step,
  };
}

export default connect(getCount)(App);
