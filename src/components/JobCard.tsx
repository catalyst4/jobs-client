import { useRouter } from 'next/router';

const JobCard = ({ job }) => {
  const router = useRouter();

  return (
    <div
      role='button'
      onClick={() => router.push(`/jobs/${job.id}`)}
      className='shadow-sm bg-white px-3 py-4 rounded-lg mb-3 last:mb-0'
    >
      <div className='flex items-center'>
        <div className='w-16 h-16 bg-gray-200 mr-4 rounded-lg'></div>
        <div>
          <div className='flex items-center text-gray-500 text-xs -mb-1'>
            <div className='mr-2'>{job.employer}</div>
            &bull;
            <div className='ml-2'>{job.location}</div>
          </div>
          <div className='text-lg -mb-1'>{job.title}</div>
          <div className='flex items-center text-gray-500'>
            <div className='text-xs uppercase mr-2'>{job.hourlyRate}</div>
            &bull;
            <div className='text-xs uppercase ml-2'>{job.estHours} hrs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
