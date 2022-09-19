import React from 'react';

function contact(props) {
    console.log(props);
    
    return (
        <div>
            <h1>{props.data.quotes[0].text}</h1>
        </div>
    );
}

export default contact;

export async function getStaticProps(){

    const quote = await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
    const data = await quote.json()

    return {
        props: {
            data
        },
        revalidate: 20
    }
}

// https://goquotes-api.herokuapp.com/api/v1/random?count=1