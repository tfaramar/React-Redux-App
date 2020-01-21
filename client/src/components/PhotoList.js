import React from 'react';
import Loader from 'react-loader-spinner';
import {connect} from 'react-redux';

import Photo from './Photo';
import {requestData} from '../actions';

const PhotoList = (props) => {
    return (
        <div className="container">
            <h1>Life on Mars</h1>
            <p>Visual dispatches from the Curiosity Mars rover.</p>
            <button onClick={props.requestData}>
                Get photos
            </button>
            <div className="photo-display">
                {props.isLoading ?
                <Loader 
                    type="RevolvingDot"
                    color="#A52A2A"
                    height="100"
                    width="100"
                /> : ''}
                {props.photos.map(photo => {
                   return <Photo key={photo.id} image={photo.img_src} />
                })}
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        photos: state.photos,
    };
};

export default connect(
    mapStateToProps,
    {requestData}
)(PhotoList);