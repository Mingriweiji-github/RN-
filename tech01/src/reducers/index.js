import {combineReducers} from 'redux';
import TechReducer from './TechReducer'
import SelectReducer from './SelectReducer';


const reducers = combineReducers({
    techs: TechReducer,
    selectdTechId:SelectReducer
})

export default reducers;

// console.log(store.getState(){
//     techs:[]
// });