import React, { useState } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { constants } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const CreateUser = (props) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const navigate = useNavigate();

  const payLoad = {
    first_name: fname,
    last_name: lname,
  };

  const submitHandler = () => {
    axios
      .post(`${constants.backendBaseURL}/users`, payLoad)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
          alert("User created successfully");
          navigate(`/users`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <h3>Create User</h3>
        <br />
        <Form>
          <FormGroup>
            <Label for="firstName">First name : </Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="First name"
              type="text"
              onChange={(eve) => setFname(eve.target.value)}
              value={fname}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last name : </Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Last name"
              type="text"
              onChange={(eve) => setLname(eve.target.value)}
              value={lname}
            />
          </FormGroup>
        </Form>
        <br />
        <Button color="primary" onClick={submitHandler}>
          Create User
        </Button>
      </div>
    </div>
  );
};

export default CreateUser;
