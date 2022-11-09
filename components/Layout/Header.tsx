import React, { useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { MdLanguage } from 'react-icons/md';

const StyledHeader = styled.header`
  z-index: 100;
  position: absolute;
  top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  width: 100vw;

  & > img {
    cursor: pointer;
  }
`;

const NavBar = styled.nav`
  & > a {
    margin: 0 4rem;
    font-size: 1rem;
    font-weight: 900;
  }
`;

const ChangeLocale = styled.button`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }

  & > svg {
    margin: 2px 4px 0 0;
  }
`;

const Header = () => {
  const router = useRouter();
  const { locale, locales, defaultLocale, pathname } = router;
  const curLocale = locale || defaultLocale || locales[0];
  const curLanguage = curLocale === 'ko' ? 'English' : '한국어';

  const changeLocale = useCallback(() => {
    const nextLocale =
      locales.filter((loc) => loc !== curLocale)[0] || defaultLocale;

    document.documentElement.lang = curLocale;

    router.push(pathname, pathname, { locale: nextLocale });
  }, [curLocale]);

  return (
    <StyledHeader>
      <img
        src="/logo.png"
        alt="로고"
        width={50}
        height={30}
        onClick={() => router.push('/')}
      />
      <NavBar>
        <Link href={'skills'}>스킬</Link>
        <Link href={'projects'}>프로젝트</Link>
      </NavBar>
      <ChangeLocale onClick={changeLocale}>
        <MdLanguage size={`1.2rem`} />
        {curLanguage}
      </ChangeLocale>
    </StyledHeader>
  );
};

export default Header;
