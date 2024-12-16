import Profile from '@/app/templates/Profile';
import CardsList from '@/components/CardsList';
import mockCards from '@/components/PaymentOptions/mock';

const Cards = () => {
  return (
    <Profile>
      <CardsList cards={mockCards} />
    </Profile>
  );
};

export default Cards;
