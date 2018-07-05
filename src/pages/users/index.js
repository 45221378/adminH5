import React from 'react'
import {Button} from 'antd';

export default class Credit extends React.Component {
  render(){
    return(
      <div>
        <h1>USER Page</h1>
        <p>1</p>
        <Button type="dashed">Increase</Button>
        <Button type="danger">Decrease</Button>
      </div>
    )
  }
}

