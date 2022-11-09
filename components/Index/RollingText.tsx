import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled, { css, keyframes } from 'styled-components';

type TitleProps = {
  locale: string;
};

type CharProps = {
  delay: string;
  animate: boolean;
};

const Title = styled.h1<TitleProps>`
  display: flex;
  margin: 0.4em 0;
  font-size: ${(p) => (p.locale === 'ko' ? '12rem' : '12rem')};
  font-weight: ${(p) => (p.locale === 'ko' ? '900' : '900')};
  overflow: hidden;

  ${(p) =>
    p.locale === 'en' &&
    css`
      padding: 0.4em 0;
      white-space: pre-wrap;
      line-height: 0.8em;
    `};
`;

const roll = keyframes`
  0% {
    transform: translate(-300%, 0) rotate(0deg);
  }
  100% {
    transform: translate(0, 0) rotate(360deg);
  }
`;

const startRoll = (delay) => css`
  animation: ${roll} ${delay} cubic-bezier(0.19, 0.67, 0.66, 0.58) forwards;
`;

const Char = styled.div<CharProps>`
  display: block;
  transform: translate(-300%, 0);
  ${(p) => p.animate && startRoll(p.delay)}
`;

type RollingTextProps = {
  text: string;
};

const RollingText = ({ text }: RollingTextProps) => {
  const { locale } = useRouter();
  const [animate, setAnimate] = useState<boolean>(true);

  useEffect(() => {
    setAnimate(false);

    const animateInterval = setInterval(() => {
      setAnimate(true);
      clearInterval(animateInterval);
    }, 100);
  }, [locale]);

  const divideText = text.split('').map((child, idx) => {
    if (typeof child === 'string') {
      const delay = idx + 2 - idx * 1.1 + 's';
      return (
        <Char key={idx} delay={delay} animate={animate}>
          {child}
        </Char>
      );
    }
  });

  return <Title locale={locale}>{divideText}</Title>;
};

export default RollingText;
