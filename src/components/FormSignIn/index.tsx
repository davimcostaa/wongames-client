'use client';

import { Email, Lock } from 'styled-icons/material-outlined';
import TextField from '../TextField';
import * as S from './styles';
import Button from '../Button';
import Link from 'next/link';
import { FormLink, FormWrapper } from '../Form';

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />

      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <FormLink>
        Don't have an account? <Link href="/"> Sign up</Link>
      </FormLink>
    </form>
  </FormWrapper>
);

export default FormSignIn;
