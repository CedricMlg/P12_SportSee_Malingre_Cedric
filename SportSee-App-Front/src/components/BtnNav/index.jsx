import React from 'react'

function BtnNav(props) {
    const svg = props.props
  return (
    <button className='nav-button'><img src={svg} /></button>
  )
}

export default BtnNav
