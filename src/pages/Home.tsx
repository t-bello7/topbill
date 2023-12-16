import { FC } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { AdvancedImage } from '@cloudinary/react';
import { SectionTitle } from '../components/atoms';
import { LatestAdSection } from '../components/elements';

// const categoryImageResize = (publicId: string) => cld
//   .image(publicId)
//   .resize(crop().width(150).height(150))
//   .roundCorners(byRadius(20));
const navLinks = [
  {
    id: uuidv4(),
    name: 'community',
    url: '/community',
  },
  {
    id: uuidv4(),
    name: 'apartments',
    url: '/apartments',
  },
  {
    id: uuidv4(),
    name: 'Phones, tablets & Accessories',
    url: '/gadgets',
  },
];

const Home: FC = () => (
  <div className="space-y-5 pb-[15vh] md:pb-[20vh]">
    <section className="space-y-3">
      <SectionTitle name="All Categories" />
      <div className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6">
        {navLinks.map((item) => (
          <Link to={item.url} key={item.id} state={{ pageName: item.name }}>
            <div className="space-y-2 justify-self-center hover:cursor-pointer">
              <div className="text-center text-xs capitalize">
                {' '}
                {item.name}
                {' '}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
    <LatestAdSection />
  </div>
);
export default Home;
