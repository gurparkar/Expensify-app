import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters'

test("Should setup setTextFilter action function with provided values", () => {
      const action = setTextFilter('amount')
      expect(action).toEqual({
          type: 'SET_TEXT_FILTER',
          text: 'amount'
      })
})

test("Should setup setTextFilter action function with default values", () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test("should setup sortByDate action function with default values", () => {
     const action = sortByDate()
     expect(action).toEqual({
          type: 'SORT_BY_DATE'
     })
})

test("should setup sortByAmount action function with default values", () => {
    const action = sortByAmount()
    expect(action).toEqual({
         type: 'SORT_BY_AMOUNT'
    })
})

test("should setup setStartDate action function with default values", () => {
    const action = setStartDate()
    expect(action).toEqual({
         type: 'SET_START_DATE',
         startDate:undefined
    })
})

test("should setup setEndDate action function with default values", () => {
    const action = setEndDate()
    expect(action).toEqual({
         type: 'SET_END_DATE', 
         endDate:undefined
    })
})