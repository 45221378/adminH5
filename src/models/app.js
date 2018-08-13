export default {
  namespace: "app",

  state: {
    current:'/',
    theme:'light',
    collapsed:false,
    isNavbar: document.body.clientWidth < 769,  //当页面的宽度小于769px的时候，左边部分的导航栏消失
  },

  subscriptions: {
    setup({ dispatch }) {
      dispatch({type:'query'})
      let tid
      window.onresize = ()=>{
        clearTimeout(tid)
        tid = setTimeout(()=>{
          dispatch({type:'changeNavbar'})
        },300)
      }
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: "save" });
    },
    *changeNavbar(action,{put,select}){
      const {app} = yield(select(_=>_));
      const isNavbar = document.body.clientWidth<769;
      if(isNavbar!==app.isNavbar){
        yield put({type:'handleNavbar',payload:isNavbar});
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    handleNavbar(state,{payload}){
      return { ...state,isNavbar:payload}
    }
  }
};
