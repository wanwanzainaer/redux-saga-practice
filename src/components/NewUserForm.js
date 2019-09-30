import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const NewUserForm = props => {
  const [state, setState] = useState({
    firstName: "",
    lastName: ""
  });
  const onSubmit = e => {
    e.preventDefault();
    props.onHandleSubmit({ ...state });
    setState({ firstName: "", lastName: "" });
  };
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>First name</Label>
        <Input
          placeholder="First Name"
          onChange={e =>
            setState({ ...state, firstName: e.target.value })
          }
          value={state.firstName}
        />
      </FormGroup>
      <FormGroup>
        <Label>Last name</Label>
        <Input
          placeholder="Last Name"
          onChange={e =>
            setState({ ...state, lastName: e.target.value })
          }
          value={state.lastName}
        />
      </FormGroup>
      <FormGroup>
        <button
          block="true"
          outline="true"
          type="submit"
          color="primary"
        >
          Create
        </button>
      </FormGroup>
    </Form>
  );
};

export default NewUserForm;
