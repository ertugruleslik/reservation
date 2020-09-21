import React from 'react';
import { connect } from 'react-redux';

import { CardGroup, Card } from 'react-bootstrap';

function StepsHeader(props) {

    return (
        <CardGroup className="summary">
            <Card>
                <Card.Body>
                    <div className="summary-line"><strong>Check-in: </strong> {props.dates.checkin}</div>
                    <div className="summary-line"><strong>Check-out: </strong> {props.dates.checkout}</div>
                </Card.Body>
            </Card>
            {props.step === 2 &&
                <Card>
                    <Card.Body>
                        <div className="summary-line"><strong>Oda Tipi: </strong> {props.room.type}</div>
                        <div className="summary-line"><strong>Manzara: </strong> {props.room.view}</div>
                    </Card.Body>
                </Card>
            }
        </CardGroup>
    )
}

const mapStateToProps = state => ({
    dates: state.reservation.date,
    room: state.reservation.room,
    step: state.reservation.step
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(StepsHeader);
