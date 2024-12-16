'use client';

import * as S from './styles';
import Heading from '../Heading';
import { PaymentCard } from '../PaymentOptions';

export type CardsListProps = {
  cards?: PaymentCard[];
};

const CardsList = ({ cards }: CardsListProps) => (
  <>
    <Heading $lineBottom color="black" size="small" lineColor="primary">
      My cards
    </Heading>

    {cards?.map((card) => (
      <S.Card>
        <img src={card.img} alt={card.flag} />
        <span>{card.number}</span>
      </S.Card>
    ))}
  </>
);

export default CardsList;
