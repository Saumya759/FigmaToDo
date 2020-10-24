import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const button = ({ onCheck, data, keyValue }) => {
  return (
    <div className="todo_style">
      <Container>
        <Row className="box">
          <Col sm={2}>
            {" "}
            <Form.Check
              className={`${data.checked ? "checked" : "unchecked"} checkbox`}
              aria-label="option 1"
              id={keyValue}
              checked={data.checked}
              name={data.text}
              onChange={() => onCheck(keyValue)}
            />
          </Col>

          <Col sm={10} className="bottom_line">
            <Row>
              <Col xs={6}>{data.text}</Col>
              <Col className="circle" xs={6}>
                <span
                  className={`${data.checked ? "green" : "red"} dot`}
                ></span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default button;
