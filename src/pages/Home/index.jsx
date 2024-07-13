import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Button, TextField, Checkbox } from '@mui/material';

import { IoIosAddCircle } from "react-icons/io";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaTrashCan } from "react-icons/fa6";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.css";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (title.trim() !== '' && description.trim() !== '') {
      setTodos([...todos, { title, description, completed: false }]);
      setTitle('');
      setDescription('');
      toast.success("Tarefa adicionada com sucesso!");
    } else {
      toast.error("Por favor, preencha o título e a descrição da tarefa.");
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    toast.success("Tarefa removida com sucesso!");
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
    toast.info(updatedTodos[index].completed ? "Tarefa marcada como concluída!" : "Tarefa desmarcada como concluída!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer />
        <div className="top-header">
          <h1>Lista de Tarefas</h1>
          <Button variant="contained" color="error" onClick={() => [signout(), navigate("/")]}><RiLogoutBoxRFill /> Sair</Button>
        </div>

        <div className="todo">
          <TextField
            fullWidth
            type="text"
            label="Título da Tarefa"
            placeholder="Ex: Compras"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            fullWidth
            type="text"
            label="Descrição da Tarefa"
            placeholder="Ex: Comprar pão, leite e ovos"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Button variant="contained" color="success" onClick={handleAddTodo}>
            <IoIosAddCircle /> Adicionar
          </Button>
        </div>

        <ul className="list">
          {todos.map((todo, index) => (
            <li key={index} className={todo.completed ? 'completed' : ''}>
              <Checkbox
                checked={todo.completed}
                onChange={() => handleToggleComplete(index)}
                inputProps={{ 'aria-label': 'controlled' }}
              />

              <div className="task">
                <strong>{todo.title}</strong>: {todo.description}
              </div>

              <Button variant="contained" color="error" onClick={() => handleRemoveTodo(index)}>
                <FaTrashCan />
              </Button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Home;
