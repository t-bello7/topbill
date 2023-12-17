import { FC } from 'react';
// import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  ReportIcon, MoneyIcon, PeopleIcon, ChartIcon,
} from '../assets/icons';
import { SectionTitle } from '../components/atoms';
import { ReportCard } from '../components/molecules';
import { ReportDataInt } from '../utils';

const reportData: ReportDataInt[] = [
  {
    id: uuidv4(),
    cardTitle: 'Total Revenue',
    increase: true,
    cardNum: '$ 512k',
    cardIcon: <MoneyIcon color="stroke-successColor" />,
    chartIcon: <ChartIcon color="fill-successColor" />,
  },
  {
    id: uuidv4(),
    cardTitle: 'Total Invoices',
    increase: false,
    cardNum: '343',
    cardIcon: <ReportIcon color="fill-dangerColor" />,
    chartIcon: <ChartIcon color="fill-dangerColor" />,
  },
  {
    id: uuidv4(),
    cardTitle: 'Total Clients',
    increase: true,
    cardNum: '342',
    cardIcon: <PeopleIcon color="stroke-primaryColor" />,
    chartIcon: <ChartIcon color="fill-primaryColor" />,
  },
];

const Home: FC = () => (
  <div className="space-y-5 pb-[10vh] md:pb-[20vh]">
    <section className="space-y-3">
      <SectionTitle name="Reports" />
      <div className="grid gap-2 md:grid-cols-3">
        {reportData.map((item) => (
          <ReportCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  </div>
);
export default Home;
