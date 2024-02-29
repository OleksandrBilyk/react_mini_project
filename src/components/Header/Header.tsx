import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'home'}>The MovieDB</NavLink>
            <NavLink to={'movie_list'}>Movies</NavLink>
            <NavLink to={'genre'}>Genres</NavLink>
            <NavLink to={'search'}>Search</NavLink>
        </div>
    );
};

export {Header};