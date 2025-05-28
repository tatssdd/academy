import { Card } from 'antd';
import type { HomeEventCardProps } from '../types/types';
import styled from '@emotion/styled';

const MainCard = styled(Card)`
  width: 13rem !important;
  height: 17rem !important;
`;

export const HomeEventCard = ({ title, description }: HomeEventCardProps) => {
  return (
    <MainCard>
      <h2>{title}</h2>
      <p>{description}</p>
    </MainCard>
  );
};
