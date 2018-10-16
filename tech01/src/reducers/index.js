import {combineReducers} from 'redux';
import TechReducer from './TechReducer'

const reducers= combineReducers({
    techs: TechReducer
})

export default reducers;

// console.log(store.getState(){
//     techs:[]
// });