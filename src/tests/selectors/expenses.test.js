import selectExpenses from '../../selectors/expenses'
import moment from 'moment'

const expenses = [{
      id: '1',
      description: 'Gum',
      note: '',
      amount: 195,
      createdAt: moment(0).valueOf() // we are saving the createdAt time using unixTimestamp and then again
                                     //converting the unixtimestamp into moment in selectors folders for filtering and sorting with startDate and endDate
}, {
    id: '2 ',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

test('Should filter by text value', () => {
      const filters = {
            text: 'e',
            sortBy: 'date',
            startDate: undefined,
            endDate: undefined
      }
      const result = selectExpenses(expenses, filters)
      expect(result).toEqual([ expenses[2], expenses[1]])
       
})

test('Should filter by text startDate value', () => {
    const filters1 = {
          text: '',
          sortBy: 'date',
          startDate: moment(0),
          endDate: undefined
    }
    const result = selectExpenses(expenses, filters1)
    
    expect(result).toEqual([ expenses[2],expenses[0]])
     
})

test('Should filter by text endDate value', () => {
    const filters1 = {
          text: '',
          sortBy: 'date',
          startDate: moment(0),
          endDate: moment(0).add(4, 'days')
    }
    const result = selectExpenses(expenses, filters1)
    
    expect(result).toEqual([expenses[2], expenses[0]])
     
})

test('Should sortBy Date value', () => {
    const filters1 = {
          text: '',
          sortBy: 'date',
          startDate: moment(0),
          endDate: moment(0).add(4, 'days')
    }
    const result = selectExpenses(expenses, filters1)
    
    expect(result).toEqual([expenses[2], expenses[0]])
     
})


test('Should sortBy amount value', () => {
    const filters1 = {
          text: '',
          sortBy: 'amount',
          startDate: moment(0),
          endDate: moment(0).add(4, 'days')
    }
    const result = selectExpenses(expenses, filters1)
    
    expect(result).toEqual([expenses[2], expenses[0]])
     
})