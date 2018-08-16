import React,{Component} from 'react'
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Table, Pagination, Popconfirm } from 'antd';
import styles from './Users.less';
import { PAGE_SIZE } from '../../../constants';
import UserModal from './UserModal'

@connect(({users,loading})=>({users,loading}))
export default class Users extends  Component{
  constructor(props){
    super(props)

  }
  deleteHandler=(id)=>{
    const {dispatch} = this.props;
    dispatch({
      type: 'users/remove',
      payload: id,
    });
  };
  pageChangeHandler=(page)=>{
    const {dispatch} = this.props;
    dispatch(routerRedux.push({
      pathname: '/users',
      query: { page },
    }));
  };
  editHandler=(id,values)=>{
    const {dispatch} = this.props;
    dispatch({
      type: 'users/patch',
      payload: { id, values },
    });
  };
  render(){
    const {users:{list,total,page}} = this.props;
    console.log(this.props);
    const loading = this.props.loading.models.users;
    const columns = [
      {
        title:'ID',
        dataIndex:'id',
        key: 'id',
        align:'center'
      },
      {
        title:'Name',
        dataIndex:'name',
        key: 'name',
        align:'center',
        render: text=> <a>{text}</a>
      },
      {
        title:'Website',
        dataIndex:'website',
        key: 'website',
        align:'center',
      },
      {
        title:'Email',
        dataIndex:'email',
        key: 'email',
        align:'center',
      },
      {
        title:'Operation',
        dataIndex:'operation',
        key: 'operation',
        align:'center',
        render: (text, record) => (
          <span className={styles.operation}>
          <UserModal record={record} onOk={this.editHandler.bind(null, record.id)}>
            <a>Edit</a>
          </UserModal>
          <Popconfirm title="Confirm to delete?" onConfirm={this.deleteHandler.bind(null, record.id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
        ),

      },
    ];

    return(
      <div className={styles.normal}>
        <div className={styles.clearfix} >
          <Table
            dataSource={list}
            columns={columns}
            pagination={false}
            loading={loading}
            rowKey={record => record.id}
          />
          <Pagination
            className="ant-table-pagination"
            total={total}
            current={page}
            pageSize={PAGE_SIZE}
            onChange={this.pageChangeHandler}
          />
        </div>
      </div>
    )
  }
}

