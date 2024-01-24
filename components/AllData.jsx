export const Inputs = (val) => {
  return [
    {
      id: 'firstName',
      type: 'text',
      label: 'First Name',
      value: val?.firstName,
      placeholder: 'Enter first name',
      required: true,
    },
    {
      id: 'lastName',
      type: 'text',
      label: 'Last Name',
      value: val?.lastName,
      placeholder: 'Enter last name',
      required: true,
    },
    {
      id: 'age',
      type: 'number',
      label: 'Age',
      value: val?.age,
      placeholder: 'Enter age',
      required: true,
    },
    {
      id: 'Email',
      type: 'email',
      label: 'Email',
      value: val?.email,
      placeholder: 'Enter Email',
      required: true,
    },

    {
      id: 'phoneNumber',
      label: 'Phone Number',
      type: 'number',
      value: val?.phoneNumber,
      placeholder: 'Enter phone number',
      required: false,
    },
    {
      id: 'insuranceProvider',
      type: 'text',
      label: 'Insurance Provider',
      value: val?.insuranceProvider,
      placeholder: 'Enter Insurance Provider',
      required: true,
    },
  ];
};
