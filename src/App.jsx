import React from "react";
import Mahi from "./testProps.jsx";
import Mahi2 from "./testFnStatendProps.jsx";
import { VotingEligibility, ListItems, MyForm } from "./condListForms.jsx";
import Counter2 from "./useEffectHoook";
import DataList2 from "./useMemoHook";
import DataList3 from "./useCallBackHook";
import DataList4 from "./useRefHook";
import FirstComponent from "./customHook";
import SecondComponent from "./customHook2";
import "./styles.css";
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './Redux/actions.jsx';

function App() {
  // const counter = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
    return (
      <div className="appcss">
        {/* <h1>This is Reactjs practice</h1>
        <h1> my fevorite color is {this.state.color}</h1>
        <h2>
          This is for pass the data one component to another component, it means
          parent to child
        </h2> */}
        <Mahi name="ram" surname="ragu vamsham" />
        <Mahi name="sita" surname="ragu vamsham" />
        <Mahi2 />
        <VotingEligibility />
        <ListItems />
        <MyForm />
        <Counter2 />
        <DataList2 />
        <DataList3 />
        <DataList4 />
        <useToggle />
        <FirstComponent />
        <SecondComponent />
        {/* <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button> */}
      </div>
    );
  }

export default App;
