import React from 'react';

// hooks
import { useSelector } from 'react-redux/es/exports';

const TotalCompleteItems = () => {
const completedTodos = useSelector((state) => state.todos.filter((todos) => todos.completed === true));

	return <h4 className='mt-3'>Total Complete Items: {completedTodos.length}</h4>;
};

export default TotalCompleteItems;