import React, { useState } from 'react';

function JobApplicationForm({ job, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    experience: '',
    dob: '',
    relationshipStatus: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '600px', margin: '20px auto' }}>
      <h2>Apply for {job.title}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name: </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Surname: </label>
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Experience: </label>
          <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>DOB: </label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Relationship Status: </label>
          <select name="relationshipStatus" value={formData.relationshipStatus} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="In a Relationship">In a Relationship</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Upload Resume: </label>
          <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required />
        </div>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Submit Application</button>
      </form>
    </div>
  );
}

export default JobApplicationForm;
