import React from 'react'
import { connect } from 'react-redux'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate,sortByAmount, setStartDate, setEndDate } from '../actions/filters'

class ExpenseListFilters extends React.Component {
      
      state = {
            focusedInput: null
      }

      onDatesChange = ({startDate, endDate}) => {
            this.props.dispatch(setStartDate(startDate))
            this.props.dispatch(setEndDate(endDate))
      }



      render (){
            return (
                  <div>
                   <input type = "text"   value ={this.props.filters.text} onChange = { (e) => {
                           props.dispatch(setTextFilter(e.target.value))
                           
                   }} />
                   <select value = {this.props.filters.sortBy} onChange = {(e) =>{
                       if(e.target.value == 'date') {
                             this.props.dispatch(sortByDate())
           
                       } else if (e.target.value == 'amount'){
                           this.props.dispatch(sortByAmount())
                       }
                   }
                          
                   }>
                          <option value = 'date'>Date</option>
                          <option value = 'amount'>Amount</option>
                   </select>
                   
                   <DateRangePicker  
                     startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                     startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                     endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                     endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                     onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                     showClearDates = {true}
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                    numberOfMonths = {1}
                    isOutsideRange = {() => false }
              / >


           
                   </div>
               )
      }

}



const mapStateToProps = (state) => {
      return {
            filters: state.filters
      }
}

export default connect(mapStateToProps)(ExpenseListFilters)