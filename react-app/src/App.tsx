import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import AdamButton from './components/Button';
import { useState } from 'react';

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  let cities = [
    "New York",
    "San Francisco",
    "Tokyo"
];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return <div>
            {/* <ListGroup items={cities} heading="Cities" onSelectItem={handleSelectItem}/> */}
          {/* <Alert>
            Hello <span /> World 
          </Alert> */}
          {alertVisible && <Alert onClose={() => setAlertVisibility(false)}> My Alert</Alert>} 
          <AdamButton color="danger" onClick={() => setAlertVisibility(true)}> 
            Hello <span /> Adam
          </AdamButton>
        </div>; // Each component will have its own state
}

export default App; // for allowing import from other places.