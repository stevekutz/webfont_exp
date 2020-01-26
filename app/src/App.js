import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/stylesheet.css';

import  {
    MyDiv,

} from './styledComp/myStyledComp';


function App() {
  return (
    <div className="App">
        <h1> styled h1</h1>
        <h2> styled h2</h2>
        <p style = {{fontFamily: 'climbing_plantregular', textAlign: 'center'}}>
            p is special font styled
        </p>
        <p style = {{
            fontFamily: 'a-song-for-jennifer'
        }}> A song for Jennifer font</p>
        <p style = {{
            fontFamily: 'Kahlesv2'
        }}> Kahless font</p>
        <p style = {{
            fontFamily: 'Open-24-Display-St'
        }}> Open-24-Display-St font</p>


        <MyDiv> Here is MyDiv</MyDiv>

    </div>
  );
}

export default App;
