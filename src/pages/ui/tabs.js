import React, { Component } from 'react';
import { Button, Card, message, Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;


export default class Tab extends Component {
    newTabIndex = 0;
    handleCallback= (key)=>{
        message.info('当前页为：' + key)
    }
    componentWillMount(){
        const panes = [
            {
                title: 'Tab 1',
                content: 'Tab 1',
                key: '1'
            },
            {
                title: 'Tab 2',
                content: 'Tab 2',
                key: '2'
            },
            {
                title: 'Tab 3',
                content: 'Tab 3',
                key: '3'
            }
        ]
        this.setState({
            activeKey: panes[0].key,
            panes
        })
    }
    onChange= (activeKey)=> {
        this.setState({
            activeKey
        })
    }
    onEdit = (targetKey, action)=>{
        this[action](targetKey)
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }
    render(){
        return(
            <div>
                <Card title="Tab页签">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图的页签">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="plus"></Icon>Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab={<span><Icon type="delete"></Icon>Tab 2</span>} key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><Icon type="edit"></Icon>Tab 3</span>} key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="动态增减的Tab页签">
                    <Tabs 
                        defaultActiveKey="1" 
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {this.state.panes.map((item)=>{
                            return <TabPane
                                tab={item.title}
                                key={item.key}
                            ></TabPane>
                        })}
                    </Tabs>
                </Card>
            </div>
        )
    }
}