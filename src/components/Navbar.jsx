import React from 'react'
import { connect } from 'react-redux'

export const Navbar = () => {
  const number = 7
  return (
    <div className='navbar'>
      <h1 className='logo'>
        Fantasy Trip Planner
      </h1>
    </div>
  )
}

export default Navbar

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(Navbar)