import React from "react";
import './Patient_details.css'
function Patient_details() {
  const patient_details = [
    {
      name: "Sara-Smith",
      phone: 9549543975,
      email: "ramankgg2016@gmail.com",
      Age: 45,
      Gender: "Femaile",
      SurgreyDate: "15 Aug 2022",
      SurgreyType: "Rotator cut Repair",
      Height: 163,
      weight: 110,
      BMI: 19,
      Anesthlogist: "Dr. Chirnath Hardway",
      AnesthlogistPhone: 9764587358,
      AnesthlogistEmail: "anes@gmail.com",
      Surgrey: "Yes",
    },
  ];
  return (
    <div>
        <h2 className="name">Sara Smith</h2>
      {patient_details.map((row) => {
        return (
            <div>
          <div style={{ display: "flex" }} className="div-main">
            <div className="div-first">
           
              <p>Phone:{row.phone}</p>
              <p>Email:{row.email}</p>
              <p>Gender:{row.Gender}</p>
              <p>Age:{row.Age}</p>
            </div>
            <div className="div-second">
              <p>Surgery Type :{row.SurgreyType}</p>
              <p>SurgreyDate :{row.SurgreyDate}</p>
              <p>Height(cm):{row.Height}</p>
              <p>Weight(Ib):{row.weight}</p>
              <p>BMI:{row.BMI}</p>
            </div>
            <div className="div-third">
              <p>Anesthlogist:{row.Anesthlogist}</p>
              <p>Anesthlogist Phone:{row.AnesthlogistPhone}</p>
              <p>Anesthlogist Email:{row.AnesthlogistEmail}</p>
            </div>
            <div className="div-four">
              <p>Surgrey Clearance :{row.Surgrey}</p>
            </div>
          </div>
          <div style={{display:'flex'}} className="div-last">
            <h3 className="div-h3first">List of prior Surgerios</h3>
            <h3>List of Medical Daigonsis</h3>
            <h3>List of medications</h3>
            <h3>Airway Evalution</h3>
            <h3>Anethsisa Clearance and Recommediation</h3>
          </div>
          </div>
        );
      })}
      <div className="chat-div">
       we can chat here...
       <h4>first time surgrey...?</h4>
       <p>No</p>
       <h4>Family historical of complications...?</h4>
       <p>Yes</p>
     </div>
    </div>
  );
}

export default Patient_details;
