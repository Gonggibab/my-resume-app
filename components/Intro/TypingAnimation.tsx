import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

type TextProps = {
  locale: string;
  animate: boolean;
};

const Text = styled.p<TextProps>`
  display: table-cell;
  padding: 0 0.1em;
  font-size: ${(p) => (p.locale === 'ko' ? '6vw' : '5vw')};
  font-weight: ${(p) => (p.locale === 'ko' ? '100' : '100')};
  vertical-align: middle;
  border: transparent;
  ${(p) =>
    p.animate &&
    css`
      animation: cursor 0.6s ease infinite;
    `};

  @keyframes cursor {
    to {
      border-right: 0.05em solid ${(p) => p.theme.colors.black};
    }
  }

  &:before {
    content: '';
    display: inline-block;
  }
`;

const TypingAnimation = ({ children }) => {
  const { locale } = useRouter();
  const interval = useRef<NodeJS.Timeout>(null);
  const typingInterval = useRef<NodeJS.Timeout>(null);
  const [text, setText] = useState<string>(' ');
  const [animate, setAnimate] = useState<boolean>(false);

  const typing = useCallback(
    (delay: number) => {
      let n = 0;
      interval.current = setInterval(() => {
        const char = children[n++];
        if (typeof char === 'string') {
          setText((text) => text + char);
        }

        if (n >= children.length) {
          clearInterval(interval.current);

          const animateInterval = setInterval(() => {
            setAnimate(false);
            clearInterval(animateInterval);
          }, 3000);
        }
      }, delay);
    },
    [locale]
  );

  useEffect(() => {
    setText('');
    setAnimate(false);
    clearInterval(interval.current);
    clearInterval(typingInterval.current);

    typingInterval.current = setInterval(() => {
      setAnimate(true);
      typing(locale === 'ko' ? 200 : 100);
      clearInterval(typingInterval.current);
    }, 2000);
  }, [locale]);

  return (
    <Text locale={locale} animate={animate}>
      {text}
    </Text>
  );
};

export default TypingAnimation;
