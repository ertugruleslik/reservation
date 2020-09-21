import React from 'react';
import { connect } from 'react-redux';

import { useFormik } from 'formik';
import { Form, Col, Card } from 'react-bootstrap';

// Actions
import { setRoom, nextStep } from "../../../store/reservation/actions";

import StepsFooter from "./StepsFooter";

function Room (props) {

    const { type, view } = props.room;

    const formik = useFormik({
        initialValues: {
            type: type,
            view: view
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
                props.onSetRoom(values);
                props.onNextStep();
            }
        },
    });

    return(
        <Card>
            <Card.Header>
                Oda:
            </Card.Header>
            <Form onSubmit={formik.handleSubmit}>
                <Card.Body>
                    <Form.Row className="mb-4">
                        <Col>
                            <Form.Label><strong>Oda Tipi</strong></Form.Label>
                            <div onChange={formik.handleChange}>
                                <Form.Check inline type='radio' id='Standart' >
                                    <Form.Check.Input type='radio' value="Standart" name='type' defaultChecked={formik.values.type === 'Standart'} />
                                    <Form.Check.Label>Standart</Form.Check.Label>
                                </Form.Check>
                                <Form.Check inline type='radio' id='Deluxe'>
                                    <Form.Check.Input type='radio' value="Deluxe" name='type' defaultChecked={formik.values.type === 'Deluxe'} />
                                    <Form.Check.Label>Deluxe</Form.Check.Label>
                                </Form.Check>
                                <Form.Check inline type='radio' id='Suit'>
                                    <Form.Check.Input type='radio' value="Suit" name='type' defaultChecked={formik.values.type === 'Suit'} />
                                    <Form.Check.Label>Suit</Form.Check.Label>
                                </Form.Check>
                            </div>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Label><strong>Manzara</strong></Form.Label>
                            <div onChange={formik.handleChange}>
                                <Form.Check inline type='radio' id='Kara' >
                                    <Form.Check.Input type='radio' value="Kara" name='view' defaultChecked={formik.values.view === 'Kara'} />
                                    <Form.Check.Label>Kara</Form.Check.Label>
                                </Form.Check>
                                <Form.Check inline type='radio' id='Deniz'>
                                    <Form.Check.Input type='radio' value="Deniz" name='view' defaultChecked={formik.values.view === 'Deniz'} />
                                    <Form.Check.Label>Deniz</Form.Check.Label>
                                </Form.Check>
                            </div>
                        </Col>
                    </Form.Row>
                </Card.Body>
                <StepsFooter />
            </Form>
        </Card>
    )
}

const mapStateToProps = state => ({
    room: state.reservation.room
});

const mapDispatchToProps = (dispatch) => ({
    onSetRoom: data => dispatch(setRoom(data)),
    onNextStep: () => dispatch(nextStep())
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
