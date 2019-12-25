import React, {Component} from 'react';
import { createHashHistory } from 'history';
import {Menu} from 'antd'
import './menus.css'
import ajax from "../../util/ajax";
const {SubMenu} = Menu;
const history = createHashHistory();
export default class menus extends Component {
    state = {
        current: 'mail',
        navArr: []
    };
    homeClick = () => {
        history.push('/home')
    };
    handleClick = e => {
        console.log('click ', e);
        history.push('/newsList'+e.key)
    };
    componentDidMount() {
        this.requestIndex()
    }

    requestIndex () {
        return new Promise((resolve, reject) => {
            ajax.get("/web/home/nav", {}).then(res => {
                if (res.data.code == 1) {
                    this.setState({
                        navArr: res.data.data
                    })
                }
            })
        })
    }
    render() {
        return ( // onSelect={this.handleClick} openKeys='/'
            <Menu  selectable mode="horizontal"  className="menus-Menu-UL row-div">
                <Menu.Item key='/' onClick={this.homeClick}>首页</Menu.Item>
                {
                    this.state.navArr.map(item => {
                        if (item.twoList.length) {
                            return <SubMenu key={item.coId}  title={<span className="submenu-title-wrapper">{item.coName}</span>}>
                                {
                                    item.twoList.map(it => <Menu.Item onClick={this.handleClick} key={'?coId=' + item.coId+'&ctId='+ it.ctId}>{it.ctName}</Menu.Item>)
                                }
                            </SubMenu>
                        } else {
                            return <Menu.Item onClick={this.handleClick} key={'?coId=' + item.coId}>{item.coName}</Menu.Item>
                        }
                    })
                }
            </Menu>
        )
    }
}
