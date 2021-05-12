import { initial } from 'lodash'
import { createStore } from 'redux'


const appState= {
    cartCounter: 0,
    selectedFilter: null,

}

function appReducer(appState=initialState, action) {

    switch (action.type){
        case 'addToCart':
            return { 
                ...appState,
                cartCounter:appState.cartCounter +1}

        // case 'deleteFromCart':
        //     return { cartCounter:appState.cartCounter -1}

        case 'awitchFilter':
            return {
                ...appState,
                selectedFilter: action.payload}
        
        default:
            return appState
    }

    
}

let store = createStore(appReducer);
store.subscribe(() => console.log(store.getState()))

export {store};