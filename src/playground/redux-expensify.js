import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ADD_EXPENSE

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0} = {} ) => (  {
        type:'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description:description,
            note:note,
            amount:amount,
            createdAt:createdAt
        }
  }

) 

const removeExpense = ({id}) => ( {
       type: 'REMOVE_EXPENSE',
       id: id

})

const editExpense = (id, updates) => ({
      type: 'EDIT_EXPENSE',
      id,
      updates
      
})

const setTextFilter = (text = '') => ({
      type: 'SET_TEXT_FILTER',
      text

})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'

})

const  sortByAmount = () => ({
      type: 'SORT_BY_AMOUNT'

})

const setStartDate = (startDate) => ( {
      type: 'SET_START_DATE',
      startDate
})

const setEndDate = (endDate) => ( {
    type: 'SET_END_DATE',
    endDate
})




// Expenses Reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
      switch (action.type) {
             case 'ADD_EXPENSE':
                   return [
                        ...state,
                        action.expense
                   ]
             
             case 'REMOVE_EXPENSE':
                    return state.filter((expense) => {
                          return expense.id !== action.id   
                    })

             case 'EDIT_EXPENSE':
                    return state.map((expense) => {
                          if (expense.id == action.id){
                                 return {
                                     ...expense,
                                     ...action.updates
                                 }

                          }else {
                              return expense
                          }
                    })
             default:
                   return state
      }
}

// Filters Reducer

const filtersReducerDefaultState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
        
    }

const filtersReducer = (state = filtersReducerDefaultState, action) => {
      switch (action.type) {
            case 'SET_TEXT_FILTER':
                   return {
                       ...state,
                       text: action.text
                   }

            case 'SORT_BY_AMOUNT':
                   return {
                          ...state,
                          sortBy:'amount'
                   }

            case 'SORT_BY_DATE':
                   return {
                          ...state,
                          sortBy:'date'
                   }
            
            case 'SET_START_DATE':
                    return {
                           ...state,
                           startDate: action.startDate
                    }

            case 'SET_END_DATE':
                        return {
                               ...state,
                               endDate: action.endDate
                        }


            
            default: 
                  return state
      }
}

// Get Visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
      return expenses.filter((expense) => {
             const startDateMatch = typeof startDate !=='number' || expense.createdAt >= startDate
             const endDateMatch = typeof endDate !=='number' || expense.createdAt <= endDate
             const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

             return startDateMatch && endDateMatch && textMatch
      }).sort((a,b) => {
             if (sortBy == 'date') {
                 return a.createdAt < b.createdAt ? 1: -1
             } else if (sortBy == 'amount') {
                 return a.amount < b.amount ? 1: -1
             }
      })

      };


// Store Definition

const store = createStore(combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
}))

store.subscribe(() => {
     const state = store.getState()
     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
     console.log('Visible Expenses here are :', visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100, createdAt: 1000}))
const expenseTwo = store.dispatch(addExpense({description: 'rents', amount: 5000, createdAt: -1000}))

// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('rent'))
store.dispatch(sortByAmount())  //amount

// store.dispatch(sortByDate())    //Date

store.dispatch(setStartDate(-1000))
store.dispatch(setTextFilter('ren'))
// store.dispatch(setStartDate(225))

// store.dispatch(setEndDate(1250))
// store.dispatch(setEndDate())

// store.dispatch(setTextFilter('adder'))







// const demoState = {
//     expenses: [{
//         id: 'asdfsae',
//         description: 'January Rent',
//         note: 'This was the final payment for tha address',
//         amount: 54500,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined 
//     }
// }


// var numbers = [7, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   console.log( "a is :", a, " b is :",b, " a-b is equal to :", a-b )
//   return a - b;
// });
// console.log(numbers)