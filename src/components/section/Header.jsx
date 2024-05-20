import React from 'react'

import { headerMenus, searchKeyword, snsLink } from "../../data/header"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href="/">
                    <span>국내 밴드 플레이 리스트<br /><i>Youtube</i></span>
                </a>
            </h1>
            <nav className='header__menu'>
                <ul className='menu'>
                    {headerMenus.map((menu, key) => (
                        <li key={key}>
                            <Link to={menu.src}>
                                {menu.icon}<span>{menu.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className='keyword'>
                    {searchKeyword.map((keyword, key) => (
                        <li key={key}>
                            <Link to={keyword.src}>
                                {keyword.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='header__sns'>
                <ul>
                    {snsLink.map((sns, key) => (
                        <li key={key}>
                            <a href={sns.url} target="_blank" rel="noopener noreferrer" aria-label={sns.title}>
                                <span>{sns.icon}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Header