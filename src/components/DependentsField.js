import React from 'react';

const DependentsField = props => {
  return (
    <>
      {[...Array(+props.dependents)].map((_,index)=>{
      return (
      <div>
      Dependent {index+1}:<input type="number" key={index}  />
      </div>
      )
    })
    }
    </>
  );
}

export default DependentsField;
