import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <ul>
            <li>
                <Link to={"/welcome"}>
                   Welcome
                </Link>
            </li>
            <li>
                <Link to={"/product"}>
                   Product
                </Link>
            </li>
        </ul>
    </div>
  )
}
