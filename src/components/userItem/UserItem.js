import React from "react";

const UserItem = (props) => {
  const { first_name, last_name, assined_tasks } = props.data;

  return (
    <div>
      <p>
        <strong>Name : </strong>
        {`${first_name} ${last_name}`}
      </p>
      <p>
        <strong>tasks assigned : </strong>
        {assined_tasks.length}
      </p>
    </div>
  );
};

export default UserItem;
