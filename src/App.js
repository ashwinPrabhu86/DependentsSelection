import React, { useState } from 'react';

function App() {
  const [items] = useState([
    { label: "0", value: "0" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" }
  ]);
  const [dependents, setDependents] = useState("0");
  return (
    <div className="App">
      Select Dependents: 
      <select onChange={e => setDependents(e.currentTarget.value)}>
      {items.map(({ label, value }) => (
       <option key={value} value={value}>
       {label}
       </option>
       ))
      }
    </select>
    {[...Array(+dependents)].map((_,index)=>{
      return (
      <div>
      <br />
      Dependent {index}:<input type="number" key={index}  />
      </div>
      )
    })
    }
    </div>
  );
}

export default App;
