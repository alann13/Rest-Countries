import React from 'react'
import { Link } from 'react-router-dom'

const Nav: React.FC = () => {
  return (
    <nav>
      <Link to="/">Where in the world?</Link>
      <button>dark mode</button>
    </nav>
  )
}

export default Nav
