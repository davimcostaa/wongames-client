'use client';

import Heading from '@/components/Heading';
import Base from '../Base';

import GameCard, { GameCardProps } from '@/components/GameCard';
import Showcase from '@/components/Showcase';
import { Container } from '@/components/Container';
import { Grid } from '@/components/Grid';
import { HighlightProps } from '@/components/Highlight';
import { Divider } from '@/components/Divider';
import Empty from '@/components/Empty';

export type WishlistTemplateProps = {
  games?: GameCardProps[];
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight,
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading $lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games && games?.length >= 1 ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard {...game} key={`wishlist-${index}`} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games addes to your wishlist will appear here"
          hasLink
        />
      )}

      <Divider />
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
);

export default Wishlist;
