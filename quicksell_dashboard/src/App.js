import React, { useState, useEffect } from 'react';
import Header from './components/Header';


function App() {
  const [data, setData] = useState(null); // State to store fetched data
  useEffect(() => {
    // Perform the fetch when the component mounts
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data); // Store the fetched data in state
        console.log(data);
        
      })
      .catch(error => {
        console.log("Network eror");
      });
  }, []);

  return (
    <div className="App">
      <Header data={data}/>
    </div>
  );
}

export default App;
