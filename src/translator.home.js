import React, { useState } from 'react';
import Form from './form.js';
import axios from 'axios';
import './translator.home.css'



export default function TranslatorHome() {
    const [transText, changeTransText]=useState('');
    const [langSelect, changeLangSelect]=useState('');
    const [responseText, changeResponseText]=useState('');
    const [responseAvailable, changeResponseAvailable]=useState(false);
    const contactApi=() => {
        axios.get(`https://api.funtranslations.com/translate/${langSelect}.json?text=${transText}`).then(
            (response) => {
                changeResponseText(response.data.contents.translated);
                console.log(response);
                changeResponseAvailable(true);
            }
        ).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                changeResponseText('Hmmm... No longer can translate that. Try another Language')
            }
        })
    }

    return (
        <div className='translator-home'>
            <h1 className='translator-title'> Simple Translator

            </h1>

            <Form contactApi={contactApi}
                text={transText} changeTransText={changeTransText}
                lang={langSelect} changeLangSelect={changeLangSelect}
            />
            <div className={responseAvailable===false? 'opacity':'translator-heading'}>
                <h2>Heres Your Translated Text</h2>
                {responseText===''? null:<div className='translator-response'>{responseText}</div>}
            </div>

        </div >
    )
}




// THANKS FOR TAKING A LOOK AT MY CODE :D FIND ALL MY PROJECTS AT FRAUSTO.DEV