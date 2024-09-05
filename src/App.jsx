// src/App.jsx
import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProgrammerList from "./components/ProgrammerList";
import ProgrammerForm from "./components/ProgrammerForm";
import ProjectForm from "./components/ProjectForm";

const initialProgrammers = [
  { id: 1, name: "Bill Smith", level: "senior" },
  { id: 2, name: "Alice Cooper", level: "junior" },
  { id: 3, name: "John Bush", level: "senior" },
  { id: 4, name: "Colin Montgomery", level: "senior" },
];

function App() {
  const [programmers, setProgrammers] = useState(initialProgrammers);
  const [newProgrammer, setNewProgrammer] = useState({
    id: 1,
    name: "",
    level: "junior",
  });
  const [project, setProject] = useState([]);
  const [valid, setValid] = useState(false);

  const validateData = (programmer) => {
    setValid(programmer.name.trim().length > 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedProgrammer = { ...newProgrammer, [name]: value };
    setNewProgrammer(updatedProgrammer);
    validateData(updatedProgrammer);
  };

  const handleAdd = () => {
    setProgrammers((prevProgrammers) => [...prevProgrammers, newProgrammer]);
    setNewProgrammer({
      id: newProgrammer.id + 1,
      name: "",
      level: "junior",
    });
    setValid(false);
  };

  const handleDelete = (idToDel) => {
    setProgrammers((prevProgrammers) =>
      prevProgrammers.filter((programmer) => programmer.id !== idToDel)
    );
  };

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: parseInt(value) });
  };

  const isPlanValid = () => {
    const totalCapacity = programmers.reduce(
      (sum, programmer) => sum + (programmer.level === "junior" ? 100 : 200),
      0
    );
    return totalCapacity * project.days >= project.lines;
  };

  return (
    <Container fluid className=" min-vh-100 py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Tab.Container defaultActiveKey="programmers">
            <Nav
              justify
              variant="tabs"
              className=" mb-3"
              defaultActiveKey="programmers">
              <Nav.Item className="toggler-btn">
                <Nav.Link eventKey="programmers">Programátoři</Nav.Link>
              </Nav.Item>
              <Nav.Item className="toggler-btn">
                <Nav.Link eventKey="project">Projekt</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="programmers">
                <ProgrammerList
                  className="item"
                  data={programmers}
                  onDelete={handleDelete}
                />
                <ProgrammerForm
                  valid={valid}
                  onChange={handleChange}
                  onAdd={handleAdd}
                  data={newProgrammer}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="project">
                <ProjectForm
                  project={project}
                  onChange={handleProjectChange}
                  isValid={isPlanValid()}
                />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
