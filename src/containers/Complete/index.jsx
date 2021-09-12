import React from 'react';
import { Button } from '../../components/Button';
import {
  Done,
  ContainerButtons,
  WrapperContainer,
  Table,
  Thead,
  Th,
  Tbody,
  Td,
  Tr,
} from './CompleteElements';
import {
  deleteSchedule,
  setId,
  addSchedule,
  currentUser,
  updateView,
} from '../../stateManagement/actions/actions';
import {
  CurrentInfoSchedule,
  UserInfo,
} from '../../stateManagement/selectors/selectors';
import { useDispatch } from 'react-redux';
import { generateId } from '../../utils/generateId';
import { COMPLETE_VIEW, DISEASE_VIEW, LOGIN_VIEW } from '../../utils/constants';
import { useEffect } from 'react';

const Complete = () => {
  const userInfo = UserInfo();
  const currentInfoSchedule = CurrentInfoSchedule();
  const dispatch = useDispatch();
  const id = generateId();
  const backLogin = () => {
    const reset = {
      id: '',
      phone: '',
      name: '',
      gender: '',
      age: '',
      infoSchedule: [],
    };
    dispatch(setId(''));
    dispatch(currentUser(reset));
    localStorage.removeItem('currentUserReducer');
    localStorage.removeItem('currentInfoSchedule');
    localStorage.removeItem('viewReducer');
    dispatch(updateView(LOGIN_VIEW));
  };
  const newSchedule = () => {
    dispatch(setId(id));
    dispatch(addSchedule(id));
    dispatch(updateView(DISEASE_VIEW));
  };
  const deleteItem = id => {
    dispatch(deleteSchedule(id));
  };
  const editItem = id => {
    dispatch(setId(id));
    dispatch(updateView(DISEASE_VIEW));
  };
  useEffect(() => {
    localStorage.setItem(
      'viewReducer',
      JSON.stringify({ view: COMPLETE_VIEW })
    );
    localStorage.setItem('currentUserReducer', JSON.stringify(userInfo));
    localStorage.setItem(
      'currentInfoSchedule',
      JSON.stringify(currentInfoSchedule)
    );
  }, [userInfo]);
  return (
    <WrapperContainer>
      <Done>CITAS AGENDADAS</Done>
      <Table>
        <Thead>
          <Tr>
            <Th>Fecha cita</Th>
            <Th>Hora</Th>
            <Th>Sintomas presentados</Th>
            <Th>Opciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {userInfo.infoSchedule.map(el => (
            <Tr key={el.date + el.time + el.disease}>
              <Td>{el.date}</Td>
              <Td>{el.time}</Td>
              <Td>{el.disease}</Td>
              <Td>
                <Button type='delete' onClick={() => deleteItem(el.id)}>
                  BORRAR
                </Button>
                <Button type='edit' onClick={() => editItem(el.id)}>
                  EDITAR
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <ContainerButtons>
        <Button onClick={newSchedule}>Nueva cita</Button>
        <Button onClick={backLogin}>SALIR</Button>
      </ContainerButtons>
    </WrapperContainer>
  );
};

export default Complete;
