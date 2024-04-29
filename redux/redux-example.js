const redux = require('redux');
const bindActionCreators = redux.bindActionCreators;
const createStore = redux.createStore;

// ----- ACTION CREATORS ------------------------------------------
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

function increment() {
    return {
        type: INCREMENT
    };
}

function decrement() {
    return {
        type: DECREMENT
    };
}
// ----- REDUCER --------------------------------------------------
const initialState = {
    count: 0
};

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            };
        case DECREMENT:
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}

// ----- STORE ----------------------------------------------------
// first, create the store by passing the reducer to the createStore function
const store = createStore(counterReducer);

// next, subscribe to the store to listen for changes
const unsubscribe = store.subscribe(() => {
    console.log('State has changed:', store.getState());
});

// ----- BIND ACTIONS ---------------------------------------------
const actions = bindActionCreators({ increment, decrement }, store.dispatch);

actions.increment();
actions.increment();
actions.decrement();
actions.increment();

// At some point in the future, you can stop listening for changes 
// by calling the function returned by store.subscribe()
unsubscribe();