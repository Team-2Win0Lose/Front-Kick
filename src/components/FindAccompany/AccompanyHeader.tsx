import CruitFilter from './Header/CruitFilter';
import DateFilter from './Header/DateFilter';
import TeamFilter from './Header/TeamFilter';
import styled from 'styled-components';
type Props = {};

const AccompanyHeader = (props: Props) => {
  return (
    <Header>
      <TeamFilter />
      <DateFilter />
      <CruitFilter />
    </Header>
  );
};
const Header = styled.div`
  margin: 0 auto;
  display: flex;
  width: 60%;
  justify-content: center;
  align-content: center;
  gap: 10px;
`;
export default AccompanyHeader;
