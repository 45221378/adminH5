// import React from "react";
// import { Button } from "antd";
import styles from "./index.less";
//
// export default class Credit extends React.Component {
//   render() {
//     return (
//       <div className={styles.userModel}>
//         <h1>USER Page</h1>
//         <p>1</p>
//         <Button type="primary" className={styles.mgr20}>
//           Increase
//         </Button>
//         <Button type="danger">Decrease</Button>
//       </div>
//     );
//   }
// }

import Users from './components/Users';
export default () => {
  return (
    <div className={styles.formList}>
      <Users />
    </div>
  )
}
