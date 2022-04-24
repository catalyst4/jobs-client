import { useRouter } from 'next/router';
import React from 'react';

const Job = () => {
  const router = useRouter();

  const { id } = router.query;

  return <div>Job {id}</div>;
};

export default Job;
