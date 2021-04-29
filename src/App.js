import React from 'react';
import Axios from 'axios';
import 'antd/dist/antd.css';
import { MonitorTable } from './MonitorTable';
import { MonitorGauge } from './MonitorGauge';
import { MonitorPie } from './MonitorPie'

import { Layout, Typography, Card, Switch, Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography; 
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],
      checked:false
    }
  }

  getNetworkData = () => {
    Axios.get('http://192.168.195.144:20205/panel/get_network_data/')
    .then((res) => {
      this.setState({
        data:res.data.data
      })
    }).catch(() => {
      console.log("error")
    })
  }

  start = () => {
    Axios.get('http://192.168.195.144:20205/network/start/')
  }

  stop = () => {
    Axios.get('http://192.168.195.144:20205/network/stop/')
  }

  onChange = () => {
    if(this.state.checked===false){
      this.start()
    }else{
      this.stop()
    }
    this.setState({
      checked:!this.state.checked
    })
    
  }

  componentDidMount(){
    this.getNetworkData();
    this.interval = setInterval(() => this.getNetworkData(), 5000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  render(){
      return (
      <div className="App">
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Title style={{color:'white', padding:5,}}>实时网络入侵检测系统</Title>
          </Header>
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24}}>
              <Row>
                  <Col span={18}>
                    <Card title="实时入侵检测" style={{minHeight:500, marginRight: 12}}>  
                        <Switch style={{marginBottom:20, marginRight:10}}
                        defaultChecked={false}
                          onChange={this.onChange}
                        />
                        <Text>开始入侵检测</Text>
                      <MonitorTable networkData={this.state.data}/>
                    </Card>
                  </Col>
                  <Col span={6}>
                      <Card title="网络健康程度">
                        <MonitorGauge networkData={this.state.data}/>
                      </Card>
                      <Card title="流量类别占比">
                        <MonitorPie networkData={this.state.data} />
                      </Card>
                  </Col>
                  
                
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Real Time Intrusion Detection System ©2020 Created by Cheng</Footer>
        </Layout>
        
      </div>
    );
    }
}

export default App;
