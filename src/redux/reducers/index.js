import { combineReducers } from "redux";
import { searchReducer

} from './searhReducer';

const rootReducer = combineReducers({
    movies: searchReducer,

})

export default rootReducer;