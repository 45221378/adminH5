import React,{Component} from 'react'
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Table, Pagination, Popconfirm } from 'antd';
import styles from './Users.less';
import { PAGE_SIZE } from '../../../constants';

@connect(({users,loading})=>({users,loading}))
export default class Users extends  Component{
  constructor(props){
    super(props)

  }
  deleteHandler=(id)=>{
    // console.log(this.props);
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
  render(){
    const {users:{list,total,page}} = this.props;
    // console.log( this.props);
    const loading = this.props.loading.models.users;
    const columns = [
      {
        title:'ID',
        dataIndex:'id',
        key: 'id',
        // render: id=> {id}
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
        // render: id=> {id}
      },
      {
        title:'Email',
        dataIndex:'email',
        key: 'email',
        align:'center',
        // render: id=> {id}
      },
      {
        title:'Operation',
        dataIndex:'operation',
        key: 'operation',
        align:'center',
        render: (text, record) => (
          <span className={styles.operation}>
          {/*<UserModal record={record} onOk={editHandler.bind(null, record.id)}>*/}
            {/*<a>Edit</a>*/}
          {/*</UserModal>*/}
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
// function Users({ list: dataSource, total, page: current ,loading}) {
//   function deleteHandler(id) {
//     console.warn(`TODO: ${id}`);
//   }
//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//       render: text => <a href="">{text}</a>,
//     },
//     {
//       title: 'Email',
//       dataIndex: 'email',
//       key: 'email',
//     },
//     {
//       title: 'Website',
//       dataIndex: 'website',
//       key: 'website',
//     },
//     {
//       title: 'Operation',
//       key: 'operation',
//       render: (text, { id }) => (
//         <span className={styles.operation}>
//           <a href="">Edit</a>
//           <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, id)}>
//             <a href="">Delete</a>
//           </Popconfirm>
//         </span>
//       ),
//     },
//   ];
//   return (
//     <div className={styles.normal}>
//       <div className={styles.clearfix}>
//         <Table
//           columns={columns}
//           dataSource={dataSource}
//           rowKey={record => record.id}
//           pagination={false}
//         />
//         <Pagination
//           className={styles.pagination}
//           total={total}
//           current={current}
//           pageSize={PAGE_SIZE}
//         />
//       </div>
//     </div>
//   );
// }
// function mapStateToProps(state) {
//   const { list, total, page } = state.users;
//   return {
//     list,
//     total,
//     page,
//     loading: state.loading.models.users,
//   };
// }
// export default connect(mapStateToProps)(Users);
