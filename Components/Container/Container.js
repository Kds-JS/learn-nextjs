import React from 'react';
import Navbar from '../Navbar/Navbar';

function Container(props) {
    return (
        <>
            <Navbar/>
            {props.children}
        </>
    );
}

export default Container;
