import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError
} from "../actions/users";
import UsersList from "./UsersList";
import NewUserForm from "./NewUserForm";
import { Alert } from "reactstrap";
const App = props => {
  const onHandleSubmit = fullName => {
    props.createUserRequest(fullName);
  };
  const onDeleteUser = id => {
    props.deleteUserRequest(id);
  };
  const handleCloseAlert = () => {
    props.usersError("");
  };
  useEffect(() => {
    props.getUsersRequest();
  }, []);
  return (
    <div
      style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}
    >
      <Alert
        color="danger"
        isOpen={!!props.users.error}
        toggle={handleCloseAlert}
      >
        {props.users.error}
      </Alert>
      <NewUserForm onHandleSubmit={onHandleSubmit} />
      <UsersList
        users={props.users.items}
        onDeleteUser={onDeleteUser}
      />
    </div>
  );
};

const mapStateToProps = ({ users }) => ({ users });
export default connect(
  mapStateToProps,
  {
    getUsersRequest,
    createUserRequest,
    deleteUserRequest,
    usersError
  }
)(App);
