import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Header extends Component {
    state = {  }
    render() { 
        return (
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pizza/">Pizza</Link>
              </li>
              {/* <li>
                <Link to="/users/">Users</Link>
              </li> */}
            </ul>
          </nav>  
        );
    }
}
 
export default Header;