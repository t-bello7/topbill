import { FC } from 'react';
import { Avatar, Card, Badge } from 'antd';
import { InvoiceCardInt } from '../../utils';

const { Meta } = Card;

const InvoiceCard: FC<InvoiceCardInt> = ({ data }) => {
  const {
    clientImg, totalAmount, firstName, lastName, dueDate, paid,
  } = data;
  return (
    <Card className="w-[50ch]">
      <Meta
        description={(
          <div>
            <div className="grid grid-cols-2">
              <span> Invoice number </span>
              {paid ? (
                <Badge className="justify-self-end"> Paid </Badge>
              ) : (
                <Badge className="justify-self-end"> Unpaid </Badge>
              )}
            </div>
            <div className="grid grid-cols-3">
              <Avatar src={clientImg} />
              <div>
                <div>
                  {' '}
                  {firstName}
                  {' '}
                  {lastName}
                  {' '}
                </div>
                <div>
                  {' '}
                  {dueDate}
                  {' '}
                </div>
              </div>
              <span className="justify-self-end">
                {' '}
                $
                {totalAmount}
              </span>
            </div>
          </div>
        )}
      />
    </Card>
  );
};

export default InvoiceCard;
