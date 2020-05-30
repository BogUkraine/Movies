import React, { useRef, useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Header = (props) => {
    const [redirect, setRedirect] = useState(false);
    const [eventListener, setEventListener] = useState(true);
    const inputRef = useRef();
    const dispatch = useDispatch();

    const handleIconClick = (event) => {
        inputRef.current.focus();
    };

    const searchByEnter = (event) => {
        if(event.target === inputRef.current && event.key === 'Enter') {
            inputRef.current.blur();
            dispatch({
                type: 'FETCH_SEARCHED_MOVIES',
                payload: inputRef.current.value
            });
            setRedirect(true);
            setRedirect(false);
        }

        return () => {
            window.removeEventListener('keyup', searchByEnter);
            setEventListener((prev) => !prev);
        }
    }

    useEffect(() => {
        window.addEventListener('keyup', searchByEnter);
    }, [eventListener])

    return (
        <>
            {redirect ? <Redirect to="/search" /> : null}
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
        </>
    )
}

export default Header;