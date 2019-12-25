import React,{Component} from 'react';
import '../style/columnCenter.css'
import {Icon} from 'antd'
import UlView from "./ulView";
export default class columnCenter extends Component{

    render() {
        return (
            <div className="columnCenter column-div">
                <div className="headline-div column-div" style={{marginBottom: '40px'}}>
                    <p>栏目中心</p>
                    <p>COLUMN CENTER</p>
                </div>
                <ul className="columnCenter-ul row-between">
                    {
                        this.props.columns.map(item => <li className="columnCenter-li column-div" key={item.key}>
                            <div className="columnCenter-item">
                                <img src={require('../../../images/' + item.key + '.png')} alt={item.name}/>
                                <p className="row-between">
                                    <span>{item.name}</span>
                                    <Icon type="right" />
                                </p>
                            </div>
                            <UlView list={item.list}/>
                        </li>)
                    }

                </ul>
            </div>
        )
    }
}
