import * as S from './styles';

export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  $lineLeft?: boolean;
  $lineBottom?: boolean;
  size?: 'small' | 'medium';
  lineColor: LineColors;
};

const Heading = ({
  children,
  color = 'white',
  $lineLeft = false,
  $lineBottom = false,
  lineColor = 'primary',
  size = 'medium',
}: HeadingProps) => (
  <S.Wrapper
    lineColor={lineColor}
    color={color}
    $lineLeft={$lineLeft}
    $lineBottom={$lineBottom}
    size={size}
  >
    {children}
  </S.Wrapper>
);

export default Heading;
