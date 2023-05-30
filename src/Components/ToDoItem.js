import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteToDo} from '../JSredux/toDoSlice';

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();
    //in the dispatch, we pass the action creator or the action itself

    const handleCompleteClick = () => {
        dispatch(toggleComplete({id: id, /*title: title, */completed: !completed}))
    }
    //this function will dispatch the action payload we passed as the argument (WITHOUT A TYPE)
	
    const handleDeleteClick = () => {
        dispatch(deleteToDo({id: id}))
    }

    return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input 
                        type='checkbox' 
                        className='mr-3' 
                        checked={completed}
                        onChange={handleCompleteClick}    
                    ></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={handleDeleteClick}>
                    Delete
                </button>
			</div>
		</li>
	);
};

export default TodoItem;