import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { useFormik } from 'formik';
import { Button, Modal, Form, Col, Card } from 'react-bootstrap';

// Actions
import { setDate, nextStep } from "../../../store/reservation/actions";

import StepsFooter from "./StepsFooter";


function Dates (props) {

    const { checkin, checkout } = props.dates;

    const formik = useFormik({
        initialValues: {
            checkin: checkin,
            checkout: checkout
        },
        onSubmit: (values) => {
            let errors = [];

            Object.entries(values).map(x => {
               if(x[1] === ''){
                   errors.push(x[0])
               }
            });

            if(errors.length > 0){
                alert(`Bu alanlar zorunludur. ${errors.join()}`)
            } else {
                props.onSetDate(values);
                props.onNextStep();
            }
        },
    });

    return(
        <Card>

            <Card.Header>
                Tarih Seçimi:
            </Card.Header>
            <Form onSubmit={formik.handleSubmit}>
                <Card.Body>
                    <Form.Row>
                        <Col>
                            <Form.Label>Check-in</Form.Label>
                            <Form.Control type="date" id="checkin" size="lg" name="checkin" placeholder="Check-in Date" value={formik.values.checkin} onChange={formik.handleChange} />
                        </Col>
                        <Col>
                            <Form.Label>Check-out</Form.Label>
                            <Form.Control type="date" id="checkout" size="lg" name="checkout" placeholder="Check-out Date" value={formik.values.checkout} onChange={formik.handleChange} />
                        </Col>
                    </Form.Row>

                </Card.Body>
                <StepsFooter />
            </Form>
        </Card>
    )
}

const mapStateToProps = state => ({
    dates: state.reservation.date
});

const mapDispatchToProps = (dispatch) => ({
    onSetDate: data => dispatch(setDate(data)),
    onNextStep: () => dispatch(nextStep())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dates);
