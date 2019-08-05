import React from 'react';
import ToDo from './Components/ToDo/ToDo';
import global from './styles/global.css';

class App extends React.Component{
  render(){
    return(
        <div>
          <ToDo />
        </div>
    );
  }
}



export default App;
