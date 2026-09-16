import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import JobListing from '../components/JobListing';

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setJob(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchJob();
  }, [id]);



  const deleteJob = async () => {
    
    try{

          const response = await fetch(`/api/jobs/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          navigate('/');
        }
    } catch(error){
      console.error('Failed to delete the job');
    }
  };




  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p>Type: {job.type}</p>
      <p>Description: {job.description}</p>
      <p>Company: {job.company.name}</p>
      <p>Contact Email: {job.company.contactEmail}</p>
      <p>Contact Phone: {job.company.contactPhone}</p>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
      <p>Posted Date: {job.postedDate}</p>
      <Link to={`/edit-job/${id}`}>
        <button>Edit Job</button>
      </Link>
      <button onClick={deleteJob}>Delete Job</button>
      <button onClick={() => navigate('/')}>Back</button>
    </div>
  );
};

export default JobPage;
