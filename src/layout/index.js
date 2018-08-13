import { LocaleProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import withRouter from "umi/withRouter";
import App from "./app";

import {persistStore, persistCombineReducers} from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

import storage from 'redux-persist/es/storage'
const config = {
  key: 'root',
  storage,
};
function configureStore(){
  let reducer = persistCombineReducers(config, reducers);
  let store = createStore(reducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { persistor, store }
}

export default withRouter(props => {
  const { persistor, store } = configureStore();
  return (
    <LocaleProvider locale={enUS} store={store}>
      <PersistGate persistor={persistor}>
        <App>{props.children}</App>
      </PersistGate>
    </LocaleProvider>
  );
});
