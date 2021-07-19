import React from 'react';
import './form.css';

export default function Form({ changeLangSelect, changeTransText, contactApi, text }) {

    const handleTransText=(e) => {
        changeTransText(e.target.value);
    };
    const handleSelectChoice=(e) => {
        changeLangSelect(e.target.value);
    }

    const handleSubmit=(e) => {
        e.preventDefault();
        contactApi();
        changeTransText('');
        changeLangSelect('');
    }

    return (
        <form className='Form' onSubmit={handleSubmit}>
            <input type='text' value={text} onChange={handleTransText} placeholder='What to translate?'></input>

            <select onChange={handleSelectChoice} aria-label=".form-select-sm example">
                <option>Choose Language</option>
                <option value="yoda">Yoda</option>
                <option value="dothraki">Dothraki</option>
                <option value="vulcan">Vulcan</option>
                <option value="sith">Sith</option>
                <option value="mandalorian">Mandalorian</option>
                <option value="cheunh">Cheunh</option>
                <option value="klingon">Klingon</option>
                <option value="romulan">Romulan</option>
                <option value="valyrian">Valyrian</option>
                <option value="orcish">Orcish</option>
                <option value="hodor">Hodor</option>


            </select>

            <button>Translate</button>
        </form>


    )
}