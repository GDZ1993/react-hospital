import React,{Component} from 'react';
import './buttomView.css'
export default class buttomView extends Component{

    render() {
        return (
            <div className="buttomView">
                <div className="buttomView-div row-between">
                    <div className="address">
                        <div className="row-start">
                            <div><img src={require('../../images/dizhi@2x.png')} alt="ass"/></div>
                            <span>辽宁省大连市沙河口区联合路193号</span>
                        </div>
                        <div className="row-start">
                            <div><img src={require('../../images/dianhua @2x.png')} alt="ass"/></div>
                            <span>联系电话：0411-39077777</span>
                        </div>
                        <div className="row-start">
                            <div><img src={require('../../images/youxiang@2x.png')} alt="ass"/></div>
                            <span>邮箱：dlheart@163.com</span>
                        </div>
                    </div>
                    <div className="column-div">
                        <img src={require('../../images/shiyedanwei@2x.png')} alt="lg" style={{marginBottom: '15px'}}/>
                        <span>版权所有：大连医科大学心血管病医院网站   辽ICP备14010441号</span>
                        <span>辽卫网审字【2014】第66号</span>
                    </div>
                    <div className="column-div">
                        <span style={{marginBottom: '5px'}}>扫描登录微官网</span>
                        <img src={require('../../images/erweima@2x.png')} alt="eq"/>
                    </div>
                </div>
                <div className="buttomView-buttom"></div>
            </div>
        )
    }
}
