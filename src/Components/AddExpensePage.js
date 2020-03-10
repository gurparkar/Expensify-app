import React from 'react'
import ExpenseForm from './ExpenseForm'

import { connect } from 'react-redux'
import { startAddExpense} from '../actions/expenses'

export class AddExpensePage extends React.Component {
      onSubmit =  (expense) => {
             
        this.props.onSubmit(expense)
        this.props.history.push('/')
    }

    render () {
            return (
                <div>
                <p> Add Expense</p>
                 <ExpenseForm 
                   onSubmit = {this.onSubmit}
                 />
             </div>
            )

    }
     
}


const mapDispatchToProps = (dispatch) => {
      return {
          onSubmit: (expense) => dispatch(startAddExpense(expense))
      }
}

export default connect(undefined, mapDispatchToProps )(AddExpensePage)

// const AddExpensePage = (props) => (
//     <div>
//        <p> Add Expense</p>
//         <ExpenseForm 
//          onSubmit = { (expense) => {
//              console.log(expense)
//              props.dispatch(addExpense(expense))
//              props.history.push('/')
//          }}
//         />
//     </div>
// )



