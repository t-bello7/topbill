import { FC } from 'react';

const SectionTitle: FC<{ name: string }> = ({ name }) => (
  <h2 className="font-rubik font-medium capitalize">{name}</h2>
);

export default SectionTitle;
