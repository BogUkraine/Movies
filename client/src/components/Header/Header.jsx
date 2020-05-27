import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const inputRef = React.createRef();
    const handleIconClick = () => {
        inputRef.current.focus();
    };

    document.addEventListener('keypress', (event) => {
        if(event.target === inputRef.current && event.key === 'Enter') {
            inputRef.current.blur();
        }
    })

    return (
        <div className="header">
            <div className="logo">MovieWatcher</div>
            <nav className="header__nav">
                <NavLink to="/" className="header__link">Home</NavLink>
                <NavLink to="/upload" className="header__link">Upload</NavLink>
            </nav>
            <div className="header__search">
                <input type="text"
                    name="search"
                    className="header__field"
                    placeholder="find by movie title or actor name"
                    ref={inputRef}/>
                <i className="fas fa-search" onClick={handleIconClick}></i>
            </div>
        </div>
    )
}

export default Header;