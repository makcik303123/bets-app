import React from "react";

function Link({ setActiveLink, indexLink, name, activeLink }) {
	return (
		<li className="nav__item" onClick={() => setActiveLink(indexLink)}>
			<a href="#" className={indexLink === activeLink ? "active link" : "link"}>
				{name}
			</a>
		</li>
	);
}

export default Link;
