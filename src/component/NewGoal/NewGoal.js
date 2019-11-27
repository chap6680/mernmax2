import React from 'react';

import './NewGoal.css';


const NewGoal = props =>{
    const addGoalHandler = event =>{
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: 'my goal'
        };
        props.onAddGoal(newGoal);
    };

    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input className ="input-goal" type ="text"></input>
            <button  type="submit">Add Goal</button>
        </form>
    )
};

export default NewGoal;
