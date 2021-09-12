import React, { useEffect, useRef } from 'react';
import { Label, Text, Button, Input } from '../../components/index';
import { Form, ContainerButtons } from './DataUserElements';
import { useDispatch } from 'react-redux';
import { updateView } from '../../stateManagement/actions/actions';
import intlTelInput from 'intl-tel-input';
import { generateId } from '../../utils/generateId';
import { checkNumber } from '../../stateManagement/actions/index';
import { LOGIN_VIEW } from '../../utils/constants';

const DataUser = () => {
  const dispatch = useDispatch();
  const phone = useRef(null);
  const getPhone = useRef(null);
  const name = useRef('');
  const age = useRef('');
  const gender = useRef('');
  useEffect(() => {
    getPhone.current = intlTelInput(phone.current, {
      preferredCountries: ['mx', 'es'],
      utilsScript:
        'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
    });
  }, []);
  const next = async e => {
    e.preventDefault();
    const id = generateId();
    const data = {
      id: getPhone.current.getNumber(),
      phone: getPhone.current.getNumber(),
      name: name.current,
      gender: gender.current,
      age: age.current,
      infoSchedule: [{ id: id }],
    };
    dispatch(checkNumber(data, id));
  };
  const back = () => dispatch(updateView(LOGIN_VIEW));
  return (
    <Form onSubmit={e => next(e)}>
      <Text type='title'>DATOS DEL PACIENTE</Text>
      <Label>
        <Text type={'input'}>Nombre</Text>
        <Input
          type='text'
          pattern='[a-zA-Z]{3,}'
          required
          ref={name}
          onChange={e => (name.current = e.target.value)}
        />
      </Label>
      <Label>
        <Text type={'input'}>Edad</Text>
        <Input
          ref={age}
          type='number'
          min='15'
          max='100'
          required
          onChange={e => (age.current = e.target.value)}
        />
      </Label>
      <Text type={'input'}>Genero</Text>
      <Label type={'radio'}>
        <Text type={'input'}>Hombre</Text>
        <Input
          ref={gender}
          type='radio'
          name='gender'
          value='male'
          onChange={e => (gender.current = e.target.value)}
        />
      </Label>
      <Label type={'radio'}>
        <Text type={'input'}>Mujer</Text>
        <Input
          ref={gender}
          type='radio'
          name='gender'
          value='female'
          onChange={e => (gender.current = e.target.value)}
        />
      </Label>
      <Label>
        <Text>Phone</Text>
        <Input ref={phone} type='tel' pattern='[0-9]{10}' required />
      </Label>
      <ContainerButtons>
        <Button onClick={back}>REGRESAR</Button>
        <Button type='submit'>SIGUIENTE</Button>
      </ContainerButtons>
    </Form>
  );
};

export default DataUser;
