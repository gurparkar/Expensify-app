import React from 'react'
import  ExpenseList from './ExpenseList'

import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        This is from my dashboard component
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage