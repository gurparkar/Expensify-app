import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItems from './ExpenseListItems'
import SelectExpenses from '../selectors/expenses'


export const ExpenseList = (props) => {
     return (
         <div>
             { props.expenses.length == 0 ? 
                <p>No expenses</p>: 
                props.expenses.map((expense) => {
                    return <ExpenseListItems key = {expense.id} {...expense} />
              })

            }

         </div>
     )
}

const mapStateToProps = (state) => {
    return {
         expenses: SelectExpenses(state.expenses, state.filters),
 
    }
} 

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)

export default ConnectedExpenseList