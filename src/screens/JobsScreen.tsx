import React from 'react';
import JobCard from '../components/JobCard';
import Container from '../components/Layout/Container';
import NavBar from '../components/Navigation/NavBar';
import jobs from '../data/jobs';

const JobsScreen = () => {
  console.log(jobs);

  return (
    <>
      <NavBar />
      <Container>
        <h1 className='text-xl font-bold mt-10 mb-2'>Jobs</h1>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </Container>
    </>
  );
};

export default JobsScreen;
