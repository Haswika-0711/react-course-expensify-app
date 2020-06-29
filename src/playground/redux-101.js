import {createStore} from 'redux';

//Action Generators - funcs that return action objs

const incrementCount =({incrementBy=1}= {}) =>({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount =({decrementBy=1}= {}) =>({
    type: 'DECREMENT',
    decrementBy
});

const setCount =({count}) =>({
    type: 'SET',
    count
});


const resetCount =() => ({
    type:'RESET'
});

//Reducers
//1.pure functions
//2.Never change state or action

const countReducer =(state = { count : 0},action) =>{
    switch(action.type){
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return{
               count: state.count - action.decrementBy
            };
        case 'RESET':
            return{
                count: 0
            }
        case 'SET':
            return{
                count:action.count
            }
        default:
            return state;
    }
};

const store= createStore(countReducer);

//whenever data changes subscribe function is called .unsubscribe is used to stop subscription..i.e we no longer get update info
//..we can juz call unsubscribe()
const unsubscribe=store.subscribe(() =>{
    console.log(store.getState());

});
//ACTIONS -an object that gets sent to store
//when dispatch is called createstore is called

// store.dispatch( {
//     type:'INCREMENT',
//     incrementBy:5
// });

store.dispatch(incrementCount({ incrementBy: 5}))

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({count:1010}));


