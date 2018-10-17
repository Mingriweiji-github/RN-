import {combineReducers} from 'redux';
import TechReducer from './TechReducer'



const reducers = combineReducers({
    techs: TechReducer,
    selectdTechId:() => 3
})

export default reducers;

// console.log(store.getState(){
//     techs:[]
// });