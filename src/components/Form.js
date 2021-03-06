import React from 'react';
import { Link } from 'react-router-dom';
import Field from './Field';
import Navigation from './Navigation';

const renderFields = (state, buttonHandler) => {
  return state.fields.map((value, index) => {
    return <Field title={value.title} description={value.description} number={index+1} key={index} reactKey={index} scaleNum={value.scaleNum} buttonHandler={buttonHandler} fieldValue={value.fieldValue}/>
  })
}

const Form = ({state, buttonHandler, settingsHandler, changeHandler}) => {
  return (
    <>
    <div className="pain-scale">
      <Navigation title={'Smärtskattning'} state={state} settingsHandler={settingsHandler} changeHandler={changeHandler}/>
      <div className="section">
        <div className="inner-content">
          <div className="card">
            <img className="card-image" src="./scale-faces.png" alt=""></img>
            <div className="card-child">
              <h3 className="card-title">Hur gör jag?</h3>
              <p className="card-description">I följande 6 steg, observera personen och ange vad du ser. För steg 2. <b>Ansiktsuttryck</b>, kan du använda bilden ovan som hjälp.</p>
            </div>
          </div>

          {renderFields(state, buttonHandler)}

          <Link className={`link link-results ${state.disableShowResults ? 'disabled disabled-link' : ''}`} to="/results">Se resultat </Link>
          </div>
          <img src="./watermark.svg" alt="Watermark logo" className="watermark"></img>
        </div>
      </div>
    </>
  );
};

export default Form;