import { FC } from 'react';
import { Card } from 'antd';
import { StarIcon } from '../../assets/icons';
import { ProductCardInt } from '../../utils';

const { Meta } = Card;

const ProductCard: FC<ProductCardInt> = ({ data, type }) => {
  const {
    img, name, price, location, viewsNum,
  } = data;
  return (
    <Card
      cover={<img alt={`${name}`} src={img} className="h-[60vh] w-[2/3]" />}
      className="relative w-fit dark:bg-darkBackgroundColor"
    >
      <Meta
        title={name}
        description={(
          <div className="flex flex-col dark:text-white">
            <div>{location}</div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <span>
                  N
                  {price}
                </span>
                {type && type === 'apartment' ? <span> per annum</span> : ''}
              </div>
              <div>
                <span>
                  {' '}
                  {viewsNum}
                </span>
                {' '}
                <span> Views</span>
              </div>
            </div>
          </div>
        )}
      />
      <span className="absolute right-10 top-[58.3vh] rounded-full border bg-white p-1">
        <StarIcon color="fill-secondaryColor" />
      </span>
    </Card>
  );
};

export default ProductCard;
