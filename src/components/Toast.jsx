import React, { Component } from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  let notify = (message, type) => 
  {
    switch(type)
    {
      case 1:
        toast.success(message, {
          position: toast.POSITION.TOP_CENTER
        }); 
      break;

      case 2:
        toast.error(message, {
            position: toast.POSITION.TOP_CENTER
          }); 
      break; 

      case 3:
      toast.warn(message, {
        position: toast.POSITION.TOP_RIGHT,
         autoClose: false
      });
      break;
    }
    
  }

  class Toast extends Component {
    static notify = notify;

    constructor(...props){ 
    super(...props)
  }

    render(){
      return (
        <div>          
          <ToastContainer />
        </div>
      );
    }
  }

//   export function notify() {
//   notify();
// }

  export default Toast;