import { ReactNode } from 'react';

interface ButtonInterface {
  variant?: 'icon' | 'iconButton';
  text?: string;
  isLoading?: boolean;
  Icon?: ReactNode;
  disabled?: boolean;
  className?: string;
  styleType?: 'primary' | 'secondary' | 'disabled';
  onClick?: () => void;
}

interface IconInterface {
  color: string;
}

interface CustomInputInt {
  inputType: 'dropDown' | 'basic' | 'inputIcon';
  Icon?: ReactNode;
  placeholder: string;
  className?: string;
}

interface SectionTitleInt {
  name: string;
}

interface ClientsDataInt {
  id: string;
  firstName: string;
  lastName: string;
  clientImg: string;
  totalAmount: number;
  email: string;
}

interface ClientsCardInt {
  data: ClientsDataInt;
}

interface ReportDataInt {
  id: string;
  cardTitle: string;
  cardIcon: ReactNode;
  chartIcon: ReactNode;
  increase: boolean;
  cardNum: string;
}
interface ReportCardInt {
  data: ReportDataInt;
}

interface InvoiceDataInt {
  id: string;
  clientImg: string;
  totalAmount: number;
  dueDate: string;
  paid: boolean;
  firstName: string;
  lastName: string;
}

interface InvoiceCardInt {
  data: InvoiceDataInt;
}

export type {
  ButtonInterface,
  IconInterface,
  CustomInputInt,
  SectionTitleInt,
  ClientsCardInt,
  ClientsDataInt,
  ReportDataInt,
  ReportCardInt,
  InvoiceCardInt,
  InvoiceDataInt,
};
