import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import Icon from "../assets/bi_plus.svg";
import Modal from "./Modal";
import Radio from "./Radio";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const AddTodo = () => {
  const myState = useSelector((state) => state.todos);
  console.log(myState, "ppppppppp");
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([]);

  const handleModal = () => {
    setShow(!show);
  };

  const dispatch = useDispatch();

  const handledispatch = () => {
    console.log("addddddddddd");
    dispatch(addTodo({ value }));
  };

  const handleSave = () => {
    dispatch(addTodo({ value }));
    setShow(false);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const onCheck = (keyValue) => {
    setItems(
      items.map((val, key) => {
        if (keyValue == key) {
          val["checked"] = !val.checked;
          return val;
        } else {
          return val;
        }
      })
    );
  };

  const handleOnChange = (event) => {
    setItems(
      myState?.data.map((val, key) => {
        if (key == event.target.id) {
          val["text"] = event.target.value;
          return val;
        } else {
          return val;
        }
      })
    );
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <Container fluid>
            <Row>
              <Col className="head">
                <h5 className="heading">Today</h5>
              </Col>
              <Col>
                <img className="img" src={Icon} onClick={handleModal} />
              </Col>
            </Row>
          </Container>
          <Modal
            handleModal={handleModal}
            show={show}
            handleInputChange={handleInputChange}
            handledispatch={handledispatch}
            handleSave={handleSave}
          />
          {myState?.data?.map((value, key) => {
            return <div>{value.title}</div>;
          })}
        </div>
      </div>

      {items.map((value, key) => {
        return (
          <Radio
            onChange={handleOnChange}
            data={value}
            keyValue={key}
            onCheck={onCheck}
          />
        );
      })}
    </>
  );
};
export default AddTodo;
