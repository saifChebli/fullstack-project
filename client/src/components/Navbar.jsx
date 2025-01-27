import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between item-center'>
        <div className="logo">
            Acme
        </div>
        <ul className='flex justify-between item-center'>
            <li>Overview</li>
            <li>Members</li>
            <li>Integrations</li>
            <li>Billing</li>
            <li>Setting</li>
        </ul>
    </div>
  )
}

export default Navbar