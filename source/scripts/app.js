import React from 'react';
import { connect } from 'react-redux';

const css = require('../styles/app.scss');

import Steps from './components/steps';
import StepsHeader from './components/StepsHeader';
import Dates from './components/dates';
import Room from './components/room';
import Payment from './components/payment';

function App(props) {

	const { step } = props;

	return(
		<div className="wrapper">
			<Steps />
			{props.step > 0 && <StepsHeader />}
			{
				{
					0 : <Dates />,
					1 : <Room />,
					2 : <Payment />
				}[step]
			}

		</div>
	)
}

const mapStateToProps = state => ({
	step: state.reservation.step
});

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
