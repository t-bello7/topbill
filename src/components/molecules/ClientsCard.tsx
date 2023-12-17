import { FC } from 'react';
import { Avatar, Card } from 'antd';
import { ClientsCardInt } from '../../utils';

const { Meta } = Card;

const ClientsCard: FC<ClientsCardInt> = ({ data }) => {
  const {
    clientImg, totalAmount, firstName, lastName, email,
  } = data;
  return (
    <Card className="w-[50ch]">
      <Meta
        description={(
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
                {email}
                {' '}
              </div>
            </div>
            <span className="justify-self-end">
              {' '}
              $
              {totalAmount}
            </span>
          </div>
        )}
      />
    </Card>
  );
};

export default ClientsCard;
