import {createStore} from 'redux'

const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
         case 'INCREMENT':
            return {
                count: state.count + 2
            }
          default: 
                 return state; 
    }

})
store.dispatch(
    {
        type: 'INCREMENT'
    }
)


console.log(store.getState())

store.dispatch(
    {
        type: 'INCREMENT'
    }
)