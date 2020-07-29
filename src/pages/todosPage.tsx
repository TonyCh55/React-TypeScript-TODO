import React, { useState, useEffect } from "react";
import { TodoForm } from "../components/todoForm";
import { TodoList } from "../components/todoList";
import { ITodo } from "../interfaces";

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos")!) as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onAdd = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    };

    setTodos((prevState) => [newTodo, ...prevState]);
  };

  const onToggle = (id: number) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const onDelete = (id: number) => {
    const shouldRemove = window.confirm("Are you shure you want to delete?");
    if (shouldRemove) {
      setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    }
  };

  return (
    <>
      <TodoForm onAdd={onAdd} />

      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </>
  );
};
