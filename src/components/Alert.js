import React from "react";
import { Alert, Button } from "@material-tailwind/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
 
export default function AlertMessage() {
  const [show, setShow] = React.useState(true);
 
return (
 
<React.Fragment>
  {!show && (
    <Button className="absolute" color="red" onClick={() => setShow(true)}>
      Show Alert
    </Button>
  )}
  <Alert
    show={show}
    color="red"
    icon={<ExclamationTriangleIcon className="h-6 w-6" />}
    dismissible={{
      onClose: () => setShow(false),
      action: (
        <Button variant="text" color="white" size="sm">
          Close
        </Button>
      ),
    }}
  >
    Sorry, something went wrong please try again.
  </Alert>
</React.Fragment>
); }
 