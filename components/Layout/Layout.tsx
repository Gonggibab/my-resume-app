import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Header from 'components/Layout/Header';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Habyte | 습관처럼 코딩하기' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main>{children}</main>
    <footer>
      <span>I&apos;m here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
