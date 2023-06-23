import React from 'react'
import { connect } from 'react-redux'

export const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)