import { FC } from 'react';
import { Input } from 'antd';
import { CustomInputInt } from '../../utils';

const CustomInput: FC<CustomInputInt> = ({
  inputType,
  Icon,
  placeholder,
  className,
}) => {
  switch (inputType) {
    case 'inputIcon':
      return (
        <Input
          size="large"
          placeholder={placeholder}
          prefix={Icon}
          className={`${className}`}
        />
      );
    default:
      return <Input placeholder={placeholder} className={`${className}`} />;
  }
};

export default CustomInput;
