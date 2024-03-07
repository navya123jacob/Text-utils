import React from 'react'

export default function Alert(props) {
    function convertCase(word){
     return word[0].toUpperCase()+word.slice(1).toLowerCase()
    }
    if(!props.alert){
        return 
    }
   return  (
     <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{convertCase(props.alert.type)}</strong>:{props.alert.msg}
  </div>
  );
}
