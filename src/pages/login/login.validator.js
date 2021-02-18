import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  username: yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
  password: yup.string().required('Required'),
});
