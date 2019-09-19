import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import Navbar from "../components/navbar";
import Encryption from "../components/encryption";
import Decryption from "../components/decryption";

class MainPage extends Component {
    render() {

        const encrypt = (this.props.rendering.encryptPage.enable) ? ((<Encryption />)) : (null);
        const decrypt = (this.props.rendering.decryptPage.enable) ? ((<Decryption />)) : (null);

        return (
            <div>
                <Navbar />
                {encrypt}
                {decrypt}
            </div>
        )
    }
}

MainPage.propTypes = {
    rendering: PropTypes.object
}

const mapStateToProps = state => ({
    rendering: state.render.pages
});

export default connect(mapStateToProps, null)(MainPage);
