import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ItineraryItem from './ItineraryItem'
import { GET_TOTALS, clearItinerary, getTotals, resetItinerary } from '../utils/redux/actions'

export const ItineraryContainer = ({itinerary = [],total,clear,reset,totals}) => {
  useEffect(()=>{
    totals();
  })

  return (
    <>
      {itinerary.length === 0 ? (
        <>
          <p className='empty'>
            Trip empty
          </p>
          <button className='btn reset' onClick={() => reset()}>
            Reset Trip
          </button>
        </>
      ) : (
        <div className='itinerary-container'>
          {itinerary.map(location => {
            return <ItineraryItem key={location.id} {...location} />;
          })}
          <hr/>
          <p className='total'>
            {`Total Price: $${total}`}
          </p>
          <div className='btn-container'>
            <button className='btn clear' onClick={() => clear()}>
              Clear Locations
            </button>
            <button className='btn reset' onClick={() => reset()}>
              Reset Trip
            </button>
          </div>
        </div>
      )}
    </>
  )
}

// export default ItineraryContainer

const mapStateToProps = (state) => ({
  itinerary: state.itinerary,
  total: state.total,
})

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    clear: () => dispatch(clearItinerary()),
    reset: () => dispatch(resetItinerary()),
    totals: () => dispatch(getTotals()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItineraryContainer)