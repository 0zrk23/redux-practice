import React from 'react'
import { connect } from 'react-redux'
import { removeLocation, toggleDays } from '../utils/redux/actions'

export const ItineraryItem = ({locationName, description, img, price, days, remove, toggle}) => {
  // console.log(img)
  return (
    <div className='itinerary-item'>
      <div className='img-container'>
        <img src={img} alt={locationName} />
      </div>
      <div className='detail-container'>
        <h3 className='location-name'>
          {locationName}
        </h3>
        <p className='description'>
          {description}
        </p>
        <p className='price'>
          {`$${price} per day`}
        </p>
        <button className='remove' onClick={() => remove()}>
          Remove
        </button>
      </div>
      <p className='day-description'>
        Days at Location:
      </p>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => toggle('inc')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="days">{days}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => days === 1 ? remove() : toggle('dec')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

// export default ItineraryItem

// const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id,amount} = ownProps;

  return {
    remove: () => dispatch(removeLocation(id)),
    toggle: (toggle) => dispatch(toggleDays(id,toggle))
  }
}

export default connect(null, mapDispatchToProps)(ItineraryItem)