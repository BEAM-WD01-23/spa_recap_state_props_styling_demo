import './App.css'
import MyState from './components/recapState/myState';
import MyCounter from './components/recapConditRendering/myCounter';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/importBootstrap/bootstrap';

function App() {
  
  return (
    <div>
      <h2 style={{color: 'green'}}>Recap State, Props, Styling ...</h2>
      <MyState/>
      <MyCounter/>
       <BasicExample/>
    </div>
  )
}

export default App

