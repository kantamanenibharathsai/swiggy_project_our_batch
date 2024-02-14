import React from 'react';
import './App.css';
import NavbarOne from './components/navbar_one/NavbarOne';
import NavbarTwo from './components/navbar_two/NavbarTwo';
import NavbarThree from './components/navbar_three/NavbarThree';
import NavbarFour from './components/navbar_four/NavbarFour';
import NavbarFive from './components/navbar_five/NavbarFive';
import SearchPage from './components/search_page/Search';


interface Props {
  name?: string;
}

class Person extends React.Component<Props> {
  constructor(props: Props) {
    console.log("constructor method called")
    super(props);
    this.onclickEventHandler = this.onclickEventHandler.bind(this)

  }

  onclickEventHandler()  {
    console.log(this);  // `this` refers to the undefined why
  }

  render() {
    return (
      <div>
        <p onClick={this.onclickEventHandler}>{"hello"}</p>
      </div>
    );
  }
}




function App() {
  return (
    // <div>
    //  {/* <NavbarOne/> */}
    //  {/* <NavbarTwo/> */}
    //  <NavbarThree/>
    //  {/* <NavbarFour/> */}
    //  {/* <NavbarFive/> */}
    //  <SearchPage/>
    // </div>
    <Person/>
  );
}

export default App;
