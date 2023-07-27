import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdTune } from 'react-icons/md';
import { openModal } from '../../../feature/ModalSlice';
type Props = {};

const Filter = (props: Props) => {
  const dispatch = useDispatch();
  const handleOpenSearchModal = () => {
    dispatch(
      openModal({
        modalType: 'SearchModal',
        isOpen: true,
      }),
    );
  };

  return (
    <FilterBtn onClick={handleOpenSearchModal}>
      <MdTune />
      <FilterTxt>필터</FilterTxt>
    </FilterBtn>
  );
};

const FilterBtn = styled.div`
  width: 61px;
  height: 29px;
  display: flex;
  border: none;
  border-radius: 12px;
  background-color: #eee;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;
const FilterTxt = styled.p`
  font-size: 12px;
  font-weight: bold;
`;
export default Filter;
