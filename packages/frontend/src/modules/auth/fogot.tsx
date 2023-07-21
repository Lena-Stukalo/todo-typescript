/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import { useFormik } from 'formik';
import { AuthContainer, Link, } from './index.styled';
import { UserSchemaReset } from '../todo/schemas/user.schema';
import { IUserReset } from '../common/types/user.type';
import { useResetPass } from './hooks/useResetPass';
import { ForgotForm } from './components/authForms/forgot-form.component';

const ForgotPageContainer = () => {
  const mutation = useResetPass();
    const handeleSubmit = (values:IUserReset) => {
      mutation.mutate(values);
    };
    const formValues = {
        email: '',
      };

      const formik = useFormik({
        initialValues: formValues,
        onSubmit: handeleSubmit,
        validationSchema: UserSchemaReset
      });
return <AuthContainer>
  <ForgotForm handleSubmit={formik.handleSubmit} values={formik.values} handleChange={formik.handleChange} />
  <Link to="/login">Back to Login</Link>
</AuthContainer>;
};
export default ForgotPageContainer;
