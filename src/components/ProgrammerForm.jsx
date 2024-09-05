// src/components/ProgrammerForm/ProgrammerForm.jsx
import React from "react";
import { Form, Button } from "react-bootstrap";

function ProgrammerForm({ data, valid, onChange, onAdd }) {
  return (
    <Form className="mb-3">
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Jméno programátora"
          name="name"
          onChange={onChange}
          value={data.name}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select name="level" onChange={onChange} value={data.level}>
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" disabled={!valid} onClick={onAdd}>
        Přidat
      </Button>
    </Form>
  );
}

export default ProgrammerForm;
