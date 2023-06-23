import { useState } from 'react';
import styled from 'styled-components';
import Restaurant from './Restaurant';

type Props = {};
const tabs = [
  { index: 0, name: '맛집', content: <Restaurant /> },
  { index: 1, name: '관광지', content: '' },
  { index: 2, name: '숙소', content: '' },
];
const CourseTab = (props: Props) => {
  const [tab, settab] = useState(0);
  const handleTab = (state: number) => {
    settab(state);
  };
  return (
    <div>
      <Header>
        {tabs.map((tab) => (
          <p key={tab.index} onClick={() => handleTab(tab.index)}>
            {tab.name}
          </p>
        ))}
      </Header>
      <div>{tabs[tab].content}</div>
    </div>
  );
};
const Header = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export default CourseTab;
