import "./styles.css";
import React, { createRef } from "react";

export default class App extends React.Component {
  constructor() {
    super();
    // yha hame Ref ko creat kiya hai or niche ise use kr rhe hai
    this.inputRef = createRef();
  }

  componentDidMount() {
    // ham Ref ki help se kuch bhi forcefully kr sakte hai jese yha hamne default placeholder type   ,1000 ko input ke under put kiya
    // console.log(this.inputRef.current.value = "1000")
  }

  getval() {
    // ye actual Ref hai ,//
    console.log(this.inputRef.current.value);
    //yha this mean is function ki bar kr rha hai isme inputRef ki style ke background me color ko white krdo esa matlb hai iska
    this.inputRef.current.style.color = "white";
    this.inputRef.current.style.backgroundColor = "red";
  }

  render() {
    return (
      <div className="App">
        <h1>Ref in React js</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.getval()}>Check Ref</button>
      </div>
    );
  }
}
