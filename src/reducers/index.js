import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import toastr from './toastrReducer';
const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInProgress,
    toastr
});


export default rootReducer;