import Link from 'next/link';
import * as S from './styles';
import {
  AccountCircle,
  CreditCard,
  FormatListBulleted,
  ExitToApp,
} from 'styled-icons/material-outlined';

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders';
};

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me" style={{ textDecoration: 'none' }}>
      <S.Link isActive={activeLink === '/profile/me'} title="My profile">
        <AccountCircle size={24} />
        <span>My profile</span>
      </S.Link>
    </Link>

    <Link href="/profile/cards" style={{ textDecoration: 'none' }}>
      <S.Link isActive={activeLink === '/profile/cards'} title="My cards">
        <CreditCard size={24} />
        <span>My cards</span>
      </S.Link>
    </Link>

    <Link href="/profile/orders" style={{ textDecoration: 'none' }}>
      <S.Link isActive={activeLink === '/profile/orders'} title="My orders">
        <FormatListBulleted size={24} />
        <span>My orders</span>
      </S.Link>
    </Link>

    <Link href="/logout" style={{ textDecoration: 'none' }}>
      <S.Link>
        <ExitToApp size={24} />
        <span>Sign out</span>
      </S.Link>
    </Link>
  </S.Nav>
);

export default ProfileMenu;
