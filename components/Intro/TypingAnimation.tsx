import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

type TextProps = {
  size?: string;
  weight?: string;
  length: number;
};

const Text = styled.p<TextProps>`
  display: table-cell;
  padding: 0 0.05em;
  font-size: ${(p) => (p.size ? p.size : 'inherit')};
  font-weight: ${(p) => (p.size ? p.weight : 'inherit')};
  vertical-align: middle;
  border: transparent;
  animation: cursor 0.5s ease ${(p) => p.length};

  @keyframes cursor {
    to {
      border-right: 0.05em solid ${({ theme }) => theme.colors.black};
    }
  }
`;

type TypingProps = {
  size?: string;
  weight?: string;
  children: string;
};

const TypingAnimation = ({ size, weight, children }: TypingProps) => {
  const router = useRouter();
  const interval = useRef<NodeJS.Timeout>(null);
  const [text, setText] = useState<string>('');

  const typing = useCallback(() => {
    let n = 0;
    interval.current = setInterval(() => {
      const char = children[n++];
      if (typeof char === 'string') {
        setText((text) => text + char);
      }

      if (n >= children.length) {
        clearInterval(interval.current);
      }
    }, 200);
  }, [router.locale]);

  useEffect(() => {
    setText('');
    clearInterval(interval.current);
    typing();
  }, [router.locale]);

  return (
    <Text size={size} weight={weight} length={children.length}>
      {text}{' '}
    </Text>
  );
};

export default TypingAnimation;
