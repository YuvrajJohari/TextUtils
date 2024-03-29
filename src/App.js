import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {createBrowserRouter,RouterProvider} from 'react-router-dom'



function App() {
  
  const[mode ,setMode]=useState('light');
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({     
       msg : message,
      type:type
}
      )

  }
  
  const togglemode = () =>{
    if (mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils-dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success" );
      document.title='TextUtils-light Mode';
    }
  }
  const router = createBrowserRouter([
    {path : "/",
    element:<><Navbar title="TextUtils" mode ={mode} togglemode ={togglemode}/><div className='container'>

    <TextForm showAlert={showAlert} Heading="Enter the text to analyze" mode ={mode}/></div></>
    },
    {path:"/about",
     element:<><Navbar title="TextUtils" mode ={mode} togglemode ={togglemode}/><div className='container'><About/></div></>}
  ])
  return (
    <>
    


<Alert alert={alert}/>


<RouterProvider router={router}/>



        

    
    </>
  );
}

export default App;
