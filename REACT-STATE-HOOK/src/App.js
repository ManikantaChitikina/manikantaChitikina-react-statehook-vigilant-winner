import './App.css';
import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterFour from './Components/HookCounterFour';
import ClassCounterOne from './Components/ClassCounterOne';
import HookCounterOne from './Components/HookCounterOne';
import ClassMouse from './Components/ClassMouse';
import HookMouse from './Components/HookMouse';
import MouseContainer from './Components/MouseContainer';
import IntervelClassCounter from './Components/IntervelClassCounter';
import IntervelHookCounter from './Components/IntervelHookCounter';
import DataFetching from './Components/DataFetching';
import React, { useContext } from 'react';
import ComponentC from './Components/ComponentC';
import CounterOne from './Components/CounterOne';
import CounterTwo from './Components/CounterTwo';
import CounterThree from './Components/CounterThree';
import DataFetchingone from './Components/DataFetchingone';
import DataFetchingTwo from './Components/DataFetchingTwo';
import ParentComponent from './Components/ParentComponent';
import Counter from './Components/Counter';
import FocusInput from './Components/FocusInput';
import ClassTimer from './Components/ClassTimer';
import HookTimer from './Components/HookTimer';
import DocTitleOne from './Components/DocTitleOne';
import DocTitleTwo from './Components/DocTitleTwo';
import CustomCounterOne from './Components/CustomCounterOne';
import CustomCounterOTwo from './Components/CustomCounterTwo';
import UserForm from './Components/UserForm';



export const UserContext=React.createContext()
export const ChannelContext=React.createContext()

function App() {
  return (
    <div className="App">
      {/* <ClassCounter></ClassCounter> */}
      {/* <HookCounter></HookCounter> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookCounterThree></HookCounterThree> */}
      {/* <HookCounterFour></HookCounterFour> */}
      {/* <ClassCounterOne></ClassCounterOne> */}
      {/* <HookCounterOne></HookCounterOne> */}
      {/* <ClassMouse></ClassMouse> */}
      {/* <HookMouse></HookMouse> */}
      {/* <MouseContainer></MouseContainer> */}
      {/* <IntervelClassCounter></IntervelClassCounter>
      <IntervelHookCounter></IntervelHookCounter> */}
      {/* <DataFetching></DataFetching> */}
      {/* <UserContext.Provider value={'Manikanta'}>
        <ChannelContext.Provider value={'react hook Context'}>
          <ComponentC></ComponentC>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne></CounterOne> */}
      {/* <CounterTwo></CounterTwo> */}
      {/* <CounterThree></CounterThree> */}
    {/* <DataFetchingone></DataFetchingone> */}
    {/* <DataFetchingTwo></DataFetchingTwo> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <Counter></Counter> */}
      {/* <FocusInput></FocusInput> */}
     {/* <ClassTimer></ClassTimer>
     <HookTimer></HookTimer> */}
    {/* <DocTitleOne></DocTitleOne>
    <DocTitleTwo></DocTitleTwo> */}
{/* <CustomCounterOne></CustomCounterOne>
<CustomCounterOTwo></CustomCounterOTwo> */}
<UserForm></UserForm>
    </div>
  );
}

export default App;
