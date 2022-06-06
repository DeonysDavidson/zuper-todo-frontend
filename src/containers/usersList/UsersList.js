import axios from "axios";
import { constants } from "../../utils/constants";
import React, { useEffect, useState } from "react";
import { Table } from "../../components/common";

const UsersList = (props) => {
  const [usersList, setUsersList] = useState([]);

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

  const getRowData = () =>
    usersList.map(({ first_name, last_name, assined_tasks }) => ({
      name: `${first_name} ${last_name}`,
      tasks: assined_tasks,
    }));

  return (
    <div className="p-4">
      <h2>Users</h2>
      <Table
        columns={["No", "Name", "Assigned Tasks"]}
        rows={usersList && getRowData()}
      />
    </div>
  );
};

export default UsersList;
