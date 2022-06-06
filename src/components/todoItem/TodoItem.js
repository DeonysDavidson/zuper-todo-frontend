import React from "react";

const TodoItem = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <span>{props.content}</span>
      <p>
        <strong>Assigned to : </strong>
        {props.assigned.first_name} {props.assigned.last_name}
      </p>
      <p>
        <strong>Created at : </strong>
        {props.created.split("T")[0]}
      </p>
      <p>
        <strong>Updated at : </strong>
        {props.updated.split("T")[0]}
      </p>
      <p>
        <strong>Status : </strong>
        {props.isComplete ? "completed" : "in-progress"}
      </p>
      <div className="switch-container">
        <label>Completed: </label>
        <label className="switch">
          <input
            type="checkbox"
            id="completeStatus"
            name="completeStatus"
            value={true}
            checked={props.isComplete}
            onChange={props.change}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default TodoItem;
