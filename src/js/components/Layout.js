import React from "react";
import Footer from "./Footer.js";
import Header from "./Header";

export default class Layout extends React.Component {

	constructor(){
		super();
		this.state = {
			title:"Welcome Josh"
		}
	}


	changeTitle(title){
		this.setState({title});
	}

	render() {
		return (
			<div>

				<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>

				<Footer />
			</div>
		);
	}
}
