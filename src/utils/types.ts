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
// Primary - background color-white, border, color - primary color

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

interface LatestAdDataInt {
  id: string;
  name: string;
  price: number;
  location: string;
  img: string;
  viewsNum: number;
}

interface ProductCardInt {
  data: LatestAdDataInt;
  type?: 'apartment';
}

interface CommunityDataInt {
  id: string;
  viewNum: number;
  commentNum: number;
  likeNum: number;
  shareNum: number;
  datePosted: string;
  authorName: string;
  authorImg: string;
  postTitle: string;
  postContent: string;
}

interface CommunityCardInt {
  data: CommunityDataInt;
}

export type {
  ButtonInterface,
  IconInterface,
  CustomInputInt,
  SectionTitleInt,
  ProductCardInt,
  LatestAdDataInt,
  CommunityCardInt,
  CommunityDataInt,
};
