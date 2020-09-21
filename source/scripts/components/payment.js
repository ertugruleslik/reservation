import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { useFormik } from 'formik';
import { Form, Col, Card } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

// Actions
import { setPayment, prevStep } from "../../../store/reservation/actions";

import StepsFooter from "./StepsFooter";
import StepsHeader from "./StepsHeader";


function Payment (props) {

    const [focus, setFocus] = useState();

    const { cardNumber, cardName, expiry, cvc } = props.reservation.payment;

    const formik = useFormik({
        initialValues: {
            cardNumber: cardNumber,
            cardName: cardName,
            expiry: expiry,
            cvc: cvc
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
                alert('Rezervasyonunuz başarı ile tamamlanmıştır.')
                props.onSetPayment(values);

                const summary = {
                    date: props.reservation.date,
                    room: props.reservation.room,
                    payment: values
                }

                console.log(summary)
            }
        },
    });

    return(
        <Card>
            <Card.Header>
                Ödeme:
            </Card.Header>
            <Form onSubmit={formik.handleSubmit}>
                <Card.Body>
                    <div className="credit-card">
                        <Cards
                            cvc={formik.values.cvc}
                            expiry={formik.values.expiry}
                            focused={focus}
                            name={formik.values.cardName}
                            number={formik.values.cardNumber}
                        />
                    </div>
                    <Form.Row className="form-line">
                        <Col>
                        <Form.Label>Kart Numarası</Form.Label>
                        <InputMask mask="9999 9999 9999 9999" value={formik.values.cardNumber} onChange={formik.handleChange} onFocus={(e) => setFocus(e.target.name)}>
                            {(inputProps) => (
                                <Form.Control type="text" id="cardNumber" size="lg" name="cardNumber" />
                            )}
                        </InputMask>
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-line">
                        <Col>
                            <Form.Label>Kart Sahibi</Form.Label>
                            <Form.Control type="text" id="cardName" size="lg" name="cardName" value={formik.values.cardName} onChange={formik.handleChange} onFocus={(e) => setFocus(e.target.name)} />
                        </Col>
                    </Form.Row>

                    <Form.Row className="form-line">
                        <Col>
                            <Form.Label>Son Kullanma Tarihi</Form.Label>
                            <InputMask mask="99/99" value={formik.values.expiry} onChange={formik.handleChange} onFocus={(e) => setFocus(e.target.name)}>
                                {(inputProps) => (
                                    <Form.Control type="text" id="expiry" size="lg" name="expiry"  />
                                )}
                            </InputMask>
                        </Col>
                        <Col>
                            <Form.Label>CVC</Form.Label>
                            <Form.Control type="text" id="cvc" size="lg" name="cvc" value={formik.values.cvc} onChange={formik.handleChange} onFocus={(e) => setFocus(e.target.name)} />
                        </Col>
                    </Form.Row>

                </Card.Body>
                <StepsFooter />
            </Form>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => ({
    onSetPayment: data => dispatch(setPayment(data)),
    onPrevStep: () => dispatch(prevStep())
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
