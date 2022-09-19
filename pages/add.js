import React,{useState,useEffect,useRef} from 'react';

function Add(props) {

    const enWord = useRef();
    const frWord = useRef();

    const handleSubmit = e => {
        e.preventDefault()

        const newWord = {
            en: enWord.current.value,
            fr: frWord.current.value,
        }

        fetch('api/vocapi', {
            method: "POST",
            body: JSON.stringify(newWord),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })

        enWord.current.value = "";
        frWord.current.value = "";
    }

    return (
        <div className='container p-4'>

            <form onSubmit={handleSubmit}>
                <label htmlFor="addEn">Ajouter un mot en anglais</label>
                <input type="text" className='form-control' id="addEn" ref={enWord}/>

                <label htmlFor="addFr">Ajouter un mot en français</label>
                <input type="text" className='form-control' id="addFr" ref={frWord}/>

                <button className='btn btn-primary mt-4'>Ajouter</button>
            </form>
            
        </div>
    );
}

export default add;