import React, { useState } from 'react';
import DependentsSelection from './components/DependentsSelection'
import DependentsField from './components/DependentsField'

function App() {
  const [dependents, setDependents] = useState("0");
  return (
    <>
      <DependentsSelection onChange={(value) => setDependents(value)}/>
      <DependentsField dependents={dependents} />
    </>
  );
}

export default App;
