import React, { Component } from 'react';
import '../css/encryption.css';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { encryptMessage } from "../actions/encodedAction";


import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
import "@ui5/webcomponents/dist/TextArea";
import "@ui5/webcomponents/dist/List";
import "@ui5/webcomponents/dist/StandardListItem";

class Encryption extends Component {

    constructor(props) {
        super(props);

        this.massageInput = React.createRef();
        this.shiftInput = React.createRef();
        this.encryptButton = React.createRef();

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = {
            massage: null,
            shift: null,
            alphabet: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
            encryptionMessage: ''
        }
    }

    onChange(event) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    onClick(event) {
        this.props.encryptMessage(this.state.massage, Number(this.state.shift), this.state.alphabet);
        var sMessage = this.props.encryptionMessage;
        this.setState({
            ...this.state,
            encryptionMessage: sMessage
        });
    }

    componentDidMount() {
        this.massageInput.current.addEventListener('change', event => {
            this.onChange(event);
        });

        this.shiftInput.current.addEventListener('change', event => {
            this.onChange(event);
        });

        this.encryptButton.current.addEventListener('click', event => {
            this.onClick(event);
        });

    }

    render() {

        const listItem = (this.state.encryptionMessage == '') ? (null) : ((<ui5-li icon="sap-icon://accept">{this.state.encryptionMessage}</ui5-li>));

        return (
            <div className='content'>
                <ui5-title level="H1">Message encryption</ui5-title>
                <div className="container">
                    <ui5-label>Message:</ui5-label>
                    <ui5-input
                        required
                        ref={this.massageInput}
                        name="massage" 
                        placeholder="Enter source message"></ui5-input>
                </div>
                <div className="container">
                    <ui5-label>Shift:</ui5-label>
                    <ui5-input
                        required
                        ref={this.shiftInput}
                        name="shift" 
                        placeholder="Enter shift"></ui5-input>
                </div>
                <div className="container">
                    <ui5-button ref={this.encryptButton} design="Default">Encrypt</ui5-button><br /> 
                </div>
                <div className="container">
                    <ui5-list 
                        header-text="Encrypted message" 
                        separators="None"
                        no-data-text="Your encrypted message will be here...">
                        {listItem}
                    </ui5-list>
                </div>
            </div>
        )
    }
}

Encryption.propTypes = {
    encryptMessage: PropTypes.func.isRequired,
    encryptionMessage: PropTypes.string.isRequired,
    enable: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    encryptionMessage: state.encoded.message,
    enable: state.render.pages.encryptPage.enable
});

export default connect(mapStateToProps, { encryptMessage })(Encryption);
