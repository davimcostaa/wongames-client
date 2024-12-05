import { Apple, Windows, Linux } from '@styled-icons/fa-brands';

import Heading from '../Heading';
import MediaMatch from '../MediaMatch';
import * as S from './styles';

type Platform = 'windows' | 'linux' | 'mac';
type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18';

export type GameDetailsProps = {
  developer: string;
  platforms: Platform[];
  releaseDate: string;
  publisher: string;
  rating: Rating;
  genres: string[];
};

const GameDetails = ({
  developer,
  platforms,
  releaseDate,
  rating,
  genres,
  publisher,
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={18} />,
    windows: <Windows title="Windows" size={18} />,
  };

  return (
    <S.Wrapper>
      <MediaMatch $greaterThan="small">
        <Heading $lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Title>Developer</S.Title>
          <S.Description>{developer}</S.Description>
        </S.Block>
        <S.Block>
          <S.Title>Release Date</S.Title>
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>
        <S.Block>
          <S.Title>Platforms</S.Title>
          <S.IconsWrapper>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>
        <S.Block>
          <S.Title>Publisher</S.Title>
          <S.Description>{publisher}</S.Description>
        </S.Block>
        <S.Block>
          <S.Title>Rating</S.Title>
          <S.Description>
            {rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}
          </S.Description>
        </S.Block>
        <S.Block>
          <S.Title>Genres</S.Title>
          <S.Description> {genres.join(' / ')} </S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  );
};

export default GameDetails;
