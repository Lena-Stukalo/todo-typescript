/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useFormik } from 'formik';
import {
  FormStyled,
  ModalInput,
  ModalTextarea,
  ModalWrapper,
  Label,
  Button,
  ChecboxLabel,
  Title,
} from './todo-form.styled';
import { ITodo } from '../../../common/types/todo.types';
import { TodoSchema } from '../../schemas/todo.schema';
import { FormCustomChecbox } from '../../../common/components/checkbox/form-checkbox.component';

interface IProps {
  card?: ITodo;
  onSubmit: Function;
  text: string;
}
export const TodoFormComponent: React.FC<IProps> = ({
  onSubmit,
  card,
  text,
}) => {
  const handeleSubmit = (values:object) => {
    if (card) {
      onSubmit(card.id, { ...card, ...values });
    } else {
      onSubmit(values);
    }
  };
  const formValues = {
    title: '',
    description: '',
    isDone: false,
    isPrivate: false
  };

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: handeleSubmit,
    validationSchema: TodoSchema
  });
  return (

    <FormStyled onSubmit={formik.handleSubmit}>
      <Title>{text}</Title>
      <Label htmlFor="title">
        Nickname
        <ModalInput
          type="text"
          name="title"
          id="title"
          required
          onChange={formik.handleChange}
          value={formik.values.title}
        />
      </Label>
      <ModalWrapper />
      <Label htmlFor="description">Description</Label>
      <ModalWrapper>
        <ModalTextarea
          as="textarea"
          required
          name="description"
          id="description"
          placeholder="Type desctiption"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </ModalWrapper>
      <ChecboxLabel>
        Done
        <FormCustomChecbox
          name="isDone"
          onChange={formik.handleChange}
          value={formik.values.isDone}
        />
      </ChecboxLabel>

      <ChecboxLabel>
        Private
        <FormCustomChecbox
          name="isPrivate"
          onChange={formik.handleChange}
          value={formik.values.isPrivate}
        />
      </ChecboxLabel>

      <Button type="submit">Send</Button>
    </FormStyled>
  );
};
