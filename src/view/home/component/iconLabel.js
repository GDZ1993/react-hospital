import React,{Component} from 'react';
import '../style/iconLabel.css'
export default class iconLabel extends Component{

    render() {
        return (
            <div className="iconLabel column-div">
                <div className="headline-div column-div">
                    <p>疾病专科</p>
                    <p>SECTION OFFICE</p>
                </div>
                <div className="iconLabel-div row-start">
                    {
                        this.props.labels.map(item => <div className="iconLabel-item column-div" key={item.dtId}>
                            <img src={item.dtPhoto}/>
                            <p>{item.dtName}</p>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}
