import { v4 as uuidv4 } from 'uuid';
import { FC } from 'react';
import { SectionTitle } from '../atoms';
import { ProductCard } from '../molecules';
import { LatestAdDataInt } from '../../utils';

const data: LatestAdDataInt[] = [
  {
    id: uuidv4(),
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    name: 'HP Envy CPU',
    location: 'University of Lagos Unilag, Lagos',
    price: 750000,
    viewsNum: 454,
  },
  {
    id: uuidv4(),
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    name: 'Fairly used purple iphone xr',
    location: 'Federal University of Technology, Akure, Futa',
    price: 150000,
    viewsNum: 342,
  },
  {
    id: uuidv4(),
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    name: 'Hp Envy CPU',
    location: 'University of lagos',
    price: 150000,
    viewsNum: 242,
  },
];
const LatestAdSection: FC = () => (
  <section className="space-y-2">
    <SectionTitle name="latest Ads" />
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </div>
  </section>
);

export default LatestAdSection;
