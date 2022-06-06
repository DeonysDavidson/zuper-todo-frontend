import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import TodoList from "./containers/todoList/TodoList";
import CreateTodo from "./containers/createTodo/createTodo";
import UsersList from "./containers/usersList/UsersList";
import CreateUser from "./containers/createUser/CreateUser";
import { TodoLayout } from "./components/layouts";

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <main>
            <TodoLayout>
              <Routes>
                <Route path="/" element={<Navigate replace to="/todos" />} />
                <Route path="/todos" element={<TodoList />} />
                <Route path="/newtodo" element={<CreateTodo />} />
                <Route path="/users" element={<UsersList />} />
                <Route path="/newuser" element={<CreateUser />} />
              </Routes>
            </TodoLayout>
          </main>
        </header>
      </div>
    </BrowserRouter>
  );
};

export default App;
