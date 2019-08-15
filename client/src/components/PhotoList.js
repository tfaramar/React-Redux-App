import React from 'react';
import Loader from 'react-loader-spinner';
import {connect} from 'react-redux';

const PhotoList = (props) => {
    return (
        <div className="Container">
            <h1>Life on Mars</h1>
            <p>Visual dispatches from the Curiosity Mars rover.</p>
            <button>
                Get photos
            </button>
            <div className="Loading">
                {props.isLoading ?
                <Loader 
                    type="RevolvingDot"
                    color="#A52A2A"
                    height="100"
                    width="100"
                /> : ''}
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        photos: state.photos
    };
};

export default connect(
    mapStateToProps,
    null
)(PhotoList);