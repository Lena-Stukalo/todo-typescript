/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
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
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    isDone: false,
    isPrivate: false
  });
  useEffect(() => {
    if (card) {
      setFormData({ ...card });
    }
  }, [card]);
  const handeleSubmit = (values:object) => {
    if (card) {
      onSubmit(card.id, { ...card, ...values });
    } else {
      onSubmit(values);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      isDone: false,
      isPrivate: false
    },
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
          value={formik.values.title || formData.title}
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
          value={formik.values.description || formData.description}
        />
      </ModalWrapper>
      <ChecboxLabel>
        Done
        <FormCustomChecbox
          name="isDone"
          onChange={formik.handleChange}
          value={formik.values.isDone || formData.isDone}
        />
      </ChecboxLabel>

      <ChecboxLabel>
        Private
        <FormCustomChecbox
          name="isPrivate"
          onChange={formik.handleChange}
          value={formik.values.isPrivate || formData.isPrivate}
        />
      </ChecboxLabel>

      <Button type="submit">Send</Button>
    </FormStyled>
  );
};
