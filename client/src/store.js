import {combineReducers,createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'
import { blogReducer } from './redux/reducers/reducer';

const initState={};

const store=createStore(combineReducers({
    blogs:blogReducer
}),
initState,
composeWithDevTools(applyMiddleware(thunk))
)
export default store