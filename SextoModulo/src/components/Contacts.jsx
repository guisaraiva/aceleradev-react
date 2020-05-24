import React from "react";
import Contact from "./Contact"
export default class Contacts extends React.Component {
	render() {
		const contacts = this.props.contacts ? this.props.contacts : []; 
		return (
			<div data-testid="contacts" className="container">
				<section data-testid="contact" className="contacts">
			  	<article className="contact">
          	<span className="contact__avatar" />
          	<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
					</article>
					{contacts.map(item => <Contact data={item} key={item.id}/>)}
      	</section>
			</div>
		);
	}
}