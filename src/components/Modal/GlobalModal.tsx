import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, selectModal } from '../../feature/ModalSlice';
import TeamSelect from './TeamSelect';
import Cruit from './Cruit';
import Date from './Date';
import TeamCardInfo from './TeamCardInfo';

type Props = {};
const MODAL_TYPES = {
  TeamModal: 'TeamModal',
  DateModal: 'DateModal',
  CruitModal: 'CruitModal',
  TeamCardModal: 'TeamCardModal'
};
const MODAL_COMPONENTS = [
  {
    type: MODAL_TYPES.TeamModal,
    component: <TeamSelect />,
  },
  {
    type: MODAL_TYPES.DateModal,
    component: <Date />,
  },
  {
    type: MODAL_TYPES.CruitModal,
    component: <Cruit />,
  },
  {
    type: MODAL_TYPES.TeamCardModal,
    component: <TeamCardInfo />,
  }
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
