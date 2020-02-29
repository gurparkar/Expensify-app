import React from 'react'
import moment from 'moment'
//import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import numeral from 'numeral'
export const ExpenseListItems = ({ id,description, amount, createdAt}) => {
    
    return(
    <div>
    <Link to = {`/edit/${id}`}>
        <h3>{description}</h3>
        
    </Link>
    
    <p>{ numeral(amount).format('$0,0.00') }
     - 
     { moment(createdAt).format('MMMM Do YYYY') }</p>


    </div>
    )
}

// const mapStateToProps = (state) => {
//       return {
//              expenses: state.expenses
//       }
// }



export default ExpenseListItems