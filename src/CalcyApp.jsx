import React from 'react';
import CalculatorTitle from './Calculator/CalculatorTitle'
import OutputScreen from './Calculator/OutputScreen';
import Button from './Calculator/Button';
const CalcyApp = () =>{
return<>
   <div className="frame">
    <CalculatorTitle value="GeeksforGeeks Calculator"/>
    <div className="mainCalc">
    <OutputScreen/>
    <div className="button-row">
      <Button label={'Clear'}/>
      <Button label={'Delete'}/>
      <Button label={'.'}/>
      <Button label={'/'}/>
    </div>
    <div className="button-row">
      <Button label={'7'}/>
      <Button label={'8'}/>
      <Button label={'9'}/>
      <Button label={'*'}/>
    </div>
    <div className="button-row">
      <Button label={'4'}/>
      <Button label={'5'}/>
      <Button label={'6'}/>
      <Button label={'-'}/>
    </div>
    <div className="button-row">
      <Button label={'1'}/>
      <Button label={'2'}/>
      <Button label={'3'}/>
      <Button label={'+'}/>
    </div>
    <div className="button-row">
      <Button label={'0'}/>
      <Button label={'='}/>
    </div>
    </div>
    </div>

</>
}
export default CalcyApp;
