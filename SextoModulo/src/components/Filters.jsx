import React from 'react';
class Filters extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			searchString: "",
			isAsc: false,
			type: "",
			event: null,
			applyFilter: null
		}
		this.handleChange = this.handleChange.bind(this);
		this.updateStateAndSetFilter = this.updateStateAndSetFilter.bind(this);
		this.setFilter = this.setFilter.bind(this);
	}
	handleIconAscOrDesc(icon, isAlpha, isAsc){
		if (isAsc){
			if (isAlpha){
				icon.classList.add("fa-sort-alpha-up");
				icon.classList.remove("fa-sort-alpha-down");
			} else {
				icon.classList.add("fa-sort-numeric-up")
				icon.classList.remove("fa-sort-numeric-down")
			}
		} else {
			if (isAlpha) {
				icon.classList.remove("fa-sort-alpha-up")
				icon.classList.add("fa-sort-alpha-down")
			} else {
				icon.classList.remove("fa-sort-numeric-up")
				icon.classList.add("fa-sort-numeric-down")
			}
		}
	}
	setFilter(){
		if (this.state.type === 'name_search'){
			this.props.performSearch(this.state.searchString)
		} else {
			this.state.applyFilter(this.state.type, this.state.isAsc)
			const selectedButton = document.querySelector(".is-selected")
			if (selectedButton && selectedButton.classList){
				selectedButton.classList.remove("is-selected")
			}
			if (this.state.event.tagName !== "I" && this.state.event.tagName !== "INPUT"){
				this.state.event.classList.add('is-selected');
				let icon = this.state.event.childNodes[1]
				this.handleIconAscOrDesc(icon, this.state.type !== "admissionDate", this.state.isAsc)
			} else if (this.state.event.tagName !== 'INPUT') {
				this.state.event.parentNode.classList.add('is-selected')
				this.handleIconAscOrDesc(this.state.event, this.state.type !== "admissionDate", this.state.isAsc)
			}
		}
	}
	updateStateAndSetFilter(e, type, applyFilter) {
		if (this.state.type === "" || this.state.type !== type){
			this.setState({isAsc: false, type, event: e.target, applyFilter: applyFilter}, () => this.setFilter())
		} else {
			this.setState({isAsc: !this.state.isAsc, type, event: e.target, applyFilter: applyFilter}, () => this.setFilter())
		}
	}
	handleChange = (e) => {
		this.setState({searchString: e.target.value})
	}
	handleKeyDown = (e) => {
		if (e.key === 'Enter'){
			this.props.performSearch(e.target.value)
		}
	}
	render() {
		const { filter } = this.props;
		return (
			<div className="container" data-testid="filters">
				<section className="filters">
					<div className="filters__search">
						<input type="text" className="filters__search__input" placeholder="Pesquisar" onKeyDown={this.handleKeyDown} onChange={this.handleChange}/>
						<button className="filters__search__icon" onClick={(e) => this.updateStateAndSetFilter(e, "name_search", filter)}>
							<i className="fa fa-search"/>
						</button>
					</div>
					<button className="filters__item" onClick={(e) => this.updateStateAndSetFilter(e, "name", filter)}>
						Nome <i className="fas fa-sort-alpha-down" />
					</button>
					<button className="filters__item" onClick={(e) => this.updateStateAndSetFilter(e, "country", filter)}> 
						País <i className="fas fa-sort-alpha-down"/>
					</button>
					<button className="filters__item" onClick={(e) => this.updateStateAndSetFilter(e, "company", filter)}>
						Empresa <i className="fas fa-sort-alpha-down" />
					</button>
					<button className="filters__item"onClick={(e) => this.updateStateAndSetFilter(e, "department", filter)}>
						Departamento <i className="fas fa-sort-alpha-down" />
					</button>
					<button className="filters__item" onClick={e => this.updateStateAndSetFilter(e, "admissionDate", filter)}>
						Data de admissão <i className="fas fa-sort-numeric-down" />
					</button>
				</section>
			</div>
	  );
	}
}
export default Filters;