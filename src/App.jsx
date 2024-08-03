import React, { useContext, useEffect } from 'react';
import AnotherStateInput from "./components/AnotherStateInput"
import ClassBasedComp from "./components/ClassBasedComp"
import CounterClassDemo from "./components/CounterClassDemo"
import CounterStateDemo from "./components/CounterStateDemo"
import DataFetching from "./components/DataFetching"
import FunctionBasedComp from "./components/FunctionBasedComp"
import MouseTrackerFBC from "./components/MouseTrackerFBC"
import { CounterContext } from "./context/CounterContext"
import ReducerCounterOne from './components/ReducerCounterOne';
import ReducerObject from './components/ReducerObject';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import PaginatedData from './components/PaginatedData';
import TodoApp from './components/Todo';
import InfiniteScrollApp from './components/InfiniteScrolling';
import Slideshow from './components/Slideshow';
import TicTacToe from './components/TicTacToe';
import StarRating from './components/StarRating';
import Accordion from './components/Accordion';

function App() {
  
  // const { count, setCount } = useContext(CounterContext);

  // useEffect(() => {
  //   document.title = `Count: ${count}`;
  // }, [count]);




  // StarRating
//   const handleRatingChange = (rating) => {
//     console.log('Selected Rating:', rating);
// };


const sections = [
  { title: 'Section 1', content: 'Content for section 1.' },
  { title: 'Section 2', content: 'Content for section 2.' },
  { title: 'Section 3', content: 'Content for section 3.' },
  // Add more sections as needed
];


  return (
    <>
   <p>HALO world!</p>
   {/* <FunctionBasedComp/> */}
   {/* <ClassBasedComp/> */}
   {/* <CounterStateDemo/> */}
   {/* <CounterClassDemo/> */}
   {/* <AnotherStateInput/> */}
   {/* <MouseTrackerFBC/> */}
   {/* <DataFetching/> */}
   {/* <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}

      {/* STEPS TO CREATE CONTEXT */}

      {/* // Step 1: Create the context
      // Step 2: Create a provider component
      // Step 3: Wrap the App with the Context Provider
      // Step 4: Consume the Context in a Component */}

      {/* <ReducerCounterOne/> */}
      {/* <ReducerObject/> */}
      {/* <ControlledForm/>
      <UncontrolledForm/> */}
      {/* <PaginatedData/> */}
      {/* <TodoApp/> */}
      {/* <InfiniteScrollApp/> */}
      {/* <Slideshow/> */}
      {/* <TicTacToe/> */}

      {/* <div>
            <h1>Rate this Item</h1>
            <StarRating totalStars={5} size={30} color="#f39c12" onChange={handleRatingChange} />
        </div> */}

        <div style={{ padding: '20px' }}>
            <h1>Accordion Example</h1>
            <Accordion sections={sections} />
        </div>
    </>

  )
}

export default App
