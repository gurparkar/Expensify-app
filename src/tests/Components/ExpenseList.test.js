import React from 'react'
import {expenses} from '../../../expected'

import { shallow } from 'enzyme'
import { ExpenseList } from '../../Components/ExpenseList'



test("Testing the ExpenseList Component using Jest and Enzyme", () =>{
    const wrapper =  shallow(<ExpenseList expenses = {expenses} />)
    
    expect(wrapper).toMatchSnapshot()

})

test("Testing the ExpenseList Component with no values using Jest and Enzyme", () =>{
    const wrapper = shallow(<ExpenseList expenses = {[]} />)
    
    expect(wrapper).toMatchSnapshot()

})