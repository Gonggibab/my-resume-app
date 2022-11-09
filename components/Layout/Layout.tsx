import React, { ReactNode } from 'react';
import Head from 'next/head';

import Header from 'components/Layout/Header';

type Props = {
  children?: ReactNode;
  title?: string;
  footer?: boolean;
};

const Layout = ({
  children,
  title = '정진우 | 프론트엔드 포트폴리오',
  footer = false,
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main>{children}</main>
    {footer && (
      <footer>
        <span>I&apos;m here to stay (Footer)</span>
      </footer>
    )}
  </div>
);

export default Layout;
