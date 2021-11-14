import React, { useState, useEffect  } from "react"
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
    const [hostelData, setHostelData] = useState(Data['hostel' + 1]);
    const [value , setValue] = useState(1);
    const [room, setRoom] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [totalRoom, setTotalRoom] = useState(0);
    const [filledRoom, setFilledRoom] = useState(0);
    const [emptyRoom, setEmptyRoom] = useState(0);

    useEffect(() => {
        let temp = hostelData['floor' + value].length
        setTotalRoom(temp);
        let count = handleRoom();
        let temp1 = temp - count;
        setEmptyRoom(temp1);
        setFilledRoom(count);
    }, [value,hostel]);

    const handleRoom = () => {
        let count = 0;
        hostelData['floor' + value].map(room => {
            if(room.status){
                count++;
            }
        })
        return count
    }

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
        let temp = hostelData['floor' + value].length
        setHostelData(Data['hostel' + index]);
        setTotalRoom(temp);
        let count = handleRoom();
        let temp1 = temp - count;
        setEmptyRoom(temp1);
        setFilledRoom(count);
        setHostel(index);
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
        setEmptyRoom(emptyRoom-1);
        setFilledRoom(filledRoom+1);
        handleOk();
 
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
            <NavDashStudent />
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
                <div className="site-card-wrapper" >
               
                <br/>
                <br/>
                <br/>
                <div style={{textAlign:"center"}}>
            <h2 className="hostel-name-edit">{hostelData.name}</h2>
            </div>
            <div className="" >
                <Row gutter={16}>
                <Col span={8}>
                 <Card title="Total Rooms" bordered={false}>
                 <h1  style={{color:"#B91646"}}>{totalRoom}  <span style={{color:"blue",marginLeft:"70%"}}><i className='fa fa-bed   fa-x'></i></span></h1>
                
            
                   </Card>
                 </Col>
                  <Col span={8}>
                    <Card title="Filled Rooms" bordered={false}>
                    <h1 style={{color:"#B91646"}}>{filledRoom} <span style={{color:"green",marginLeft:"70%"}}><i className='fa fa-check fa-x'></i></span></h1>
                   </Card>
                  </Col>
                  <Col span={8}>
                   <Card title="Empty Rooms" bordered={false}>
                   <h1 style={{color:"#B91646"}}>{emptyRoom} <span style={{color:"red",marginLeft:"70%"}}><i className='fa fa-folder-open fa-x'></i></span></h1>
                    </Card>
                 </Col>
                </Row>
                <br/>
                </div> 
                 
                    <Row style={{backgroundColor:"white"}}>
                  
                        <Col xs={20} sm={16} md={12} lg={8} xl={3} style={{marginTop:"15px"}}>
                        <div >
                        <Radio.Group   onChange={onChange} value={value} buttonStyle="solid" >
                             <Space direction="vertical" > 
                             <Radio.Button value={1} style={{marginTop:"15px",marginLeft:"50px"}}>Floor 1</Radio.Button>
                             <Radio.Button value={2} style={{marginLeft:"50px"}}>Floor 2</Radio.Button>
                             <Radio.Button value={3} style={{marginLeft:"50px"}}>Floor 3</Radio.Button>
                             </Space>
                        </Radio.Group>
                     
                        </div>
                        
                        {/* <Radio.Group onChange={onChange} value={value}>
                            <Space direction="vertical">
                            <Radio value={1}>Floor 1</Radio>
                            <Radio value={2}>Floor 2</Radio>
                            <Radio value={3}>Floor 3</Radio>
                            </Space>
                        </Radio.Group> */}
                    
                        </Col>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}  style={{marginTop:"15px"}}>
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
                               <br/>
                               <br/>
                             
                            </div>
                        </Col>
                     
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}  style={{marginTop:"35px"}}>
                            {
                                hostelData['floor' + value][room-1].status &&
                                <div className="req-hostel-data" >
                                <br/>
                              

                                    <h4> Name: {hostelData['floor' + value][room-1].name}</h4>
                                    <h4> Phone Number: {hostelData['floor' + value][room-1].phone}</h4>
                                    <h4> Age: {hostelData['floor' + value][room-1].age}</h4>
                                    <h4> Email: {hostelData['floor' + value][room-1].email}</h4>
                                <br/>
                                </div>
                            }
                        </Col>
                    </Row>
                    <br/>
                </div>
            }
            <br/>
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