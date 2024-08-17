import React from 'react';

function JobCard({ job, onSelect }) {
  return (
    <div onClick={() => onSelect(job)} style={{ cursor: 'pointer', margin: '20px', width: '300px', border: '1px solid #ccc', borderRadius: '10px', padding: '10px' }}>
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company} ({job.companyType})</p>
      <p><strong>Experience:</strong> {job.experience}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Position:</strong> {job.position}</p>
      <p><strong>Preferred Gender:</strong> {job.preferredGender}</p>
    </div>
  );
}

export default JobCard;
