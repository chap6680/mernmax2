import React from 'react';
//import logo from './logo.svg';
import './App.css';
import GoalList from './component/GoalList';

const App = () => {
  /*  Original setup
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */

//these three do the same thing (some techncial differences between 2 and 3 (not sure why and 2 seems perferrable do)
//1  return <h1>A react App!</h1>
//2   return React.createElement('h1',{},'Hi, this is React2')
/*3 class App extends React.Component{
    render()
      return <h1 title="this works">A react App!</h1>
}
}


  return React.createElement('h1',{},'Hi, this is React2a')*/
return (
  <div className="course-goals">
    <h2>course goals</h2>
  <GoalList></GoalList>

</div>

);
}

export default App;
