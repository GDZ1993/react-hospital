import React,{Component} from 'react';
import SwiperView from './component/swiperView'
import NewsSwiper from './component/newsSwiper'
import IconLabel from './component/iconLabel'
import Specialist from './component/specialist'
import ColumnCenter from './component/columnCenter'
import OpenLink from './component/openLink'
import ButtomView from "../buttomView/buttomView";
import ajax from "../../util/ajax";
// import ProrpTypes from 'prop-types';

export default class home extends Component{
    state = {
        banner: [],
        iconLabels: [],
        doctors: [],
        columns: [],
        links: []
    };
    componentWillMount () {
        this.requestIndex();
    }
    // 发送请求获取 医院轮播
    requestIndex () {
        return new Promise((resolve, reject) => {
            ajax.get("/web/home/index", {}).then(res => {
                res.data.data.map.forEach(item => {
                    item.url = '../../../images/' + item.key + '.png'
                });
                this.setState({ // mentor
                    banner: res.data.data.banner,
                    iconLabels: res.data.data.department,
                    doctors: res.data.data.mentor,
                    columns: res.data.data.map,
                    links: res.data.data.link
                });
            })
        })
    }
    render() {
        return (
            <div>
                <SwiperView banner={this.state.banner}/>
                <NewsSwiper/>
                <IconLabel labels={this.state.iconLabels}/>
                <Specialist doctors={this.state.doctors}/>
                <ColumnCenter columns={this.state.columns}/>
                <OpenLink links={this.state.links}/>
                <ButtomView/>
            </div>
        )
    }
}
