import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, selectModal } from '../../feature/ModalSlice';
import SearchModal from './SearchModal';
type Props = {};
const MODAL_TYPES = {
  SearchModal: 'SearchModal',
};
const MODAL_COMPONENTS = [
  {
    type: MODAL_TYPES.SearchModal,
    component: <SearchModal />,
  },
];

const GlobalModal = (props: Props) => {
  const { modalType, isOpen } = useSelector(selectModal);
  const dispatch = useDispatch();
  if (!isOpen) return null;
  const findModal = MODAL_COMPONENTS.find((modal) => {
    return modal.type === modalType;
  });
  const renderModal = () => {
    return findModal?.component;
  };
  return (
    <Container>
      <Overlay onClick={() => dispatch(closeModal())} />
      {renderModal()}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  z-index: 1;
`;
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;
export default GlobalModal;
