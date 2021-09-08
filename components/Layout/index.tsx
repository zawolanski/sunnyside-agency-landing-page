import Footer from 'components/Footer';
import Header from 'components/Header';
import { PropsWithChildren, ReactNode } from 'react';

const Layout = ({ children }: PropsWithChildren<ReactNode>): JSX.Element => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
