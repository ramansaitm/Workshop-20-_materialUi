import React from "react";
import "./Patients.css";
import Patient from "./Patient";
import Patient_details from './Patient_details'
function Patients() {
  return (
    <div style={{display:"flex"}}>

    <div className="div-patient">
      <h2>Patients</h2>
      <Patient className="patient" />
    </div>

    <div className="patient-details">
      <h2>Patient Information</h2>
     <Patient_details />
    </div>
    <div>
       we can chat here...
     </div>
    </div>
  );
}

export default Patients;
