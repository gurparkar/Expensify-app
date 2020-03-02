import React from 'react'
import  ExpenseList from './ExpenseList'

import ExpenseListFilters from './ExpenseListFilters'
import ExpenseSummary from './ExpensesSummary'
const ExpenseDashboardPage = () => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilters />
        This is from my dashboard component
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage