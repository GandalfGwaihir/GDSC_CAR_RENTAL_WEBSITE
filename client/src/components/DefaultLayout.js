import React from "react";
import { Menu, Dropdown, Button, Space , Row , Col } from "antd";
import {Link} from 'react-router-dom'

function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('user'))
  const menu = (
    <Menu>
        <Menu.Item>
        <a
         
          href="/admin/home"
        >
          Home
        </a>
      </Menu.Item>
        
      
      
      {/* <Menu.Item onClick={()=>{
          localStorage.removeItem('user');
          window.location.href='/admin'
      }}>
          <li style={{color:'orangered'}}>Logout</li>
      </Menu.Item> */}
    </Menu>
  );
  return (
    <div>
      <div className="header bs1">
          <Row gutter={16} justify='center'>
              <Col lg={20} sm={24} xs={24}>
              <div className="d-flex justify-content-between">
                       
            <Button href="/admin/home">Home</Button>
          
        </div>
              </Col>
          </Row>
        
      </div>
      <div className="content">{props.children}</div>

    
    </div>
  );
}

export default DefaultLayout;
