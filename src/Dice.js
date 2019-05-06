import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Dice extends Component{

constructor(props){
  super(props)
  this.state = {
    throw: 1
  }
  this.roll = this.roll.bind(this);
}


roll(){
  this.setState(() => {
    return {throw: Math.floor((Math.random() * this.props.diceSize) + 1) };
  })
}


render(){

  const imageSrc = `/images/${this.state.throw}.png`
  return(
    <div className='App'>
      <h1>Dice</h1>
      <p>{this.state.throw}</p>
      <img src={imageSrc} />
      <br />
      <br />
      <button onClick={this.roll}>Roll the dice</button>
    </div>
  )
}

}

Dice.defaultProps = {
  diceSize: 6
}

Dice.propTypes = {
  diceSize: PropTypes.number.isRequired
}
export default Dice;
