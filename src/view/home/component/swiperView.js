import React, {Component} from 'react';
import '../style/swiperView.css'
import Swiper from 'swiper/js/swiper.js'

export default class swiperView extends Component {
    state = {
        tabs: [
            {
                name: '预约挂号',
                img: require('../../../images/yuyueguahao-xz@2x.png')
            },
            {
                name: '在线问诊',
                img: require('../../../images/ziaxianwenzhen -xz@2x.png')
            },
            {
                name: '大连市高层次人才创新创业计划项目',
                img: require('../../../images/tingzhengonggao-xz@2x.png')
            },
            {
                name: '省级平台',
                img: require('../../../images/jiankangsuifang-xz@2x.png')
            },
            {
                name: '市级平台',
                img: require('../../../images/huanzhefuwu-xz@2x.png')
            }
        ]
    };

    componentDidMount() {
        let mySwiper = new Swiper('.swiperView-container', {
            pagination: {
                el: '.swiperView-pagination',
            },
            centeredSlides: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiperView-button-next',
                prevEl: '.swiperView-button-prev',
            },
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: false,//修改swiper的父元素时，自动初始化swiper
            onSlideChangeEnd: function (swiper) {
                swiper.update();
                mySwiper.startAutoplay();
                mySwiper.reLoop();
            }
        });
    }

    render() {
        return (
            <div className="swiperView-div">
                <div className="swiper-container swiperView-container">
                    <div className="swiper-wrapper">
                        {
                            this.props.banner.map((item, index) => <div className="swiper-slide"
                                                                        key={item.bimg + index}><img src={item.bimg}/>
                            </div>)
                        }
                    </div>
                    <div className="swiper-button-next swiperView-button-next"></div>
                    <div className="swiper-button-prev swiperView-button-prev"></div>
                    <div className="swiper-pagination swiperView-pagination"></div>
                </div>
                <div className="swiperView-tab-div column-div">
                    <ul className="swiperView-tab-ul row-between">
                        {
                            this.state.tabs.map(item => <li className="column-div" key={item.name}>
                                <img src={item.img} alt={item.name}/>
                                <span>{item.name}</span>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
