import { getToken } from './services/credit'


export default {
  namespace: "credit",

  state: {
    token:''
  },
  reducers: {
    save(state, { payload}) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getToken(
      {payload:{organId}},
      {put,call,select}){
      const response = yield call(getToken,{organId});
      // yield put({
      //   type:'save',
      //   token:response
      // })
    }
  },
  subscriptions: {

  }
};
