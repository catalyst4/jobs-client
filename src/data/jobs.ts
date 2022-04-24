import { v4 as uuidv4 } from 'uuid';

const jobs = [
  {
    id: uuidv4(),
    title: 'Crew Member',
    employer: 'McDonalds',
    location: 'Ards',
    estHours: '40',
    description: 'lorem ipsum',
    requirements: 'lorem ipsum',
    hourlyRate: '£9.50',
  },
  {
    id: uuidv4(),
    title: 'Kitchen Porter',
    employer: 'Blu BBQ',
    location: 'Bangor',
    estHours: '40',
    description: 'lorem ipsum',
    requirements: 'lorem ipsum',
    hourlyRate: '£9.50',
  },
  {
    id: uuidv4(),
    title: 'Store Team Member',
    employer: 'Home Bargains',
    location: 'Bangor',
    estHours: '16-28',
    description: 'lorem ipsum',
    requirements: 'lorem ipsum',
    hourlyRate: '£9.50',
  },
  {
    id: uuidv4(),
    title: 'Delivery Driver',
    employer: 'Four Star Pizza',
    location: 'Bangor',
    estHours: '20',
    description: 'lorem ipsum',
    requirements: 'lorem ipsum',
    hourlyRate: '£7.50',
  },
];

export default jobs;
