import React,{Component} from 'react';
import '../style/openLink.css'
export default class openLink extends Component{

    render() {
        return (
            <div className="openLink-div row-start">
                <div className="column-div">
                    <span>LINKS</span>
                    <span>友情链接</span>
                </div>
                {
                    this.props.links.map(item => <a key={item.clUrl+item.clTitle} href={item.clUrl} target="_blank" className="openLink-a row-div">{item.clTitle}</a>)
                }
            </div>
        )
    }
}
