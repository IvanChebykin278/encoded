import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { decryptMessage } from "../actions/encodedAction";

import "@ui5/webcomponents/dist/List";
import "@ui5/webcomponents/dist/StandardListItem";
import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
import "@ui5/webcomponents/dist/Title";

class Decryption extends Component {

    constructor(props) {
        super(props);

        this.decryptButton = React.createRef();
        this.messageInput = React.createRef();

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = {
            message: null,
            alphabet: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
            decryptionMessages: []
        };
    }

    onClick(event) {
        this.props.decryptMessage(this.state.message.toUpperCase(), this.state.alphabet);
        var aMessages = this.props.decryptionMessages;
        this.setState({
            ...this.state,
            decryptionMessages: aMessages
        });
    }

    onChange(event) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    componentDidMount() {
        this.decryptButton.current.addEventListener('click', event => {
            this.onClick(event);
        });

        this.messageInput.current.addEventListener('change', event => {
            this.onChange(event);
        })
    }

    render() {

        const listItems = this.state.decryptionMessages.map(message => (
            <ui5-li>{message}</ui5-li>
        ));

        return (
            <div id='decrypt' className='content'>
                <ui5-title level="H1">Message decryption</ui5-title>
                <div className="container">
                    <ui5-label>Message:</ui5-label>
                    <ui5-input ref={this.messageInput} name="message" placeholder="Enter source message"></ui5-input>
                </div>
                <div className="container">
                    <ui5-button ref={this.decryptButton} design="Default">Decrypt</ui5-button><br /> 
                </div>
                <div className="container">
                    <ui5-list
                        no-data-text="Your decrypted messages will be here..."
                        header-text="Decrypted message" 
                        separators="None">
                        {listItems}
                    </ui5-list>
                </div>
            </div>
        )
    }
}

Decryption.propTypes = {
    decryptMessage: PropTypes.func.isRequired,
    decryptionMessages: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    decryptionMessages: state.encoded.messages
});

export default connect(mapStateToProps, { decryptMessage })(Decryption);
