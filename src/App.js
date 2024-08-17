import React, { useState } from 'react';
import jobsData from './data/jobsData';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import JobApplicationForm from './components/JobApplicationForm';

function App() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applying, setApplying] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const handleSubmitApplication = (formData) => {
    console.log('Application Submitted:', formData);
    setApplicationSubmitted(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Software Job Portal</h1>
      {applicationSubmitted ? (
        <div style={{ margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '600px' }}>
          <h2>Thank you for applying!</h2>
          <p>Please give us some couple of days so that we can review your application. If there is a match, we will reach out to you. Take Care :)</p>
          <button onClick={() => { setSelectedJob(null); setApplying(false); setApplicationSubmitted(false); }} style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Back to Job Listings
          </button>
        </div>
      ) : applying ? (
        <JobApplicationForm job={selectedJob} onSubmit={handleSubmitApplication} />
      ) : selectedJob ? (
        <JobDetails job={selectedJob} onApply={() => setApplying(true)} />
      ) : (
        <JobList jobs={jobsData} onSelect={setSelectedJob} />
      )}
    </div>
  );
}

export default App;
