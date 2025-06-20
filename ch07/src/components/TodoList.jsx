import React from 'react'
import TodoListItem from './TodoListItem'
import './css/TodoList.css'

function TodoList({ todos, onRemove, onToggle }) {
   return (
      <div className="TodoList">
         {todos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
         ))}
      </div>
      // 경로는 이곳을 보십쇼
   )
}

export default TodoList
