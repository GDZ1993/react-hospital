import React,{Component} from 'react';
import Swiper from 'swiper/js/swiper.js'
import '../style/specialist.css'
export default class specialist extends Component{
    componentDidMount() {
        this.createSwiper()
    }

    createSwiper () {
        let mySwiper = new Swiper('.specialist-container', {
            slidesPerView: 5,
            spaceBetween: 10,
            freeMode: true,
            pagination: {
                el: '.specialist-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.specialist-button-next',
                prevEl: '.specialist-button-prev',
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
    render() {
        return (
            <div className="specialist column-div">
                <div className="headline-div column-div" style={{marginBottom: '35px'}}>
                    <p>专家推荐</p>
                    <p>EXPERT</p>
                </div>
                <div className="swiper-container specialist-container">
                    <div className="swiper-wrapper">
                        {
                            this.props.doctors.map(item => <div className="swiper-slide" key={item.id+item.name}>
                                <div className="specialist-slide-div">
                                    <img src={item.photo} alt={item.id+item.name}/>
                                    <div className="doctor-details column-div">
                                        <div className="column-div">
                                            <span>{item.name}</span>
                                            <span>主任医师 {item.duty}</span>
                                        </div>
                                        <p>出诊时间：{item.examine}</p>
                                    </div>
                                    <div className="doctor-name row-between">
                                        <span>{item.name}</span>
                                        <span>主任医师 {item.duty}</span>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className="swiper-button-next specialist-button-next"></div>
                <div className="swiper-button-prev specialist-button-prev"></div>
                <div className="specialist-pagination-view">
                    <div className="swiper-pagination specialist-pagination"></div>
                </div>
            </div>
        )
    }
}
