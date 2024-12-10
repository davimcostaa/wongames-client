import { useState } from 'react';

import * as S from './styles';
import { Add, ShoppingCart } from 'styled-icons/material-outlined';
import Heading from '../Heading';
import Radio from '../Radio';
import Button from '../Button';

export type PaymentOptionsProps = {
  cards?: PaymentCard[];
  handlePayment: () => void;
};

export type PaymentCard = {
  number: string;
  flag: string;
  img: string;
};

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineColor="primary" $lineBottom>
          Payment
        </Heading>

        <S.CardsList>
          {cards?.map((card) => (
            <S.CardItem key={card.number}>
              <S.CardInfo>
                <img src={card.img} alt={card.flag} />
              </S.CardInfo>
              <Radio
                labelColor="black"
                labelFor={card.number}
                name="credit-card"
                label={card.number}
                id={card.number}
                value={card.number}
                onCheck={() => setChecked(true)}
              />
            </S.CardItem>
          ))}

          <S.AddCard role="button">
            <Add size={15} /> Add a new credit card
          </S.AddCard>
        </S.CardsList>
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          onClick={handlePayment}
          disabled={!checked}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};

export default PaymentOptions;
