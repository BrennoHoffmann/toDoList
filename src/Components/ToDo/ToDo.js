import React from 'react';
import Button from '../Button/Button';
import Task from '../Tasks/Task';

import './ToDo.css';

class ToDo extends React.Component{
        state = {
            tasks:[]
        }

        componentDidMount = () => {
           
            this.listTasks();
        }

        listTasks = () =>{
            let localTasks = localStorage.getItem("tasks");

            if (localTasks === null){
                localStorage.setItem("tasks", JSON.stringify([]));
            } else{
                this.setState({tasks: JSON.parse(localTasks) });
            }
        }
    
        addTask = (event) => {
            event.preventDefault();

            let newTask = event.target.firstElementChild.value;
            let newDate = event.target.children[1].value;


            

            if(newTask ===  ""){
                return alert ('Type a task');
            }

            let localTasks = localStorage.getItem("tasks");
            let arrayTasks = JSON.parse(localTasks);
            
            arrayTasks.push({
                title: newTask,
                date: newDate,
                
                stats: "Working"
            });

            localStorage.setItem("tasks", JSON.stringify(arrayTasks));

            this.setState({tasks: arrayTasks})
        }

        removeTasks = () => {
            localStorage.setItem("tasks", JSON.stringify([]));
            this.setState({tasks:[]});
        }

        updateTasks = (index) => {
            let localTasks = localStorage.getItem("tasks");

            let arrayTasks = JSON.parse(localTasks);

            let statsTask = arrayTasks[index].stats;

            if(statsTask === "Working"){
                arrayTasks[index].stats = "Done";
            } else {
                arrayTasks[index].stats = "Working";
            }

            localStorage.setItem("tasks", JSON.stringify(arrayTasks));
            this.setState({tasks:arrayTasks});
        }

        render(){
            return (
                <div>
                    <form onSubmit={this.addTask}>
                        <input placeholder="What´s your task ?"/>
                        <input type="date" placeholder="Finish date" />
                        <Button
                            class="add"
                            title="Add new task"
                            type="submit"
                        />
                    </form>
                        <Button
                            class="removeAll"
                            title="Remove all tasks"
                            type="button"
                            onClick={this.removeTasks}
                        />
                        {this.state.tasks.map((task, index) => {
                            return(
                                <Task
                                    key={index}
                                    taskTitle={task.title}
                                    taskDate={task.date}
                                    statsTitle={task.stats}
                                    statsClass={task.stats}
                                    onClick={() =>{this.updateTasks(index)}}
                                />
                            );
                        })}
                </div>
            )
        }

}

export default ToDo;