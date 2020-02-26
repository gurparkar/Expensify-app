import React from 'react'
import { shallow } from 'enzyme'

import ExpenseForm from '../../components/ExpenseForm'
import Expenses from '../../../expected'

import moment from 'moment'

import { SingleDatePicker } from 'react-dates';
test(' Rendering Expense Form on screen Correctly', () =>{
     const wrapper = shallow(<ExpenseForm />)
     expect(wrapper).toMatchSnapshot()
})

test(' Rendering Expense Form on screen Correctly', () =>{
    const wrapper = shallow(<ExpenseForm  expense = { Expenses[1]} />)
    expect(wrapper).toMatchSnapshot()
})

test('Rendering Expense Form on screen ivalid form submission Correctly', () =>{
    const wrapper = shallow(<ExpenseForm   />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
    
})

test('Rendering Expense form description submission Correctly', () =>{
    const wrapper = shallow(<ExpenseForm   />)
    const value = 'New Description'

    wrapper.find('input').at(0).simulate('change', {
         target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
    expect(wrapper).toMatchSnapshot()
    
})

test('Rendering Expense form note submission Correctly', () =>{
    const wrapper = shallow(<ExpenseForm   />)
    const value = 'New Note'

    wrapper.find('textarea').at(0).simulate('change', {
         target: { value }
    })
    expect(wrapper.state('note')).toBe(value)
    expect(wrapper).toMatchSnapshot()
    
})

test('Rendering Expense form Amount submission Correctly', () =>{
    const wrapper = shallow(<ExpenseForm   />)
    const value = '12.50'

    wrapper.find('input').at(1).simulate('change', {
         target: { value }
    })
    expect(wrapper.state('amount')).toBe(value)
    expect(wrapper).toMatchSnapshot()
    
})


test('Rendering Expense form Amount invalid submission Correctly', () =>{
    const wrapper = shallow(<ExpenseForm   />)
    const value = '12.506'

    wrapper.find('input').at(1).simulate('change', {
         target: { value }
    })
    expect(wrapper.state('amount')).toBe("")
    expect(wrapper).toMatchSnapshot()
    
})

test('A call on onSubmit prop for valid form submission', () => {
      const onSubmitSpy = jest.fn()
      const wrapper = shallow(<ExpenseForm expense = {Expenses.expenses[0]} onSubmit = {onSubmitSpy} />)
      wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
     console.log(Expenses.expenses)
     expect(wrapper.state('error')).toBe('')
     expect(onSubmitSpy).toHaveBeenCalledWith({
         description: Expenses.expenses[0].description,
         amount: Expenses.expenses[0].amount,
         note: Expenses.expenses[0].note,
         createdAt: Expenses.expenses[0].createdAt
     })

})


test('Set new date on date change  for valid form submission', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm  />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
    // console.log(now)
    expect(wrapper).toMatchSnapshot()
   

})

test('Set new date on Focus  for valid form submission', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm  />)
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused })
    expect(wrapper.state('calendarFocused')).toBe(focused)
    
    expect(wrapper).toMatchSnapshot()
   

})