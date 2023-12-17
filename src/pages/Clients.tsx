import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ClientsDataInt } from '../utils';
import { ClientsCard } from '../components/molecules';

const data: ClientsDataInt[] = [
  {
    id: uuidv4(),
    clientImg: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
    totalAmount: 300,
    firstName: 'Odumodu',
    lastName: 'Favour',
    email: 'invoic@gmail.com',
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
