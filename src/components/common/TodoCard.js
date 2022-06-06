import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const TodoCard = ({
  title,
  status,
  assignedTo,
  description,
  isComplete,
  change,
}) => {
  return (
    <Card style={{ marginBottom: "10px" }}>
      <CardBody style={{ display: "flex" }}>
        <div
          style={{
            height: "inherit",
            width: "10px",
            backgroundColor: isComplete ? "green" : "#2196f3",
            marginRight: "2%",
          }}
        ></div>
        <div style={{ width: "70%" }}>
          <CardTitle tag="h5">{title} </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {assignedTo.first_name} {assignedTo.last_name}
          </CardSubtitle>
          <CardText>{description}</CardText>
        </div>
        <div
          style={{
            width: "20%",
            display: "flex",
            alignItems: "center",
            color: isComplete ? "green" : "#2196f3",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          {isComplete ? "Completed" : "In-progress"}
        </div>
        <div
          className="switch-container"
          style={{
            width: "10%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <label className="switch">
            <input
              type="checkbox"
              id="completeStatus"
              name="completeStatus"
              value={true}
              checked={isComplete}
              onChange={change}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </CardBody>
    </Card>
  );
};

export default TodoCard;
