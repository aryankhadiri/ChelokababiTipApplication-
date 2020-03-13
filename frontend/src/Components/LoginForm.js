/**
 * This class is a React Component representing the Homepage/Landing Page's Login form.
 */
import React from 'react';
import formErrors from './FormErrors';
// reactstrap and other styling imports
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPaperPlane as farPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';
import '../Stylesheets/loginForm.css';
import FormErrors from './FormErrors';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email   : '',
            password: '',
            formErrors: {
                email: '',
                password: ''
            },
            formValidities: {
                emailIsValid: false,
                passwordIsValid: false,
                formIsValid: false
            }
        }

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    /**
     * Handles changes to the email and password input fields.
     */
    handleUserInput(e) {
        const name  = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        },this.validateField(name,value));
    }

    /**
     * A function that provides client-side form validation.
     */
    validateField(name,value) {
        let formValidities  = this.state.formValidities;

        switch (name)
        {
            case "email": 
                formValidities.emailIsValid = this.validateEmail(value);
                break;
            case "password": 
                formValidities.passwordIsValid = this.validatePassword(value);
                formErrors.password = formValidities.passwordIsValid ? "" : "Password provided is not valid."
                break;
            // no default case needed, already exhaustive.
        }

        this.setState({
            formValidities: formValidities
        }, this.validateForm)
    }

    /**
     * Auxiliary form validation function that matches the provided email against set criteria.
     * 
     * Criteria: must be a valid email address with only the following characters: a-z, A-Z. 0-9, @, ., _. and -
     * 
     */
    validateEmail(email) {
        let formErrors  = this.state.formErrors;

        if (!((email.indexOf(".") > 0) && (email.indexOf("@") > 0)) || /[^a-zA-Z0-9@._-]/.test(email)) {
            formErrors.email = "Email provided is not valid.";

            this.setState({
                formErrors: formErrors
            });

            return false;
        }
        else {
            return true;
        }
    }

    /**
     * Auxiliary form validation function that matches the provided password against set criteria.
     * 
     * Criteria: must be greater than 6 characters in length, and must only contain the following characters: a-z, A-Z, 0-9, !, and ?
     * 
     */
    validatePassword(password) {
        let formErrors = this.state.formErrors;

        if (password.length < 6 || /[^a-zA-Z0-9!?]/.test(password)) {
            formErrors.password = "Password provided is not valid.";

            this.setState({
                formErrors: formErrors
            });

            return false;
        }
        else {
            return true;
        }
    }

    /**
     * Auxiliary form validation function that computes the final validity of the form.
     */
    validateForm() {
        let formValidities = {...this.state.formValidities};
        formValidities.formIsValid = (formValidities.emailIsValid && formValidities.passwordIsValid) ? true : false
        
        this.setState({
            formValidities: formValidities
        })
    }

    render() {
        let errorDescriptions = {
            emailError: '',
            passwordError: ''
        };

        let emailErrorNotice;
        let passwordErrorNotice;

        // going to conditionally return the error descriptors in the case of an invalid form 
        // ** removed them in the render until I can fix their placement and "shoving" of the login/submit button. **
        if (!this.state.formValidities.emailIsValid && this.state.email != "") {
            errorDescriptions.emailError = <FormErrors errorMessage={this.state.formErrors.email} />
            emailErrorNotice = this.state.formErrors.email != '' ? "error-detected" : ""
        }
        if (!this.state.formValidities.passwordIsValid && this.state.password != "") {
            errorDescriptions.passwordError = <FormErrors errorMessage={this.state.formErrors.password} />
            passwordErrorNotice = this.state.formErrors.password != '' ? "error-detected" : ""
        }

        return (
            <Container id="login-wrapper">
                {/* div for the login header */}
                <Row className="login-header">
                    <h1>Login</h1>
                </Row>
                {/* div for the login form itself */}
                <Row className="login-form">
                    <form method="post">
                        <fieldset>
                            <Col className="email">
                                <span id="email-icon">
                                    <label htmlFor="email"><FontAwesomeIcon icon={farPaperPlane} size="lg" color="#FFFFFF"/></label>
                                    <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleUserInput} 
                                        className={emailErrorNotice} placeholder="email..." />
                                </span>
                            </Col>
                            <Col className="password">
                                <span id="password-icon">
                                    <label htmlFor="password"><FontAwesomeIcon icon={faFingerprint} size="lg" color="#FFFFFF" /></label>
                                    <input type="password" id="password" name="password" value={this.state.password} 
                                        onChange={this.handleUserInput} className={passwordErrorNotice} placeholder="password..." />
                                </span>
                            </Col>
                            <Row className="submission">
                                <input type="submit" id="submit" disabled={!this.state.formValidities.formIsValid} value="Login"/>
                            </Row>
                        </fieldset>
                    </form>
                </Row>
            </Container>
        )
    }
}

export default LoginForm;
