import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
	return (
    <nav className = "d-flex flex-wrap justify-content-between border-bottom border-success border-5">
      <ul className="d-flex list-unstyled m-2">
        <li><Link className="p-2 fs-5" to="/">Home</Link></li>
        <li><Link className="p-2 fs-5" to="/about">About</Link></li>
        <li><Link className="p-2 fs-5" to="/contact">Contact</Link></li>
        <li><Link className="p-2 fs-5" to="/posts">Posts</Link></li>
        <li><Link className="p-2 fs-5" to="/forum">Forum</Link></li>
      </ul>

      <ul className="d-flex list-unstyled m-2">
        <li><a className="p-2 fs-5" href="/">Login</a></li>
      </ul>

    </nav>
	)
}
