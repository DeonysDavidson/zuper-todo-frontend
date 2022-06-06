import React, { useEffect, useState } from "react";
import axios from "axios";
import { constants } from "../../utils/constants";
import { Card, TodoCard } from "../../components/common";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const TodoList = (props) => {
  const [todoState, setTodos] = useState([]);
  const [usersState, setUsersState] = useState([]);
  const [render, setRender] = useState(false);

  const navigate = useNavigate();

  const getData = async () => {
    try {
      const todoResponse = await axios.get(`${constants.backendBaseURL}/todos`);
      setTodos(todoResponse.data.data);
      console.log(todoResponse.data.data);
      const usersResponse = await axios.get(
        `${constants.backendBaseURL}/users`
      );
      setUsersState(usersResponse.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [render]);

  const changeHandler = async (eve, id, state) => {
    try {
      const response = await axios.put(
        `${constants.backendBaseURL}/todos/${id}`,
        {
          is_done: !state,
        }
      );
      if (response.data) {
        setRender(!render);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const todoList = todoState.map((ele, ind) => (
    <TodoCard
      key={ele._id}
      title={ele.title}
      status="completed"
      assignedTo={usersState.find((user) => user._id === ele.assigned_to) || {}}
      isComplete={ele.is_done}
      description={ele.description}
      change={(e) => changeHandler(e, ele._id, ele.is_done)}
    />
  ));

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Card
          title="Total tasks"
          subtitle={todoState && todoState.length}
          subtitleTag="h1"
        />
        <Card
          title="Completed"
          subtitle={
            todoState && todoState.filter(({ is_done }) => is_done).length
          }
          subtitleTag="h1"
        />
        <Card
          title="In progress"
          subtitle={
            todoState && todoState.filter(({ is_done }) => !is_done).length
          }
          subtitleTag="h1"
        />
      </div>

      <div className="p-4">
        <div className="d-flex mb-4 justify-content-between">
          <h2>Tasks</h2>
          <Button onClick={() => navigate(`/newtodo`)}>Create Task</Button>
        </div>
        {todoList}
      </div>
    </div>
  );
};

export default TodoList;
