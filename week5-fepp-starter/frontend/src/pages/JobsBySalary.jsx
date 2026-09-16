import { useEffect, useState } from "react";
import JobListing from "../components/JobListing";

const JobsBySalary = () => {
  const [jobs, setJobs] = useState([]);
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(0);

  const fetchJobs = async () => {
    try {
      const response = await fetch(`/api/jobs/salary?min=${minSalary}&max=${maxSalary}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);




//   useEffect(() => {
//     const fetchJobs = async () => {
//         try{
//             const response = await fetch(`/api/jobs/salary?min=${minSalary}&max=${maxSalary}`);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             setJobs(data);
//         } catch (error) {
//             console.error('Failed to fetch jobs:', error);
//         }
//     };

//     fetchJobs();
//     }, []);



  return (
    <div className="jobs-by-salary">
      <h1>Jobs by Salary</h1>
      <input placeholder="Min" value={minSalary} onChange={(e) => setMinSalary(e.target.value)} />
      <input placeholder="Max" value={maxSalary} onChange={(e) => setMaxSalary(e.target.value)} />
      <button onClick={fetchJobs}>Filter</button>

      {jobs.map((job) => (
        <JobListing key={job._id} id={job._id} {...job} />
      ))}


    </div>
  );
};

export default JobsBySalary;