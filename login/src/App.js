import React from 'react';
 import './App.css';
class App extends React.Component {
 /* constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }*/

  render() {
    return (
    <form>
      <div class="sa" >   
        <h1 class="a">LOGIN FORM!!!</h1>
        <p class="b">
          <h4> <marquee direction="right">`Welcome to the foos-ball game ...`</marquee> </h4>
        </p>
        <label class="aaa">
       <b> USERNAME </b><br/>
         <input type="text" class="cont" placeholder="Enter the user name"/>
             <br/>
        </label>
        <br/>
        <label class="bbb">
         <b> PASSWORD</b> <br/>
          <input type="password" class="cont" placeholder="Enter the passward"  />
        </label>
        <br/>
        <input type="submit" class="ccc"  value="Submit" />
      </div>
      </form>
    );
  }
}
export default App;