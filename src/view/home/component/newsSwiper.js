import React,{Component} from 'react';
import Swiper from 'swiper/js/swiper.js'
import '../style/swiperView.css'
import '../style/newsSwiper.css'
import ajax from "../../../util/ajax";
export default class newsSwiper extends Component{
    state = {
        newsTab: [],
        newsDetails: {
            cnTitle: '',
            cnSubhead: '',
            time: '',
            cnId: ''
        },
        newsTabIndex: 0,
        swipers: []
    };
    componentDidMount() {
        this.createSwiper();
        this.requestIndex();
    }
    requestIndex () {
        return new Promise((resolve, reject) => {
            ajax.get("/web/home/shufflingNews", {}).then(res => {
                let arr = [];
                res.data.data.forEach(it => {
                    it.ordinaryNews.forEach((item, index) => {
                        let times = item.time.split('-');
                        item.years = times[0] + '/' + times[1];
                        item.day = times[times.length-1];
                        if (index < 4) arr.push(item)
                    })
                });
                let newsDetails = arr[this.state.newsTabIndex];

                this.setState({
                    newsTab: arr || [],
                    newsDetails: newsDetails || null,
                    swipers: res.data.data[0].shufflingNews || []
                })
            })
        })
    }
    // 创建轮播
    createSwiper () {
        let mySwiper = new Swiper('.newsSwiper-container', {
            pagination: {
                el: '.newsSwiper-pagination',
            },
            centeredSlides: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:false,//修改swiper的父元素时，自动初始化swiper
            onSlideChangeEnd: function(swiper){
                swiper.update();
                mySwiper.startAutoplay();
                mySwiper.reLoop();
            }
        });
    }
    newsTab_click(index) {
        this.setState({
            newsTabIndex: index,
            newsDetails: this.state.newsTab[index]
        })
    }
    render() {
        return (
            <div className="newsSwiper column-div">
                <div className="newsSwiper-view row-between">
                    <div className="newsSwiper-Swiper">
                        <div className="swiper-container newsSwiper-container">
                            <div className="swiper-wrapper">
                                {
                                    this.state.swipers.map((item,index) => <div className="swiper-slide" key={item.cnId}><img src={item.cnCover} style={{width: '100%',
                                        height: '100%'}}/><div className="column-start">{item.cnTitle}</div></div>)
                                }
                            </div>
                            <div className="swiper-pagination newsSwiper-pagination"></div>
                        </div>
                    </div>
                    <div className="newsSwiper-newsDetails column-justify-between">
                        <p>{this.state.newsDetails.cnTitle}</p>
                        <p>{this.state.newsDetails.cnSubhead}</p>
                        <p className="row-between">
                            <span>[{this.state.newsDetails.time}]</span>
                            <button className="column-div">More+</button>
                        </p>
                    </div>
                </div>
                <ul className="newsSwiper-newsTab row-between">
                    {
                        this.state.newsTab.map((item,index) => <li onClick={() => this.newsTab_click(index)} key={item.cnId} className={this.state.newsTabIndex == index? 'row-between li-select' : 'row-between'}>
                            <div className="column-div">
                                <span>{item.day}</span>
                                <span>{item.years}</span>
                            </div>
                            <p>{item.cnTitle}</p>
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}
