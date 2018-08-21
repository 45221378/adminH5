import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form, Input } from 'antd'
import styles from './index.less'

const FormItem = Form.Item

const Login = ({
  loading,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {
  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'login/login', payload: values })
    })
  }

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <img alt="logo" src={require('../../public/public/H5.svg')} />
        <span>管理系统</span>
      </div>
      <form>
        {/*hasFeedback用于给输入框添加反馈图标*/}
        <FormItem hasFeedback>
          {getFieldDecorator  ('username', {
            // initialValue: 'guest',
            rules: [
              {
                required: true,
                message: '请输入您的用户名',
              },
            ],
          })(<Input onPressEnter={handleOk} placeholder="请输入用户名" maxLength={10}/>)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            // initialValue: 'guest',
            rules: [
              {
                required: true,
                message: '请输入您的密码',
              },
            ],
          })(<Input type="password" onPressEnter={handleOk} placeholder="请输入密码"  maxLength={18}/>)}
        </FormItem>
        <Row>
          <Button type="primary" onClick={handleOk} loading={loading.effects.login}>
              登录
          </Button>
          <p>
            <span>Username：guest</span>
            <span>Password：guest</span>
          </p>
        </Row>
      </form>
    </div>
  )
}

Login.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ loading }) => ({ loading }))(Form.create()(Login))
