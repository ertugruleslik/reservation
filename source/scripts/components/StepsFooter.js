import React from 'react';
import { connect } from 'react-redux';

import { Button, Card, Col } from 'react-bootstrap';

// Actions
import { prevStep } from "../../../store/reservation/actions";

function StepsFooter(props) {

    return (
        <Card.Footer className="d-flex">
            <Col className="p-0">
                {props.step !== 0 && <Button variant="secondary" onClick={() => props.onPrevStep()}>Geri</Button> }
            </Col>
            <Col className="d-flex justify-content-end p-0">
                <Button type="submit" variant="primary">{props.step === 2 ? 'Ödeme Yap' : 'İleri'}</Button>
            </Col>
        </Card.Footer>
    )
}

const mapStateToProps = state => ({
    step: state.reservation.step
});

const mapDispatchToProps = (dispatch) => ({
    onPrevStep: () => dispatch(prevStep())
});

export default connect(mapStateToProps, mapDispatchToProps)(StepsFooter);
