import AccountModify from '@/components/ModifyPersonalData/AccountModify';
import styled from 'styled-components';
type Props = {};

const ModifyPersonalData = (props: Props) => {
  return (
    <Wrap>
      <Wrapper>
        <Header>개인정보변경</Header>
        <AccountModify />
      </Wrapper>
    </Wrap>
  );
};
const Wrap = styled.div`
  padding-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 50px;
`;
const Header = styled.div`
  font-size: 40px;
  font-weight: bold;
`;
export default ModifyPersonalData;
