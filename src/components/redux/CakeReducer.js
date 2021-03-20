import {BUY_CAKE} from './CakeAction';

const initialState = {
    numOfCakes : 10
}

export const CakeReducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_CAKE :
            return{
                ...state,
                numOfCakes : state.numOfCakes - 1
            }
            default:
                return state;
    }
}

