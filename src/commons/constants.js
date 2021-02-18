import * as yup from 'yup';

export const DocumentFields = [
  {
    key: 'name',
    display: 'Name*',
    type: 'text',
  },
  {
    key: 'email',
    display: 'Email*',
    type: 'email',
  },
  {
    key: 'phoneNumber',
    display: 'Phone number',
    type: 'text',
  },
  {
    key: 'address',
    display: 'Address',
    type: 'text',
  },
  {
    key: 'ktpNumber',
    display: 'KTP number',
    type: 'text',
  },
  {
    key: 'npwpNumber',
    display: 'Npwp Number',
    type: 'text',
  },
  {
    key: 'passportNumber',
    display: 'Passport Number',
    type: 'text',
  },
];

export const documentValidator = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.string().nullable(),
  address: yup.string().nullable(),
  ktpNumber: yup.string().nullable(),
  npwpNumber: yup.string().nullable(),
  passportNumber: yup.string().nullable(),
});
