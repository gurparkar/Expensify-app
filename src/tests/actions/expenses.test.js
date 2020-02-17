import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
      const action = removeExpense({ id: '123abc'})
      expect(action).toEqual({
            type: 'REMOVE_EXPENSE',
            id: '123abc'
      })
})


test('Should setup edit expense action object', () => {
      const action = editExpense('12345', {description: 'We got it'})
      expect(action).toEqual({
            type: 'EDIT_EXPENSE',
            id: '12345',
            updates: {description: 'We got it'}
      })
})

test('Should setup add expense action object with provided values', () =>{
     const expenseData = {
         description: 'Rents',
         amount: 109500,
         createdAt: 10000,
         note: 'This was last months rent '
     }

     const action = addExpense(expenseData)
     expect(action).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
              ...expenseData,
              id: expect.any(String)
              
          }
     })

})

test('should setup add expense action with default values', () => {
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }
      const action = addExpense()
      expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
            
        }
      })

})