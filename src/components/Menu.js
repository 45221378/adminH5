import React,{Component} from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'dva';

@connect(({app})=>({app}))
export default class Menus extends Component {
  handleClick = (e) => {
    let {dispatch} = this.props;
    dispatch({
      type:'app/save',
      payload:{
        current:e.key
      }
    })
  };
  render(){
    let {app:{current,theme}} = this.props;
    // console.log(this.props);
    return(
      <Menu
        onClick={this.handleClick}
        theme={theme}
        mode="inline"
        defaultSelectedKeys={[current]}
        style={{height: '86vh', overflowx: 'hidden', borderRight: 'none'}}
      >
        <Menu.Item key="/">
          <Link to="/"><Icon type="home" /><span>Home</span></Link>
        </Menu.Item>
        <Menu.Item key="/users">
          <Link to="/users"><Icon type="bars" /><span>Users</span></Link>
        </Menu.Item>
        <Menu.Item key="/credit">
          <Link to="/credit"><Icon type="bars" /><span>Credit</span></Link>
        </Menu.Item>
        <Menu.Item key="/404">
          <Link to="/page-you-dont-know"><Icon type="frown-circle" /><span>404</span></Link>
        </Menu.Item>
      </Menu>
    )
  }
}


