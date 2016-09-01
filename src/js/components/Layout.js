import React from "react";
import Footer from "./Footer.js";
import Header from "./Header";

export default class Layout extends React.Component {

	constructor(){
		super();
		this.state = {
			title: "Title Using This.State"
		}
	}

	render() {
		let title = "Title Using Props";
		setTimeout(() => {
			this.setState({title:'Times up :0'});
		},3000);
		return (
			<div>

				<Header title={this.state.title}/>
				<Header />
				<Header title={title}/>
				<Footer />
			</div>
		);
	}
}
