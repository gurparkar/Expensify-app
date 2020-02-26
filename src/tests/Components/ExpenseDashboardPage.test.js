import React from 'react'
import {expenses} from '../../../expected'

import { shallow } from 'enzyme'
import  ExpenseDashboardPage  from '../../Components/ExpenseDashboardPage'



test("Testing the ExpenseList Component using Jest and Enzyme", () =>{
    const wrapper =  shallow(<ExpenseDashboardPage />)
    
    expect(wrapper).toMatchSnapshot()

})

