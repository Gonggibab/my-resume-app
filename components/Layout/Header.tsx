import React, { useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

let StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
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
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
        <Link href="/users">Users List</Link> |{' '}
        <button onClick={changeLocale}>{curLanguage}</button>
      </nav>
    </StyledHeader>
  );
};

export default Header;
