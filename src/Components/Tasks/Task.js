import React from 'react';

import './Task.css';

class Task extends React.Component {
        render(){
            return(
                <div class="task">
                    <span>
                        {this.props.taskTitle}
                        
                    </span>
                    <span>
                         {this.props.taskDate}
                    </span>
                    <span onClick={this.props.onClick} className={this.props.statsClass}>
                        {this.props.statsTitle}
                        
                    </span>
                </div>
            );
        }

}

export default Task;