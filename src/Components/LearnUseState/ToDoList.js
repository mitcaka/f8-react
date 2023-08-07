import React, { useState } from "react";

const ToDoList = () => {
  const storageJobs = JSON.parse(localStorage.getItem("jobs"));
  const [jobs, setJobs] = useState(storageJobs ?? []);
  const [job, setJob] = useState("");
  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };
  return (
    <div style={{ padding: 32 }}>
      <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
