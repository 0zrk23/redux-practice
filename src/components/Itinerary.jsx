import React from 'react'
import { connect } from 'react-redux'

export const Itinerary = () => {
  return (
    <div>Itinerary</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)