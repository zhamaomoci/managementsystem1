import React, {Component} from 'react';
import {Card, Carousel} from 'antd';
import './ui.less';
export default class Carousels extends Component{
    render(){
        return(
            <div>
                <Card title="文字背景轮播">
                    <Carousel autoplay effect="fade">
                        <div><h3>ant motion banner - react</h3></div>
                        <div><h3>ant motion banner - view</h3></div>
                        <div><h3>ant motion banner - challenge</h3></div>
                        <div><h3>ant motion banner - sunshine</h3></div>
                    </Carousel>
                </Card>
                <Card title="图片轮播" className="slider-wrap">
                    <Carousel autoplay effect="fade" >
                        <div>
                            <img src="/carousel-img/carousel-1.jpg" alt="" style={{width: '100%'}}/>
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-2.jpg" alt="" />
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-3.jpg" alt="" />
                        </div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}