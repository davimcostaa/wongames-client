'use client';

import Button from '../Button';
import Heading from '../Heading';
import TextField from '../TextField';
import * as S from './styles';

const FormProfile = () => (
  <>
    <Heading $lineBottom color="black" size="small" lineColor="secondary">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="John Doe"
      />

      <TextField
        name="email"
        type="email"
        placeholder="E-mail"
        initialValue="johndoe@example.com"
        disabled
        label="E-mail"
      />

      <TextField
        name="password"
        type="password"
        placeholder="Type your password"
        label="Password"
      />

      <TextField
        name="new_password"
        type="password"
        placeholder="New password"
        label="New password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </>
);

export default FormProfile;
