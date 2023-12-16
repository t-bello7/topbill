import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ProductCard } from '../components/molecules';

const data = [
  {
    id: uuidv4(),
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    name: 'Female Hostels in Abule-Oja',
    location: 'University of Lagos, Unilag',
    price: 350000,
    viewsNum: 453,
  },
];
const Invoices: FC = () => (
  <section>
    {data.map((item) => (
      <ProductCard key={item.id} data={item} type="apartment" />
    ))}
  </section>
);

export default Invoices;
