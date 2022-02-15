import React from "react";
import SearchBar from "search-bar-react";
function Patient() {
  const patient = [
    { name: "Sara Smith", surgreyDate: "15 Aug 2021" },
    { name: "James Johnson", surgreyDate: "No Clearance" },
    { name: "Patric Page", surgreyDate: "23 Aug 2021" },
    { name: "Derek Daimon", surgreyDate: "23 Aug 2021" },
  ];
  return (
    <>
      <SearchBar
        size="large"
        width="100%"
        autoFocus
        placeholder="Search Patients..."
      />
      {patient.map((row) => {
        return (
          <div className="patient" style={{ border: "1px solid skyblue" }}>
            <h3>{row.name}</h3>
            <span>{row.surgreyDate}</span>
          </div>
        );
      })}
    </>
  );
}

export default Patient;
