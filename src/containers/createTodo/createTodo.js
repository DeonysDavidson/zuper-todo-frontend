import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { constants } from "../../utils/constants";

const CreateTodo = (props) => {
  const [titleState, setTitle] = useState("");
  const [descState, setDesc] = useState("");
  const [assignState, setAssign] = useState("");
  const [usersList, setUsersList] = useState([]);

  const navigate = useNavigate();

  //getting the users info for asssigning to todo item when created
  useEffect(() => {
    axios
      .get(`${constants.backendBaseURL}/users`)
      .then((res) => {
        console.log(res.data.data);
        setUsersList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //new todo item
  const payLoad = {
    title: titleState,
    description: descState,
    assigned_to: assignState,
  };

  const submitHandler = async () => {
    //validating if user is assigned
    if (!assignState) {
      alert("The Todo has to be assigned to a user");
      return;
    }
    try {
      //updating todolist with new item
      const todoResponse = await axios.post(
        `${constants.backendBaseURL}/todos`,
        payLoad
      );
      console.log(todoResponse.data);

      //updating the userinfo with the new todoid
      if (todoResponse.data.status === "success") {
        console.log(todoResponse.data.data._id);

        //finding the user to be updated
        const targetUser = usersList.find((ele) => ele._id === assignState);

        //updating the userinfo with the new todoid
        const usersResponse = await axios.put(
          `${constants.backendBaseURL}/users/${assignState}`,
          {
            assined_tasks: [
              ...targetUser.assined_tasks,
              todoResponse.data.data._id,
            ],
          }
        );
        console.log(usersResponse);
        if (usersResponse.data.status === "success") {
          alert("To-Do created successfully");
          navigate(`/todos`);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const optionsList = usersList.map((ele) => (
    <option value={ele._id} key={ele._id}>
      {ele.first_name} {ele.last_name}
    </option>
  ));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "92vh",
        backgroundColor: "lightgrey",
      }}
    >
      <div style={{ width: "40%", backgroundColor: "white", padding: "5%" }}>
        <h3>Create Task</h3>
        <br />
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Title"
              type="text"
              onChange={(eve) => setTitle(eve.target.value)}
              value={titleState}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              id="description"
              name="description"
              type="textarea"
              onChange={(eve) => setDesc(eve.target.value)}
              value={descState}
            />
          </FormGroup>
          <FormGroup>
            <Label for="assignto">Assign to</Label>
            <Input
              id="assignto"
              name="select"
              type="select"
              onChange={(eve) => setAssign(eve.target.value)}
              value={assignState}
            >
              <option value="">Unassigned</option>
              {optionsList}
            </Input>
          </FormGroup>
        </Form>
        <br />
        <Button color="primary" onClick={submitHandler}>
          Create task
        </Button>
      </div>
    </div>
  );
};

export default CreateTodo;
