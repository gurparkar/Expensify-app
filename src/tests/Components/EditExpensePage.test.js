import React from 'react'
import { shallow } from 'enzyme'

import { EditExpensePage } from '../../Components/editExpensePage'
import Expenses from '../../../expected'



let editExpense, history, wrapper,removeExpense





beforeEach( () => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow( <EditExpensePage editExpense= {editExpense} history = {history}  removeExpense = {removeExpense } expense = {Expenses.expenses[2]}/>)
})

test ( 'Render EditExpensePage react Component correctly in homepage', () => {
     expect(wrapper).toMatchSnapshot()  
})

test ( 'Render EditExpensePage react Component correctly', () => {
     wrapper.find('ExpenseForm').prop('onSubmit')(Expenses.expenses[2])
     expect(history.push).toHaveBeenLastCalledWith('/')
     expect(editExpense).toHaveBeenLastCalledWith(Expenses.expenses[2].id, Expenses.expenses[2])
})

test ( 'Render removeExpense react Component correctly in homepage', () => {
     wrapper.find('button').simulate('click')
     expect(history.push).toHaveBeenLastCalledWith('/')
     expect(removeExpense).toHaveBeenLastCalledWith({
           id: Expenses.expenses[2].id
     })
})



// beforeEach( () => {
//     editExpense = jest.fn()
//     history = { push: jest.fn() }
//     removeExpense = jest.fn()
//     wrapper = shallow( < EditExpensePage 
//         editExpense = {editExpense} 
//         removeExpense = { removeExpense}
//         history = {history}  />)
// })

// test ( 'Render EditExpense Component correctly in homepage', () => {
//      expect(wrapper).toMatchSnapshot()  
// })