import React from 'react';

function JobDetails({ job, onApply }) {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '600px', margin: '20px auto' }}>
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company} ({job.companyType})</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Experience:</strong> {job.experience}</p>
      <p><strong>Position:</strong> {job.position}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Preferred Gender:</strong> {job.preferredGender}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <button onClick={onApply} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>Apply</button>
    </div>
  );
}

export default JobDetails;
