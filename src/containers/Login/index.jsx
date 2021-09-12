import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Text, Button } from '../../components/index';
import { Form, H1 } from './LoginElements';
import { updateView } from '../../stateManagement/actions/actions';
import intlTelInput from 'intl-tel-input';
import { validateNumber } from '../../stateManagement/actions/index';
import { DATA_VIEW } from '../../utils/constants';

const Login = () => {
  const dispatch = useDispatch();
  const register = () => dispatch(updateView(DATA_VIEW));
  const phone = useRef(null);
  const getNumber = useRef(null);
  useEffect(() => {
    getNumber.current = intlTelInput(phone.current, {
      preferredCountries: ['mx', 'es'],
      utilsScript:
        'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
    });
  }, []);
  const next = async e => {
    e.preventDefault();
    dispatch(validateNumber(getNumber.current.getNumber()));
  };
  return (
    <Form onSubmit={e => next(e)}>
      <H1>AGENDA TU CITA</H1>
      <Text type='title'>¿Ya eres usuario?</Text>
      <Text>Ingresa tu número</Text>
      <Input type='tel' ref={phone} required pattern='[0-9]{10}' />
      <Button type='submit'>Entrar</Button>
      <Text type='link' onClick={register}>
        o registrate...
      </Text>
    </Form>
  );
};

export default Login;
