import React from 'react';
import styled from 'styled-components';

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
}

const MatchscheduleItem =({ todo } : TodoItemProps) =>{
    return(
        <div className = "todoItem">
            
            <div className = {`ItemContent ${todo.done ? 'done' : ''}`}>
                <span>{todo.text}</span>
            </div>
            
        </div>
    );
}

export default MatchscheduleItem;
