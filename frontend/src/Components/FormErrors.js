/**
 * This class is a React Component representing form input errors that will be used across the register and login pages.
 */
import React from 'react'
import { Col } from 'reactstrap'

class FormErrors extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <Col className="error">
                {this.props.errorMessage}
            </Col>
        )
    }
}

export default FormErrors;