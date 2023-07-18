/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import { useParams } from 'react-router-dom';
import { TodoInfoComponent } from '../todo/todoInfo/todo-info.component';
import { TodosContainer } from './index.styled';
import { useGetTodoById } from '../todo/hooks/useGetTodoById';
import { Notification } from '../common/components/notification/notification.component';
import { useToggle } from '../todo/hooks/useTogglemodal';
import { ModalComponent } from '../common/components/modal/modal.component';
import { TodoFormComponent } from '../todo/components/addTodoForm/todo-form.component';
import { useUpdateTodo } from '../todo/hooks/useUpdateTodo';
import { ITodoNotId } from '../common/types/todo.types';
import { useDeleteTodo } from '../todo/hooks/useDeleteTodo';

const TodoIdPageContainer = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetTodoById(id!);
  const { isOpen, toggle } = useToggle();
  const mutation = useUpdateTodo();
  const deletion = useDeleteTodo();

  const onDelete = (idTodo: string) => {
    deletion.mutate(idTodo);
  };
  const toggleModal = () => {
    toggle();
  };

  const onSubmit = (idTodo: string, todo: ITodoNotId) => {
    mutation.mutate({ id: idTodo, todo });
  };
  if (isLoading) {
    return <Notification text="...Loading" />;
  }
  if (isError) {
    return <Notification text="!!!Error" />;
  }
  if (data) {
    return (
      <TodosContainer>
        <TodoInfoComponent card={data} onClick={toggleModal} onDelete={onDelete} />
        {isOpen && (
          <ModalComponent onClick={toggleModal}>
            <TodoFormComponent card={data} onSubmit={onSubmit} text="Update your todo" />
          </ModalComponent>
        )}
      </TodosContainer>
    );
  }
};

export default TodoIdPageContainer;
