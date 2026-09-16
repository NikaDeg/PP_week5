import JobListing from '../components/JobListing';
import { useEffect, useState } from 'react';

const Home = () => {
  useEffect(() => {
    const fetchJobs = async () => {
      const jobs = await fetch('/api/jobs');
      const json = await jobs.json();
      setJobs((prev) => (prev, json));
    };
    fetchJobs();
  }, []);
  const [jobs, setJobs] = useState([]);

  return (
    <div className="home">
      <div className="job-list">
        {jobs.length === 0 && <p>No jobs found</p>}
        {jobs.length !== 0 && jobs.map((job) => <JobListing key={job.id} {...job} />)}
      </div>
    </div>
  );
};

export default Home;
