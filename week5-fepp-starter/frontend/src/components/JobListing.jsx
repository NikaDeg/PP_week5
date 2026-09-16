import { Link } from 'react-router-dom';

const JobListing = ({ id, title, type, description, company, salary }) => {
  return (
    <div className="job-preview">
      <h2>{title}</h2>
      <p>Type: {type}</p>
      <p>Description: {description}</p>
      <p>Salary: {salary}</p>
      <p>Company: {company.name}</p>
      <Link to={`/jobs/${id}`}>
        {/* <h2>{job.title}</h2> */}
        <button>View Job</button>
      </Link>
    </div>
  );
};

export default JobListing;
