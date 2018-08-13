import React, { Component } from "react";
import { withRouter } from "dva/router";
import { connect } from "dva";
import PropTypes from "prop-types";
import styles from "./index.less";
import {Menus} from './../components'
import {Icon,Switch,Layout,Dropdown} from 'antd';
const {Sider,Header,Content  } = Layout;
const menu = (<Menus/>);
class App extends Component {
  changeTheme = (value) => {
    let {dispatch} = this.props;
    dispatch({
      type:'app/save',
      payload:{
        theme:value ? 'dark' : 'light',
      }
    })
  };

  toggle = () => {
    let {dispatch,app:{app:{collapsed,isNavbar}}} = this.props;
    if(isNavbar){
      //此时的页面宽度小于769px,左边部分导航栏处于隐藏状态，这个icon则点击会出现导航栏

    }else{
      dispatch({
        type:'app/save',
        payload:{
          collapsed: !collapsed,
        }
      })

    }
  };

  render() {
    const { children } = this.props;
    if (
      this.props.location.pathname === "/main" ||
      this.props.location.pathname === "/main/mainChildren"
    ) {
      return (
        <div>
          {this.props.children}
          <div className={styles.footer}>我是公共的footer</div>
        </div>
      );
    }
//selectedKeys 当前选中的菜单项 key 数组  string[]
//mode	菜单类型，现在支持垂直、水平、和内嵌模式三种  string: vertical vertical-right horizontal inline
    let {app:{app:{isNavbar,theme,collapsed}}} = this.props;
    return (
      <div className={styles.container}>
        {!isNavbar&&<Layout className={styles.header}>
          <Sider
            theme={theme}
            trigger={null}
            collapsible
            collapsed={collapsed}
            className={styles.sider}
          >
            <div className={styles.logo}>
              <img alt="logo" src={require('../public/public/H5.svg')} />
              {collapsed ? '' : <span>H5 Admin</span>}
            </div>
            <Menus/>
            {!collapsed&&<div className={styles.switch}>
              <span className={styles.changeTheme}><i className="anticon anticon-bulb"></i>Change Theme</span>
              <Switch
                checked={theme === 'dark'}
                onChange={this.changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
              />
            </div>}
          </Sider>
        </Layout>}
        <Layout>
          <Header style={{ background: '#fff', padding: '4px 0 0 14px'}}>
            {!isNavbar?<Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              style={{fontSize:'16px'}}
            />:<Dropdown overlay={menu} trigger={['click']}>
              <span>Menu<Icon
                style={{fontSize:'16px',paddingLeft:'4px',verticalAlign:'middle'}}
                type="down"
              /></span>
            </Dropdown>}
          </Header>
          <Content className={styles.content} style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,minWidth: 614 }}>
            <div>{children}</div>
          </Content>
        </Layout>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  loading:PropTypes.object,
};

export default withRouter(connect((app,loading) => ({app,loading}))(App));
