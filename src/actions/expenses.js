import uuid from 'uuid'
import database from '../firebase/firebase'

export const addExpense = (expense ) => (  {
    type:'ADD_EXPENSE',
    expense
} 

) 


export const removeExpense = ({id}) => ( {
  type: 'REMOVE_EXPENSE',
  id: id

})

export const editExpense = (id, updates) => ({
 type: 'EDIT_EXPENSE',
 id,
 updates
 
})

export const startAddExpense = (expenseData = {}) => {
     return (dispatch) => {
       const {
        description ='',
        note = '',
        amount= 0,
        createdAt = 0
     } = expenseData

     const expense = { description, note, amount, createdAt}
     

     return database.ref('expenses').push(expense).then((ref) => {
       dispatch(addExpense({
         id: ref.key,
         ...expense
       }))
       console.log("id is ", ref.key)
     })
}

}

export const setExpenses = (expenses) => ({
     type: 'SET_EXPENSES',
     expenses
})

export const  startSetExpenses = () => {
       return (dispatch) => {
            return database.ref('expenses').once('value').then((snapshot) => {
                 const expenses = []

                 snapshot.forEach((childSnapshot) => {
                      expenses.push({
                            id: childSnapshot.key,
                            ...childSnapshot.val()

                      })
                 })

                 dispatch(setExpenses(expenses))
            })
       }

}

export const startRemoveExpenses = ({id} ={}) => {
       return (dispatch) => {
            return database.ref(`expenses/${id}`).remove().then(() => {
                 dispatch(removeExpense({id}))
            })
       }

}

export const startEditExpense = (id, updates) => {
     return (dispatch) => {
          return database.ref(`expenses/${id}`).update(updates).then(() =>{
               dispatch(editExpense(id, updates))
          })
     }

}

