export const CLEAR_ITINERARY = 'CLEAR_ITINERARY';
export const RESET_ITINERARY = 'RESET_ITINERARY';
export const REMOVE_LOCATION = 'REMOVE_LOCATION';
export const TOGGLE_DAYS = 'TOGGLE_DAYS'
export const GET_TOTALS = 'GET_TOTALS'



export const clearItinerary = () => {
  return {type: CLEAR_ITINERARY}
}

export const resetItinerary = () => {
  return {type: RESET_ITINERARY}
}

export const getTotals = () => {
  return {type: GET_TOTALS}
}

export const removeLocation = (id) => {
  return {
    type: REMOVE_LOCATION,
    payload: {
      id,
    }
  }
}

export const toggleDays = (id,toggle) => {
  return {
    type: TOGGLE_DAYS,
    payload: {
      id,
      toggle,
    }
  }
}