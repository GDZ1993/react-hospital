import React,{Component} from 'react';
import 'antd/dist/antd.css';
import Home from '../home/home'
import searchView from "../searchView/searchView";
import newsList from "../newsList/newsList";
import Navigation from '../navigation/navigation'
import {Route, Switch} from 'react-router-dom'
export default class index extends Component{

    render() {
        return (
            <div>
                <Navigation/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/newsList" component={newsList}/>
                    <Route path="/searchView" component={searchView}/>
                    <Route component={Home}/>
                </Switch>
            </div>
        )
    }
}
