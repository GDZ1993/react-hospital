import React,{Component} from 'react';

export default class ulView extends Component{

    render() {
        return (
            <ul className="ul-view">
                {
                    this.props.list.map(item => <li className="row-between" key={item.cnId}>
                        <span>{item.cnTitle}</span>
                        <span>[{item.time}]</span>
                    </li>)
                }
            </ul>
        )
    }
}
