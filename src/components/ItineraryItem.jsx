import React from 'react'
import { connect } from 'react-redux'

export const ItineraryItem = () => {
  return (
    <div>ItineraryItem</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ItineraryItem)