import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './pages/login/index.js';
import Button from './pages/ui/button.js';
import Modals from './pages/ui/modals.js';
import Loading from './pages/ui/loadings.js';
import Notice from './pages/ui/notice.js';
import Message from './pages/ui/messages.js';
import Tab from './pages/ui/tabs.js';
import Gallery from './pages/ui/gallery.js';
import Carousel from './pages/ui/carousel.js';
import FormLogin from './pages/form/login.js';
import NoMatch from './pages/nomatch/index.js';
export default class Router extends Component {
    render(){
        return (
            <HashRouter>
                <App>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                            <Route path="/admin/ui/buttons" component={Button}></Route>
                            <Route path="/admin/ui/modals" component={Modals}></Route>
                            <Route path="/admin/ui/loadings" component={Loading}></Route>
                            <Route path="/admin/ui/notification" component={Notice}></Route>
                            <Route path="/admin/ui/messages" component={Message}></Route>
                            <Route path="/admin/ui/gallery" component={Gallery}></Route>
                            <Route path="/admin/ui/tabs" component={Tab}></Route>
                            <Route path="/admin/ui/carousel" component={Carousel}></Route>
                            <Route path="/admin/form/login" component={FormLogin}></Route>
                            <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/order/detail" component={Login}></Route>
                </App>
            </HashRouter>
        )
    }
}