import React, { Component } from 'react';
import './Calculadora.css';
import Button from '../components/button/Button';
import Display from '../components/display/Display';

const initialState = {
   displayValue: '0',
   clearDisplay: false,
   operation: null,
   values: [0, 0],
   current: 0,
};

export default class Calculadora extends Component{

   state = {...initialState} ;

   constructor(props){
      super(props);

      this.clearMemory = this.clearMemory.bind(this);
      this.addDigit = this.addDigit.bind(this);
   }

   clearMemory(){
      this.setState({...initialState});
   }

   //setOperation(operation) {
     // if(this.state.current === 0){
       //  this.setState({ operation, current: 1, clearDisplay: true })
      //} else {
        // const equals = operation === '=';
         //const currentOperation = this.state.operation;
         //const values = [... this.state.values];
         //try{
           // values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
         //}catch (error){
         //   values[0] = this.state.values[0];
         //}
      //}

     // values[1] = 0
   //}

   addDigit(n){
      console.log(n)

      if (n === '.' && this.state.displayValue.includes('.')){
         return;
      }

      const clearDisplay = this.state.clearDisplay === '0' || this.state.clearDisplay;
      const currentValue = clearDisplay ? '' : this.state.displayValue;
      const displayValue = currentValue + n;
      console.log(displayValue);

      if(n != '.'){
         const i = this.state.current;

         const newValue = parseFloat(displayValue);
         const values = [...this.state.values];
         values[i] = newValue;
         this.setState({values});
         console.log(values);
      }
   }

 render(){
    return(
         <div className="calculator">
            <Display value={this.state.displayValue}/>
            <Button label="AC" click={this.clearMemory} triple/>
            <Button label="/" click={this.addDigit} operation/>
            <Button label="7" click={this.addDigit}/>
            <Button label="8" click={this.addDigit}/>
            <Button label="9" click={this.addDigit}/>
            <Button label="*" click={this.addDigit} operation/>
            <Button label="4" click={this.addDigit}/>
            <Button label="5" click={this.addDigit}/>
            <Button label="6" click={this.addDigit}/>
            <Button label="-" click={this.addDigit} operation/>
            <Button label="1" click={this.addDigit}/>
            <Button label="2" click={this.addDigit}/>
            <Button label="3" click={this.addDigit}/>
            <Button label="+" click={this.addDigit} operation/>
            <Button label="0" click={this.addDigit} double/>
            <Button label="." click={this.addDigit}/>
            <Button label="=" click={this.addDigit} operation/>
         </div>
    )
 }   
}