import './styles.css';
import { saludar } from './js/componente'

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componente';

export const  todoList = new TodoList();
todoList.todos.forEach( crearTodoHtml ); //  = todoList.todos.forEach( td => crearTodoHtml(td));

// localStorage.setItem('mi-key','abc123');
// sessionStorage.setItem('mi-key','123ABC');
// setTimeout(() => {
//    localStorage.removeItem('mi-key'); 
// }, 1500);
