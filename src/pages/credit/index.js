import React from "react";
import { connect } from 'dva'

@connect(({credit,loading})=>({credit,loading}))
export default class Credit extends React.Component {
  constructor(props){
    super(props)
  }
  get=(organId)=>{
    const {dispatch} = this.props;
    dispatch({
      type:'credit/getToken',
      payload:{
        organId
      }
    })
  };
  componentDidMount(){
    this.get(998);
  }
  render() {
    return (
      <div>
        <div>Credit Page</div>
      </div>
    );
  }
}
