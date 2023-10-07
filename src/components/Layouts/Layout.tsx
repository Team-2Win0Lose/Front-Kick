import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      <Main>{props.children}</Main>

      {/* <Footer /> */}
    </>
  );
};
const Main = styled.main`
  /* padding: 200px 0; */
`;
export default Layout;
