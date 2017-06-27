import React from 'react'; 

const Clicker = React.createClass({
  getInitialState (){
    return {
       size: '8'
    }
  },

  handleClick(num){
    if (this.state.size <= 630){
      this.setState ({size: this.state.size * num});
    } else {
      this.setState ({size: '8'});
    }
  },
  
  render() {
    return (
      <div style={{'margin': '0 auto', 'border': '1px solid black', 'width': '45rem', 'height': '45rem', 'display': 'flex', 'align-items': 'center'}}> 
          <div onClick={this.handleClick.bind(this, 1.2)} style={{'background-color': 'red', 'width': this.state.size, 'height': this.state.size, 'border-radius': '50%', 'margin': 'auto', 'cursor': 'pointer'}}></div>
      </div>
    );
  }
});

export default Clicker;







