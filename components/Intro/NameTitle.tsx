import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

type TitleProps = {
  locale: string;
  animate: boolean;
};

const Title = styled.h1<TitleProps>`
  font-size: ${(p) => (p.locale === 'ko' ? '16vw' : '12vw')};
  font-weight: ${(p) => (p.locale === 'ko' ? '900' : '900')};
  overflow: hidden;

  ${(p) =>
    p.locale === 'en' &&
    css`
      padding: 0.4em 0;
      white-space: pre-wrap;
      line-height: 0.8em;
    `};

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

const NameTitle = ({ children }) => {
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

export default NameTitle;
