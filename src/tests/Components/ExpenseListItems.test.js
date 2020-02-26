import React from 'react'
import {expenses} from '../../../expected'

import { shallow } from 'enzyme'
import { ExpenseListItems } from '../../Components/ExpenseListItems'



test("Testing the ExpenseListItems Component using Jest and Enzyme", () =>{
    const wrapper =  shallow(<ExpenseListItems {...expenses[0] } />)
    
    expect(wrapper).toMatchSnapshot()

})
