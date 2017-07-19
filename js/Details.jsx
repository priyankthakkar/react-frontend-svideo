// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Spinner from './Spinner';
import { getAPIDetails } from './actionCreators';

class Details extends Component {
	componentDidMount() {
		if (!this.props.rating) {
			this.props.getAPIDData();
		}
	}

	props: {
		show: Show,
		rating: string,
		getAPIDData: Function
	};

	render() {
		const { title, description, year, poster, trailer } = this.props.show;
		let ratingComponent;
		if (this.props.rating) {
			ratingComponent = <h3>{this.props.rating}</h3>;
		} else {
			ratingComponent = <Spinner />;
		}
		return (
			<div className="details">
				<Header />
				<section>
					<h1>{title}</h1>
					<h2>({year})</h2>
					{ratingComponent}
					<img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />
					<p>{description}</p>
				</section>
				<div>
					<iframe
						src={`https://youtube.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
						frameBorder="0"
						allowFullScreen
						title={`Title for ${title}`}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {};
	return {
		rating: apiData.rating
	};
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
	getAPIDData() {
		dispatch(getAPIDetails(ownProps.show.imdbID));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
