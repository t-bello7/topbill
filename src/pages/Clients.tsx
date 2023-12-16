import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ClientsDataInt } from '../utils';
import { ClientsCard } from '../components/molecules';

const data: ClientsDataInt[] = [
  {
    id: uuidv4(),
    viewNum: 453,
    commentNum: 25,
    likeNum: 31,
    shareNum: 30,
    datePosted: '12 Dec 2023',
    authorName: 'Chris',
    authorImg: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
    postTitle: 'When is Course Registration ending',
    postContent:
      'When is course registration ending for Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quod consectetur, deleniti in non ipsa harum omnis veniam porro ullam libero earum magnam beatae, enim tempore voluptatibus. Sapiente, harum pariatur!',
  },
];

const Clients: FC = () => (
  <section>
    {data.map((item) => (
      <ClientsCard key={item.id} data={item} />
    ))}
  </section>
);
export default Clients;
