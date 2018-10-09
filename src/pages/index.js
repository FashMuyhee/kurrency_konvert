import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Index extends Component {

	render() {


		const year = new Date()

		return (
			<div className="uk-align-center uk-container uk-overflow-hidden">
				<div className="uk-position-center">
					<img src="/favicon.png" className="uk-align-center uk-box-shadow-small" style={{ borderRadius: 35 }}/>
					<h2 className="uk-text-capitalize uk-text-center uk-text-large uk-text-bold" style={{ color:'white',fontSize: '38px'}}>Kurrency Konverter</h2>
					<p className="uk-text-lead uk-text-center" style={{  fontStyle : 'italics' }}>...get world's foreign currencies conversion rates</p>
					<Link className="uk-button uk-button-large uk-border-rounded uk-align-center my-btn uk-width-medium" to="/convert">Get Started</Link>
					
				</div>



				<footer className="uk-text-center uk-position-bottom-center">
					<p>&copy; copyright {year.getFullYear()} Fash Muyhee</p>
				</footer>
			</div >
		)
	}
}

export default Index;