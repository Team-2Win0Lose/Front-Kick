import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
type Props = {};

const RegisterTeam = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Form>
        <Comment>아직 선택한 구단 카드가 없어요</Comment>
        <RegistBtn onClick={() => navigate('/selectteam')}>
          구단 카드 등록하기
        </RegistBtn>
      </Form>
    </Wrap>
  );
};
const Wrap = styled.div`
  background-color: #1f1f45;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 333px;
  height: 246px;
  background: #ffffff;
  border: 0.522796px solid #5956ff;
  box-shadow: 0px 2.09119px 2.09119px rgba(0, 0, 0, 0.25);
  border-radius: 15.6839px;
`;
const Comment = styled.p`
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: #868686;
`;
const RegistBtn = styled.button`
  width: 156px;
  height: 41px;
  font-weight: 700;
  font-size: 14px;
  border: 1px solid #000000;
  border-radius: 20px;
`;
export default RegisterTeam;
