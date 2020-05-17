import React from 'react';

import './Filters.scss';
class Filters extends React.Component {
	render() {
		return (
			<div className ="container" data-testid = 'filters'>
				<section className = "filters">
					<div className = "filters__search">
						<input type="text" className="filters__search__input" placeholder = "Pesquisar"/>
						<button className="filters__search__icon">
							<i className = "fa fa-search"></i>
						</button>
					</div>
					<button className = "filters__item" is-selected>
						Nome <i className = "fas fa-sort-down"></i>
					</button>
					<button className = "filters__item">
						Páis <i className = "fas fa-sort-down"></i>
					</button>
					<button className = "filters__item">
						Empresa <i className = "fas fa-sort-down"></i>
					</button>
					<button className = "filters__item">
						Departamento <i className = "fas fa-sort-down"></i>
					</button>
					<button className = "filters__item">
						Data de admissão <i className = "fas fa-sort-down"></i>
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;
