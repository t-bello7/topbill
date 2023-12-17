import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { InvoiceCard } from '../components/molecules';
import { InvoiceDataInt } from '../utils';

const data: InvoiceDataInt[] = [
  {
    id: uuidv4(),
    firstName: 'Odumodu',
    lastName: 'ff',
    clientImg: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
    totalAmount: 300,
    dueDate: '12-dec-2023',
    paid: true,
  },
];

const items: TabsProps['items'] = [
  {
    key: uuidv4(),
    label: 'All',
    children: (
      <>
        {data.map((item) => (
          <InvoiceCard key={item.id} data={item} />
        ))}
      </>
    ),
  },
  {
    key: uuidv4(),
    label: 'paid',
    children: (
      <>
        {data.map((item) => (
          <InvoiceCard key={item.id} data={item} />
        ))}
      </>
    ),
  },
  {
    key: uuidv4(),
    label: 'unpaid',
    children: (
      <>
        {data.map((item) => (
          <InvoiceCard key={item.id} data={item} />
        ))}
      </>
    ),
  },
];
const Invoices: FC = () => (
  <section>
    <Tabs items={items} />
  </section>
);

export default Invoices;
