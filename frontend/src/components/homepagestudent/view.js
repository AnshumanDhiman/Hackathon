import React, { useState } from "react"
import {FooterDash} from "../FooterDash/FooterDash";
import {NavDashStudent} from "../NavdashStudent/NavDashStudent";
import { Card, Col, Row, Radio, Space, Tooltip, Button, Modal, Form, Input} from 'antd';
import Data from '../homepage/data/temp';
import 'antd/dist/antd.css';
import "./view.css"
import HostelImage1 from "../../11.jpg"
import HostelImage2 from "../../22.jpg"
import HostelImage3 from "../../33.jpg"

const Homepage = ({updateUser}) => {
    const [hostel, setHostel] = useState(0);
    const [hostelData, setHostelData] = useState();
    const [value , setValue] = useState(1);
    const [room, setRoom] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [isModalVisible1, setIsModalVisible1] = useState(false);

    const showModal1 = () => {
        setIsModalVisible1(true);
    };

    const handleOk1 = () => {
        setIsModalVisible1(false);
    };

    const handleCancel1 = () => {
        setIsModalVisible1(false);
    };

    const Selection = (index) => {
        setHostel(index);
        setHostelData(Data['hostel' + index]);
        console.log(Data['hostel' + index]);
    }

    const onChange = e => {
        setValue(e.target.value);
        setRoom(1);
    }

    const mainFunc = (index) => {
        setRoom(index+1);
        console.log(index);
    }

    const onFinish = (values) => {
        console.log('Success:', values);
        const temp  = hostelData
        temp['floor' + value][room-1].name = values.Name;
        temp['floor' + value][room-1].email = values.Email;
        temp['floor' + value][room-1].phone = values['Phone Number'];
        temp['floor' + value][room-1].age = values.Age;
        temp['floor' + value][room-1].status = true;
        setHostelData(temp);
        console.log(hostelData,temp);
        handleOk()
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const swap = (index) => {
        console.log(room + ' Swapping ' + (Number(index)+1));
        if(room === (Number(index)+1)){
            alert('Same room!');
            return;
        } else {
            const temp = hostelData;
            const temp1 = temp['floor' + value][room-1];
            temp['floor' + value][room-1] = temp['floor' + value][index];
            temp['floor' + value][index] = temp1;
            setHostelData(temp);
        }
    }
    
    const reallocate = (index) => {
        console.log(room + ' Changing room ' + (Number(index)+1));
        if(room === (Number(index)+1)){
            alert('Same room!');
            return;
        } else {
            const temp = hostelData;
            const temp1 = temp['floor' + value][room-1];
            temp['floor' + value][room-1] = temp['floor' + value][index];
            temp['floor' + value][index] = temp1;
            setHostelData(temp);
            showModal1();
        }

    }

    return (
        <div>   
        <div className="dash-main">
            <NavDashStudent  />
            <br /><br /><br />
            <br /><br /><br />
            {
                hostel === 0 &&
                <div className="site-card-wrapper">
                    <Row gutter={25} >
                    <Col span={8}>
                  
                        <Card  className="card-edit" onClick={() => Selection(1)} title="Hostel 1" bordered={false}>
                        <div className="card-img-div">
                        <img src={HostelImage1} alt="Hostel 1" className="card-img-edit1" />
                        </div>
                        <br/>
                        Boys Hostel
                 
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className="card-edit" onClick={() => Selection(2)} title="Hostel 2" bordered={false}>
                        <div className="card-img-div">
                        <img src={HostelImage2} alt="Hostel 2" className="card-img-edit2" />
                        </div>
                        <br/>
                        Boys Hostel
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className="card-edit" onClick={() => Selection(3)} title="Hostel 3" bordered={false}>
                        <div className="card-img-div">
                        <img src={HostelImage3} alt="Hostel 3" className="card-img-edit3" />
                        </div>
                        <br/>
                        Girls Hostel
                        </Card>
                        <br/>
                    <br/>
                    </Col>
                    
                    </Row>
                </div>
            }
            {
                hostel !== 0 &&
                <div className="site-card-wrapper">
                <div className = "room-data-edit" > <h1 style={{ fontSize:"3rem", marginTop:"5px"}}>Total Rooms = <span style={{color:"#B91646"}}>4</span></h1> </div>
                <div className = "room-data-edit" ><h1 style={{ fontSize:"3rem", marginTop:"5px" }}>Filled Rooms = <span style={{color:"#B91646"}}>2</span></h1></div>
                <div className = "room-data-edit1" > <h1 style={{ fontSize:"3rem", marginTop:"5px"}}>Empty Rooms = <span style={{color:"#B91646"}}>2</span></h1></div>
                <br/>
                <br/>
                <br/>
                    <h2>{hostelData.name}</h2>
                    <Row>
                        <Col xs={20} sm={16} md={12} lg={8} xl={3   }> <Radio.Group onChange={onChange} value={value} buttonStyle="solid" >
                   
                   <Space direction="vertical" > 
                   <Radio.Button value={1} style={{marginTop:"15px"}}>Floor 1</Radio.Button>
                   <Radio.Button value={2}>Floor 2</Radio.Button>
                   <Radio.Button value={3}>Floor 3</Radio.Button>
                   </Space>
              </Radio.Group>
                        {/* <Radio.Group onChange={onChange} value={value}>
                            <Space direction="vertical">
                            <Radio value={1}>Floor 1</Radio>
                            <Radio value={2}>Floor 2</Radio>
                            <Radio value={3}>Floor 3</Radio>
                            </Space>
                        </Radio.Group> */}
                        </Col>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                            {
                                hostelData['floor' + value].map((sel,index) => (
                                    <div className="room-box">
                                        {
                                            sel.status &&
                                            <Tooltip placement="topLeft" title={"Occupied by: " + sel.name}  >
                                                <div onClick={() => mainFunc(index)} className={room-1===index ? "legend-item-box selected room-edit" : "legend-item-box room-edit" } style={{ backgroundColor: '#77D970' }} />
                                            </Tooltip>
                                        }
                                        {
                                            !sel.status &&
                                            <div onClick={() => mainFunc(index)} className={room-1===index ? "legend-item-box selected room-edit" : "legend-item-box room-edit"} style={{ backgroundColor: '#FF2E63' }} />
                                        }
                                    </div>
                                ))
                            }
                            <div className="btn-group">
                            <div className="req-room-data"> 
                                {
                                    (room) &&
                                    <span>
                                        Room Selected : <span  style={{color:"red"}}>{room}</span>
                                    </span>
                                }
                                </div>
                                
                            </div>
                        </Col>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                            {
                                hostelData['floor' + value][room-1].status &&
                                <div className="req-hostel-data" style={{backgroundColor:"white", borderRadius:"20px", backgroundColor:"lightgray", paddingLeft:"10px"}}>
                                <br/>
                                    <h4> Name: {hostelData['floor' + value][room-1].name}</h4>
                                    <h4> Age: {hostelData['floor' + value][room-1].age}</h4>
                                  
                                <br/>
                                </div>
                            }
                        </Col>
                      
                    </Row>
                    <br/>
                    <br/>
                  
                </div>
           
            }
     
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <FooterDash/> 
        </div>
    )
}

export default Homepage