import {combineReducers} from 'redux';

const reducer1 = (state = [], action) => {
    switch (action.type) {
        case '':
            return 
        default:
            return state
    }
}

const reducer2 = (state = [], action) => {
    switch (action.type) {
        case '':
            return 
        default:
            return state
    }
}

const reducers = combineReducers({
    reducer1,
    reducer2
});

export {reducers};