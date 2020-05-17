import React from "react";

import './Contacts.scss';

import Contact from './Contact';
class Contacts extends React.Component {
	render() {
		return (
			<div className = "container" data-testid = 'contacts'>
				<section className = "contacts">
					<Contact/>
				</section>
			</div>
		);
	}
}
export default Contacts;
