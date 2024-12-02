import Button from '../Button';
import Heading from '../Heading';
import Ribbon from '../Ribbon';

import * as S from './styles';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

export type GameInfoProps = {
  title: string;
  description: string;
  price: string;
};

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" $lineBottom>
      {title}
    </Heading>

    <S.GameDescription>{description}</S.GameDescription>
    <Ribbon color="secondary">{`$${price}`}</Ribbon>

    <S.ButtonsWrapper>
      <Button size="large" icon={<AddShoppingCart />} minimal>
        Wishlist
      </Button>
      <Button size="large" icon={<AddShoppingCart />}>
        Add to cart
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
);

export default GameInfo;
