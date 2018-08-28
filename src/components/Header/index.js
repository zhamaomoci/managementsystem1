import React, { Component } from 'react';
import {Row, Col} from 'antd';
import './index.less';
import Util from '../../utils/utils';
import axios from '../../axios';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    componentWillMount(){
        this.setState({
            username: '炸了毛的摩刺'
        })
        // 实时获取时间
        setInterval(()=>{
            let sysTime =  Util.formatDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)
        // 百度天气
        this.getWeatherAPIData();
    }
    // 获取百度天气
    getWeatherAPIData(){
        let city = '北京';
        // 发送jsonp
        axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location='+ encodeURIComponent(city) +'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status == 'success'){
                // 获取数据
                let data = res.results[0].weather_data[0];
                console.log(data)
                // 存储数据
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.weather
                })
            }
        })
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>{'欢迎，' + this.state.username}</span>
                        <a >退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页 
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt=""/>
                        </span>
                        <span className="weather-detail">
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}