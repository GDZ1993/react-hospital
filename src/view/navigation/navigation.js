import './navigation.css'
import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Menus from '../menus/menus'
import {Icon,Input} from 'antd'
import { createHashHistory } from 'history';
const history = createHashHistory();
const { Search } = Input;
export default class App extends Component{
    input_click (e) {
        console.log(e)
        history.push('/searchView')
    }
    render() {
        return (
            <div className="navigation column-div">
                <div className="navigation-head-one row-between">
                    <Link to="/home"><img src={require('../../images/logo@2x.png')} alt="logo"/></Link>
                    <div className="navigation-inputBut-view">
                        <Search placeholder="请输入关键字" prefix={<Icon type="search" style={{ fontSize: '18px'}}/>} onSearch={value => this.input_click(value)} enterButton="搜索" />
                    </div>
                    <div className="navigation-contactWay column-end">
                        <p>患者服务热线</p>
                        <p className="row-end">
                            <img src={require('../../images/phone@2x.png')} style={{marginRight: '10px'}} alt="phone"/>
                            <span>0411-39077777</span>
                        </p>
                    </div>
                </div>
                <Menus/>
            </div>
        )
    }
}
