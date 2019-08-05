import React from 'react';
import Button from '../Button/Button';

import './ToDo.css';

class ToDo extends React.Component{
        render(){
            return (
                <div>
                    <form>
                        <input placeholder="What´s your task ?"/>
                        <Button
                            class="add"
                            title="Add"
                            type="submit"
                        />
                    </form>
                        <Button
                            class="removeAll"
                            title="Remove all tasks"
                            type="button"
                        />
                </div>
            )
        }

}

export default ToDo;