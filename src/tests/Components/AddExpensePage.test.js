import React from 'react'
import { shallow } from 'enzyme'

import { AddExpensePage } from '../../Components/AddExpensePage'
import Expenses from '../../../expected'

let onSubmit, history, wrapper

beforeEach( () => {
    onSubmit = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow( <AddExpensePage onSubmit = {onSubmit} history = {history} />)
})

test ( 'Render AddExpensePage Component correctly in homepage', () => {
     expect(wrapper).toMatchSnapshot()  
})

test ( 'Render handle onSubmit function in AddExpensePage Component ', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(Expenses.expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(onSubmit).toHaveBeenLastCalledWith(Expenses.expenses[1])
})

console.log(Expenses)