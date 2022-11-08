import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

type TitleProps = {
  locale: string;
  animate: boolean;
};

const Title = styled.h1<TitleProps>`
  margin: 0.4em 0.1em;
  font-size: ${(p) => (p.locale === 'ko' ? '4rem' : '4rem')};
  font-weight: ${(p) => (p.locale === 'ko' ? '500' : '300')};
  overflow: hidden;

  & > span {
    display: block;
    transform: translate(0, 130%);
    animation: backwards;

    ${(p) =>
      p.animate &&
      css`
        animation: reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
      `};

    @keyframes reveal {
      0% {
        transform: translate(0, 130%);
      }
      100% {
        transform: translate(0, 0);
      }
    }
  }
`;

const LiftText = ({ children }) => {
  const { locale } = useRouter();
  const [animate, setAnimate] = useState<boolean>(true);

  useEffect(() => {
    setAnimate(false);

    const animateInterval = setInterval(() => {
      setAnimate(true);
      clearInterval(animateInterval);
    }, 100);
  }, [locale]);

  return (
    <Title locale={locale} animate={animate}>
      <span>{children}</span>
    </Title>
  );
};

export default LiftText;
