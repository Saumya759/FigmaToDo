import React, { useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icon from './assets/bi_plus.svg';
import './index.css';
import Modal from './components/Modal';
import Radio from './components/Radio';


const App = () => {
    
    const [show, setShow] = useState(false);
    const [inputList, setInputList] = useState("") 
    const [items, setItems] = useState([]);
    

    const handleModal = () => {
        setShow(!show)
    }

    const handleInputChange = (event) => {
    setInputList(event.target.value);
    };

    const updateItems = () => { 
    if(inputList){ 
      setItems([...items, { text: inputList,checked: false }])
      setInputList("");
      setShow(!show)
    }

  };
    const onCheck = (keyValue) => { 
        setItems(items.map((val,key) => {
        if (keyValue == key) {
            val['checked'] = !val.checked
            return val;
        }
        else {
            return val;
        }
        }))
    };

    const onHandleChange = (event) => { 
    setItems(items.map((val, key) => {
      if (key == event.target.id) {
        val['text'] = event.target.value
        return val;
      }
      else {
        return val;
      }
    }))
  };
    
    return (
        <div className="main_div">
            <div className="center_div">
                <Container fluid>
                    <Row>
                        <Col className="head"><h5 className="heading">Today</h5></Col>
                        <Col>
                            <img className="img" src={Icon} onClick={handleModal}/>
                        </Col>
                    </Row>
                </Container>

              <Modal handleModal={handleModal} show={show} 
              handleInputChange={handleInputChange} updateItems= {updateItems}/>
               { items.map((value, key) =>{ 
return <Radio onChange={onHandleChange} data={value} keyValue={key} onCheck={onCheck}/>})}
            </div>
        </div>
    );
}

export default App;