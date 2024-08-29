import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Button, TextField, Checkbox, Container, Box, Typography, IconButton } from '@mui/material';

import { IoIosAddCircle } from "react-icons/io";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
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
    <Container maxWidth="sm" className="App">
      <ToastContainer />
      <Box className="App-header">
        <Box className="top-header">
          <Typography variant="h4" component="h1">Lista de Tarefas</Typography>
          <Button variant="contained" color="error" startIcon={<RiLogoutBoxRFill />} onClick={() => [signout(), navigate("/")]}>
            Sair
          </Button>
        </Box>

        <Box className="todo">
          <TextField
            fullWidth
            type="text"
            label="Título da Tarefa"
            placeholder="Ex: Compras"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
          />

          <TextField
            fullWidth
            type="text"
            label="Descrição da Tarefa"
            placeholder="Ex: Comprar pão, leite e ovos"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
          />

          <Button
            variant="contained"
            color="success"
            startIcon={<IoIosAddCircle />}
            onClick={handleAddTodo}
            size="large"
          >
            Adicionar
          </Button>
        </Box>

        <Box className="list">
          {todos.map((todo, index) => (
            <Box key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <Checkbox
                checked={todo.completed}
                onChange={() => handleToggleComplete(index)}
                inputProps={{ 'aria-label': 'controlled' }}
                color="primary"
              />

              <Box className="task">
                <Typography variant="body1"><strong>{todo.title}</strong>: {todo.description}</Typography>
              </Box>

              <IconButton color="error" onClick={() => handleRemoveTodo(index)}>
                <FaTrashAlt />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
