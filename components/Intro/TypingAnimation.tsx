import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';

type TextProps = {
  locale: string;
};

const cursor = (p) => keyframes` 
  to {
    border-right: 0.05em solid ${p.theme.colors.black};
  }
`;

const Text = styled.p<TextProps>`
  display: table-cell;
  padding: 0 0.1em;
  font-size: ${(p) => (p.locale === 'ko' ? '3rem' : '3rem')};
  font-weight: ${(p) => (p.locale === 'ko' ? '100' : '100')};
  vertical-align: middle;
  border: transparent;
  animation: ${cursor} 0.6s ease infinite;

  &:before {
    content: '';
    display: inline-block;
  }
`;

type TypingProps = {
  texts: string[];
};

const TypingAnimation = ({ texts }: TypingProps) => {
  const { locale } = useRouter();
  const interval = useRef<NodeJS.Timeout>(null);
  const typingInterval = useRef<NodeJS.Timeout>(null);
  const [text, setText] = useState<string>(' ');

  const typing = useCallback(
    (delay: number) => {
      let listIdx = 0;
      let textIdx = 0;
      let isTyping = true;
      interval.current = setInterval(() => {
        if (isTyping) {
          const char = texts[listIdx][textIdx++];

          if (typeof char === 'string') {
            setText((text) => text + char);
          }
        } else {
          textIdx--;
          setText((text) => text.slice(0, -1));
        }

        if (textIdx <= 0) {
          listIdx + 1 >= texts.length ? (listIdx = 0) : listIdx++;
          isTyping = true;
        }

        if (textIdx > texts[listIdx].length) {
          isTyping = false;
        }
      }, delay);
    },
    [locale]
  );

  useEffect(() => {
    setText('');
    clearInterval(interval.current);
    clearInterval(typingInterval.current);

    typingInterval.current = setInterval(() => {
      typing(locale === 'ko' ? 150 : 100);
      clearInterval(typingInterval.current);
    }, 2000);
  }, [locale]);

  return <Text locale={locale}>{text}</Text>;
};

export default TypingAnimation;
