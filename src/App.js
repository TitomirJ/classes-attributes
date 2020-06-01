import React from 'react';
import {connect} from "react-redux";
import Classes from "./classes";
import Attributes from "./attributes";
import { Layout, Row, Col, Button } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

const { Content } = Layout;

class App extends React.Component {
    state = {
        classCall: false,
        attrCall: false
    }

    classHandler = () => {
        this.setState((prevState) => ({
            classCall: !prevState.classCall
        }))
    }

    attrHandler = () => {
        this.setState((prevState) => ({
            attrCall: !prevState.attrCall
        }))
    }

    render() {
        return (
            <Layout className="layout">
                <Content style={{padding: '0 150px'}}>
                    <Row style={{margin: '30px 0'}}>
                        <Col span={12}>
                            <div className='classes'>
                                {this.state.classCall ? <div style={{ marginTop: 20 , marginBottom: 20 }}>{JSON.stringify(this.props.classList)}</div> : null}
                                <Button block onClick={this.classHandler}>Convert class</Button>
                                <Classes/>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className='attributes'>
                                {this.state.attrCall ? <div style={{ marginTop: 20 , marginBottom: 20  }}>{JSON.stringify(this.props.attributesList)}</div> : null}
                                <Button block onClick={this.attrHandler}>Convert attr</Button>
                                <Attributes/>
                            </div>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    classList: state.reducerClasses,
    attributesList: state.reducerAttributes
});

export default connect(
    mapStateToProps,
    null,
)(App);
