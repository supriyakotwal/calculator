import React from 'react';
import Button from './Button';
class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      ans : '',
      reset: false
    };
  }
  onClick = (e) => {
    let value = e.target.value;
    if(this.state.reset)
    this.setState({ans: '', reset: false});
    else {
      let tempValue = this.state.ans ;
      this.setState({ans: tempValue +=value});
    }
    switch(value){
      case 'C':
        this.setState({ans: ''});
        break;
      case '=':
        try {
          this.setState({ans: eval(this.state.ans.substring(0,this.state.ans.length-1)), reset: true});
        } catch(err) {
          this.setState({ans: 'Invalid input', reset: true});
        }
        break;
      default :
        break;
    }
  }

  render(){
    return (
      <div>
        <h1>Calculator</h1>
        <table>
          <tbody>
          <tr>
            <td colSpan="3"><input type="text" readOnly value={this.state.ans}/></td>
            <td><Button label="C" onClick={this.onClick} /></td>
          </tr>
          <tr>
            <td><Button label="1" onClick={this.onClick} /></td>
            <td><Button label="2" onClick={this.onClick} /></td>
            <td><Button label="3" onClick={this.onClick} /></td>
            <td><Button label="+" onClick={this.onClick} /></td>
          </tr>
          <tr>
            <td><Button label="4" onClick={this.onClick} /></td>
            <td><Button label="5" onClick={this.onClick} /></td>
            <td><Button label="6" onClick={this.onClick} /></td>
            <td><Button label="-" onClick={this.onClick} /></td>
          </tr>
          <tr>
            <td><Button label="7" onClick={this.onClick} /></td>
            <td><Button label="8" onClick={this.onClick} /></td>
            <td><Button label="9" onClick={this.onClick} /></td>
            <td><Button label="/" onClick={this.onClick} /></td>
          </tr>
          <tr>
            <td><Button label="." onClick={this.onClick} /></td>
            <td><Button label="0" onClick={this.onClick} /></td>
            <td><Button label="*" onClick={this.onClick} /></td>
            <td><Button label="=" onClick={this.onClick} /></td>
          </tr>
          </tbody>
        </table>
      </div>
    );
   }
}
export default Calculator;