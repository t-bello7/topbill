import { FC } from 'react';
import { Card } from 'antd';
import { ChartDownIcon, ChartUpIcon } from '../../assets/icons';
import { ReportCardInt } from '../../utils';

const { Meta } = Card;
const ReportCard: FC<ReportCardInt> = ({ data }) => {
  const {
    cardTitle, cardIcon, increase, cardNum, chartIcon,
  } = data;
  return (
    <Card>
      <Meta
        title={(
          <h3>
            {' '}
            {cardTitle}
            {' '}
          </h3>
)}
        description={(
          <div className="space-y-4">
            <div className="grid grid-cols-2">
              <span className="font-roboto text-xl">{cardNum}</span>
              <span className="justify-self-end">{cardIcon}</span>
            </div>
            <div className="grid grid-cols-2 items-center">
              <span className="flex items-center gap-2">
                {increase ? (
                  <ChartUpIcon color="fill-successColor" />
                ) : (
                  <ChartDownIcon color="fill-dangerColor" />
                )}
                {' '}
                <span>than last month</span>
              </span>
              <span className="justify-self-end">{chartIcon}</span>
            </div>
          </div>
        )}
      />
    </Card>
  );
};

export default ReportCard;
