import '../../reset/reset.css';
import '../../css/style.css';

import React from 'react'
const Header = () => {
	return (
		<header className="header">
			<ul className="header__titulo">
				<li className="header__titulo--item">Blog Minimalista</li>
			</ul>
			<div className="header__search">
				<input className="header__search--bar" placeholder="Pesquisar no blog" type="search" />
			</div>
		</header>
	)
}

export default Header
