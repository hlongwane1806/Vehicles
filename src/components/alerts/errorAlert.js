import React, {useState} from 'react';
import Alert from "react-bootstrap/Alert";

function ErrorAlert({error, clearError}) {
  const [show, setShow] = useState(true);

  
    const closeShow = () => {
      clearError();
      setShow(false);
      
     
    };
  
    if (show) {
      return (
        <Alert variant="danger" onClose={closeShow} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            {error.message}
          </p>
        </Alert>
      );
    }
 
  }
  
  export default ErrorAlert;