import React from 'react'
import { shallow } from 'enzyme'

import { ExpenseListFilters } from '../../Components/ExpenseListFilters'
import Expenses from '../fixtures/expenses'

import { filters, altFilters } from  '../fixtures/filters'


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper


beforeEach( () => {
    setTextFilter = jest.fn()
    sortByDate= jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow( <ExpenseListFilters setTextFilter = {setTextFilter} sortByDate = {sortByDate} sortByAmount = {sortByAmount} setStartDate = {setStartDate} setEndDate = {setEndDate}   filters = { filters }   />)
         
        
        
        

})

test ( 'Render ExpenseListsFilters react Component correctly in homepage', () => {
     expect(wrapper).toMatchSnapshot()  
})

test ( 'Render ExpenseListsFilters altFilters react Component correctly in homepage', () => {
    wrapper.setProps( {
        filters: altFilters
    } )
    expect(wrapper).toMatchSnapshot()  
})