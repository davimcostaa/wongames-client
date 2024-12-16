import Profile from '@/app/templates/Profile';
import OrdersHistory from '@/components/OrdersHistory';
import mock from '@/components/OrdersHistory/mock';

const Cards = () => {
  return (
    <Profile>
      <OrdersHistory items={mock} />
    </Profile>
  );
};

export default Cards;
