import React,{Component} from 'react';
import { withRouter } from 'dva/router'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import Link from 'umi/link'
import style from './index.less'


class App extends Component{
    render(){
        const {children} = this.props;
        if(this.props.location.pathname==='/main'||this.props.location.pathname==='/main/mainChildren') {
            return <div>
                {this.props.children}
                <div className={style.footer}>我是公共的footer</div>
            </div>
        }


        return (
            <div>
                <div>
                    {children}
                </div>
                <footer>
                    <p><Link to="/" >Index </Link></p>
                    <p><Link to="/credit" >credit </Link></p>
                    <p><Link to="/users" >users</Link></p>
                </footer>
            </div>
        )
    }
}


App.propTypes = {
    children: PropTypes.element.isRequired
};


export default withRouter(connect(()=>({}))(App));
