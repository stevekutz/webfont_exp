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
        <h1> h1 styled selector h1, h2 in App.css</h1>
        <h2> h1 styled selector h1, h2 in App.css</h2>
        <p style = {{fontFamily: 'climbing_plantregular', textAlign: 'center'}}>
            p is climbing_plantregular with inline styling
        </p>
        <p style = {{
            fontFamily: 'a-song-for-jennifer'
        }}> A song for Jennifer font, font filename had spaces, replace with dashes, also inline styling</p>

        <p style = {{
            fontFamily: 'Open-24-Display-St'
        }}> Open-24-Display-St font</p>


        <MyDiv> Kahless font used in styled component MyDiv</MyDiv>

        <p style = {{
            fontFamily: 'Hanged-Letters'
        }}> Hanging Letters imported into /index.css</p>

    </div>
  );
}

export default App;
