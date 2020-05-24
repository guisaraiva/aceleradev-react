import React from 'react';

import './Topbar.scss';

import { ReactComponent as LogoSvg} from '../assets/img/logo.svg'
class Topbar extends React.Component {
	render() {
		return (
			<header className = "topbar" data-testid = 'topbar'>
				<div className = "container">
					<a href="/" className="topbar__logo">
						<LogoSvg alt ="Logo do instagran" />
					</a>
				</div>
			</header>
		);
	}
}

export default Topbar;
