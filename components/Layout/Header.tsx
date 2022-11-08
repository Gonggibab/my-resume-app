import React, { useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { MdLanguage } from 'react-icons/md';

let StyledHeader = styled.header`
  z-index: 100;
  position: sticky;
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;

  & > button {
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
      <button onClick={changeLocale}>
        <MdLanguage size={`1.2rem`} />
        {curLanguage}
      </button>
    </StyledHeader>
  );
};

export default Header;
