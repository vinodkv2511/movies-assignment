
import {createRoot} from 'react-dom/client'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import reducer from "./reducers"

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
