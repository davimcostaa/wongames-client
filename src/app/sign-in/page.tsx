import FormSignIn from '@/components/FormSignIn';
import Auth from '../templates/auth';

export default function SignIn() {
  return (
    <Auth title="Sign In">
      <FormSignIn />
    </Auth>
  );
}
