import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import GoalList from './component/GoalList/GoalList.js';
import NewGoal from "./component/NewGoal/NewGoal.js";

const App = () => {
  /*  
//these three do the same thing (some techncial differences between 2 and 3 (not sure why and 2 seems perferrable do)
//1  return <h1>A react App!</h1>
//2   return React.createElement('h1',{},'Hi, this is React2')
/*3 class App extends React.Component{
    render()
      return <h1 title="this works">A react App!</h1>
}
}
return React.createElement('h1',{},'Hi, this is React2a')*/


  const [courseGoals,setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the course'},
    {id: 'cg2', text: 'Learn all abo tthe course main topic'},
    {id: 'cg3', text: 'help other students in the course Q&A'},
  ]);

const addNewGoalHandler = (newGoal) => {
  //courseGoals.push(newGoal);
  //console.log(courseGoals);

  //first state 
  //setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal)  
    );
  };
  
return (
  <div className="course-goals">
    <h2>course goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler}/>
  <GoalList goals={courseGoals}/>

</div>

);
}

export default App;
