// src/components/ProjectForm/ProjectForm.jsx
import React from "react";
import { Form, Button } from "react-bootstrap";

function ProjectForm({ project, onChange, isValid }) {
  return (
    <Form className=" mb-3">
      <Form.Group className=" mb-3">
        <Form.Control
          type="number"
          placeholder="Počet řádků kódu"
          name="lines"
          min="0"
          onChange={onChange}
          value={project.lines}
        />
      </Form.Group>
      <Form.Group className=" mb-3">
        <Form.Control
          type="number"
          placeholder="Časový limit (dny)"
          name="days"
          min="0"
          onChange={onChange}
          value={project.days}
        />
      </Form.Group>
      <Button variant={isValid ? "success" : "danger"} disabled={!isValid}>
        Schválit plán
      </Button>
    </Form>
  );
}

export default ProjectForm;
