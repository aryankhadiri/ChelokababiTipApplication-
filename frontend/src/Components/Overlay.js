/**
 * This class is a React Component representing the Homepage/Landing Page's "login option" Overlay
 * 
 * INCOMPLETE
 * 
 */
import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import '../Stylesheets/overlay.css';

class Overlay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isActivated: 'true'
        };

        this.handleDeactivation = this.handleDeactivation.bind(this);
    }

    /**
     * Removes the Overlay from the View when the user clicks anywhere on the screen (besides the "option" buttons).
     */
    handleDeactivation() {
        this.setState({isActivated: 'false'});
    }

    render() {
        const isActivated = this.state.isActivated;
        if (isActivated)
        {
            return (
                <Container id="overlay" className="active">
                    <div id="options-wrapper">
                        <Col>
                            <Row>
                                Login
                            </Row>
                            <Row>
                                Register
                            </Row>
                            <Row>
                                Reset Login
                            </Row>
                        </Col>
                    </div>
                </Container>
            )
        }
        else {
            return null;
        }
    }
    
}

export default Overlay;