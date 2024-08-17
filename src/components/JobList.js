import React, { useState } from 'react';
import JobCard from './JobCard';
import JobFilter from './JobFilter';

function JobList({ jobs, onSelect }) {
  const [filter, setFilter] = useState('All');

  const filteredJobs = jobs.filter(job => 
    filter === 'All' || job.preferredGender === filter
  );

  return (
    <div>
      <JobFilter onFilter={setFilter} />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredJobs.map(job => (
          <JobCard key={job.id} job={job} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}

export default JobList;
