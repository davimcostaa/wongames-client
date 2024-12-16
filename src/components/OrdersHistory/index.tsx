'use client';

import Empty from '../Empty';
import GameItem, { GameItemProps } from '../GameItem';
import Heading from '../Heading';
import * as S from './styles';

export type OrdersListProps = {
  items?: GameItemProps[];
};

const OrdersHistory = ({ items }: OrdersListProps) => (
  <S.Wrapper>
    <Heading $lineBottom color="black" size="small" lineColor="secondary">
      My orders
    </Heading>

    {items?.length ? (
      items?.map((item) => <GameItem key={item.downloadLink} {...item} />)
    ) : (
      <Empty
        title="Your have no orders yet"
        description="Go back to the store and explore great games and offers"
        hasLink
      />
    )}
  </S.Wrapper>
);

export default OrdersHistory;
