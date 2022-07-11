//snippets to keep for later

      //adding in future iteration
      // const [supply, setSupply] = useState('') // <-- added
      //   const [item, setAddSupply] = useState('') //adding a new supply item may move to secondary modal

       {/* <label>Supply List</label>
            **want a repeating single box to enter each item into the project & have an updating list (will likely go on a secondary modal as a simple task list for now use Stacie's work on this). Adding the potential for uploading a pic.(possibly on a third modal in the future.) (addTask shows on modal)
            {/* <button onClick={() => setAddSupply(true)}> */}
            {/* Add Supply item + (move to new modal) */}
            {/* </button> */} */}
            {/* <input type='text' name='supply' onChange={(e) => setSupply(e.target.value)}  */}
          {/* value={supply} placeholder='Enter Supplies Needed'/>      */}

                  // supply: supply, // <-- added


                    {/* <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Show a second modal and hide this one with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Hide this modal and show the first with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
<a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> */}
      
      
      
  

// import {HEADER, FOOTER, BREADCRUMB, PAGINATION, SIDENAV, SIGNINOUT} from '../components'


          {/* Change to next and link to second modal for supply list which links to second set of docs specifically for the stash area for later. */}





          ------------------------
          import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import React from 'react';
import Home from './home';
import About from './about';
import Features from './features';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from "react-router-dom";





// ReactDOM.render(
  // <React.StrictMode>
    const Routes = () => (
<Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/features" component={Features} />
    </div>
  </Router>
    );
    export default Routes;
// </React.StrictMode>,
ReactDOM.render(<App />, document.getElementById('root'));


--------------
import './App.css';
import Home from './TaskManager'
import Header from './components/header'
import React from 'react'
import { Link } from "react-router-dom";

function App() {
  return (

    <div className='app'>
      <Header />
      <Home />
    </div>
  );
}
export default App;

      {/* <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Show a second modal and hide this one with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Hide this modal and show the first with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
<a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> */}


// import { BrowserRouter as Router, Route } from 'react-router-dom';

// ReactDOM.render(
  // <React.StrictMode>
//     const Routes = () => (
// <Router>
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/features" component={Features} />
//     </div>
//   </Router>


//     );
//     export default Routes
// </React.StrictMode>,
// ReactDOM.render(<App />, document.getElementById('root'));

