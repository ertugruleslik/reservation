import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Button, Card, Col } from 'react-bootstrap';

// Actions
import { prevStep } from "../../../store/reservation/actions";

function Steps(props) {

    const stepList = ["Tarih", "Oda", "Ödeme"];

    const step = props.step;
    const allSteps = stepList.map((item,i) => {

        console.log(props)

        let stepClass = '';

        if(step > i) {
            stepClass = 'completed';
        } else if(step === i) {
            stepClass = 'active';
        }

        return (
            <li key={i} className={stepClass}>
                <div className="steps-number"><span>{i+1}</span></div>
                <span className="steps-name">{item}</span>
            </li>
        )
    });

    return (
        <div className="steps">
            <ul className="steps-list">
                {allSteps}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    step: state.reservation.step
});

const mapDispatchToProps = (dispatch) => ({
    onPrevStep: () => dispatch(prevStep())
});

export default connect(mapStateToProps, mapDispatchToProps)(Steps);
