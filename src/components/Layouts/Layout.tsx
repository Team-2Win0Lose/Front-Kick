import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <DIV>
      <Header />

      <main>{props.children}</main>

      <Footer />
    </DIV>
  );
};
const DIV = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default Layout;
