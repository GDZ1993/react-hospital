import React, {Component} from 'react';
import './style/newsList.css'
import {Menu, Icon} from 'antd';
import ButtomView from "../buttomView/buttomView";
export default class newsList extends Component {
    state = {
        collapsed: false,
        menuTitle: '新闻动态',
        coId: '',
        ctId:''
    };
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <img src={require('../../images/banner@2x.png')} className="newsList-titalimag"></img>
                <div className="newsList-div row-between-start">
                    <div className="newsList-Menu">
                        <div className="newsList-Menu-tital row-div">{this.state.menuTitle}</div>
                        <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark" inlineCollapsed={this.state.collapsed}>
                            <Menu.Item key="1">
                                <div className="newsList-Menu-Item row-div">
                                    <span>Navigation 1</span>
                                    <Icon type="right" className="newsList-Menu-Icon"/>
                                </div>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <div className="newsList-Menu-Item row-div">
                                    <span>Navigation 2</span>
                                    <Icon type="right" className="newsList-Menu-Icon"/>
                                </div>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <div className="newsList-Menu-Item row-div">
                                    <span>Navigation 3</span>
                                    <Icon type="right" className="newsList-Menu-Icon"/>
                                </div>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <div className="newsList-Menu-Item row-div">
                                    <span>Navigation 4</span>
                                    <Icon type="right" className="newsList-Menu-Icon"/>
                                </div>
                            </Menu.Item>
                        </Menu>
                        <div className="newsList-Menu-bottum"></div>
                    </div>
                    <div className="newsList-content">

                    </div>
                </div>
                <ButtomView></ButtomView>
            </div>
        )
    }
}
