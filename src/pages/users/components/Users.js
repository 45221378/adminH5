import React,{Component} from 'react'
import { connect } from 'dva';
import { Table, Pagination, Popconfirm } from 'antd';
import styles from './Users.less';
import { PAGE_SIZE } from '../constants';

@connect(({users})=>({users}))
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
  }
  render(){
    const {users:{list}} = this.props;
    const columns = [
      {
        title:'ID',
        dataIndex:'id',
        key: 'id',
        // render: id=> {id}
      },
      {
        title:'Name',
        dataIndex:'name',
        key: 'name',
        render: text=> <a>{text}</a>
      },
      {
        title:'Website',
        dataIndex:'website',
        key: 'website',
        // render: id=> {id}
      },
      {
        title:'Email',
        dataIndex:'email',
        key: 'email',
        // render: id=> {id}
      },
      {
        title:'Operation',
        dataIndex:'operation',
        key: 'operation',
        render: (text,{id})=>(
          <span className={styles.operation}>
        <a href="">Edit</a>
        <Popconfirm title="Confirm to delete?" onConfirm={this.deleteHandler.bind(null, id)}>
          <a href="">Delete</a>
        </Popconfirm>
      </span>
        ),
      },
    ];

    console.log(list);

    return(
      <div className={styles.normal}>
        <div className={styles.clearfix} >
          <Table
            dataSource={list}
            columns={columns}
            pagination={false}
            rowKey={record => record.id}
          />
          <Pagination/>
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
