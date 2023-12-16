import { FC } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { AdvancedImage } from '@cloudinary/react';
import { crop } from '@cloudinary/url-gen/actions/resize';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import { SectionTitle } from '../components/atoms';
import { LatestAdSection } from '../components/elements';
import { cld } from '../utils';

const categoryImageResize = (publicId: string) => cld
  .image(publicId)
  .resize(crop().width(150).height(150))
  .roundCorners(byRadius(20));
const navLinks = [
  {
    id: uuidv4(),
    name: 'community',
    img: categoryImageResize('home/community'),
    url: '/community',
  },
  {
    id: uuidv4(),
    name: 'apartments',
    img: categoryImageResize('home/apartments'),
    url: '/apartments',
  },
  {
    id: uuidv4(),
    name: 'Phones, tablets & Accessories',
    img: categoryImageResize('home/gadgets'),
    url: '/gadgets',
  },
  {
    id: uuidv4(),
    name: 'electronics',
    img: categoryImageResize('home/electronics'),
    url: '/electronics',
  },
  {
    id: uuidv4(),
    name: 'Fashion',
    img: categoryImageResize('home/fashion'),
    url: '/fashion',
  },
  {
    id: uuidv4(),
    name: 'Health & beauty',
    img: categoryImageResize('home/beauty'),
    url: '/beauty',
  },
  {
    id: uuidv4(),
    name: 'scholarships',
    img: categoryImageResize('home/scholarships'),
    url: '/scholarships',
  },
  {
    id: uuidv4(),
    name: 'Parties & Events',
    img: categoryImageResize('home/dj'),
    url: '/events',
  },
  {
    id: uuidv4(),
    name: 'Freelance Jobs & Gigs',
    img: categoryImageResize('home/jobs'),
    url: '/jobs',
  },
  {
    id: uuidv4(),
    name: 'services',
    img: categoryImageResize('home/services'),
    url: '/services',
  },
  {
    id: uuidv4(),
    name: 'training',
    img: categoryImageResize('home/training'),
    url: '/trainings',
  },
  {
    id: uuidv4(),
    name: 'food',
    img: categoryImageResize('home/food'),
    url: '/food',
  },
  {
    id: uuidv4(),
    name: 'books & study materials',
    img: categoryImageResize('home/books'),
    url: '/book',
  },
  {
    id: uuidv4(),
    name: 'Flasks & other wares',
    img: categoryImageResize('home/others'),
    url: '/others',
  },
  {
    id: uuidv4(),
    name: 'artworks',
    img: categoryImageResize('home/artwork'),
    url: '/artworks',
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
              <AdvancedImage cldImg={item.img} />
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
