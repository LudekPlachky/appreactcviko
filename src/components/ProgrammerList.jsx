import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import "./ProgrammerList.css";

function ProgrammerList({ data, onDelete }) {
  return (
    <ListGroup className="mb-3">
      {data.map((item) => (
        <ListGroup.Item
          key={item.id}
          className=" d-flex justify-content-between align-items-center programmer-row">
          <span>
            {item.name} / {item.level}
          </span>
          <Button
            className="btn-del"
            variant="danger"
            size="sm"
            onClick={() => onDelete(item.id)}>
            X
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ProgrammerList;
