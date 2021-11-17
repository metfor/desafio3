import { CardColor, Cards, Sub, Title } from './styled';
interface CardsProps {
  color: string;
  title: string;
  sub: string;
}

export function Card({ color, title, sub }: CardsProps) {
  return (
    <Cards color="red">
      <CardColor color={color} />
      <Title>{title}</Title>
      <Sub>{sub}</Sub>
    </Cards>
  );
}
