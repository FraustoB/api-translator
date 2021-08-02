import React, { useState } from 'react';
import Form from './form.js';
import axios from 'axios';
import './translator.home.css'

const initState={
    userText: '',
    langSlct: '',
    returnText: '',
    hasMsg: false
}

export default function TranslatorHome() {
    const [apiInfo, setApiInfo]=useState(initState);

    const contactApi=() => {
        axios.get(`https://api.funtranslations.com/translate/${apiInfo.langSlct}.json?text=${apiInfo.userText}`).then(
            (response) => {
                setApiInfo({ ...apiInfo, returnText: response.data.contents.translated, hasMsg: true });
                console.log(response);
                // setApiInfo({...apiInfo, hasMsg: true})
            }
        ).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                setApiInfo({ returnText: 'Hmmm... No longer can translate that. Try another Language' })
            }
        })
    }

    return (
        <div className='translator-home'>
            <h1 className='translator-title'> Api-Translator

            </h1>

            <Form
                contactApi={contactApi}
                apiInfo={apiInfo} setApiInfo={setApiInfo}
            />
            <div className={apiInfo.hasMsg===false? 'opacity':'translator-heading'}>
                <h2>{apiInfo.langSlct} Translation</h2>
                {apiInfo.returnText===''? null:<div className='translator-response'>{apiInfo.returnText}</div>}
            </div>

        </div >
    )
}




// THANKS FOR TAKING A LOOK AT MY CODE :D FIND ALL MY PROJECTS AT FRAUSTO.DEV