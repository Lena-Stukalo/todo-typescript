/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { useNavigate } from 'react-router-dom';
import { Link, LinkWraper, TodosContainer } from './index.styled';
import { useGetAllTodos } from '../todo/hooks/useGetAllTodos';
import { Notification } from '../common/components/notification/notification.component';
import { Button } from '../common/components/button/button.component';
import { useToggle } from '../todo/hooks/useTogglemodal';
import { ModalComponent } from '../common/components/modal/modal.component';
import { TodoFormComponent } from '../todo/components/addTodoForm/todo-form.component';
import { useCreateTodo } from '../todo/hooks/useCreateTodo';
import { ITodoNotId } from '../common/types/todo.types';
import { useDeleteTodo } from '../todo/hooks/useDeleteTodo';
import Loader from '../common/components/loader/loader.component';
import { TodoContent } from '../todo/components/todoContent/todo-content.component';

const TodosPageContainer = () => {
    const { data, isLoading, isError } = useGetAllTodos();
    const { isOpen, toggle } = useToggle();
    const mutation = useCreateTodo();
    const deletion = useDeleteTodo();
    const navigate = useNavigate();

    const toggleModal = () => {
        toggle();
    };
    const onSubmit = (todo: ITodoNotId) => {
        mutation.mutate(todo);
    };
    const onDelete = (id: string) => {
        deletion.mutate(id);
    };
    const handleView = (id:string) => {
        navigate(`/todo/${id}`);
      };

    if (isLoading) {
        return <Loader />;
    }
    if (isError) {
        return <Notification text="!!!Error" />;
    }
    if (data) {
        return (
          <TodosContainer>
            {!data.length ? <Notification text="You dont have any todo" /> : <TodoContent data={data} onDelete={onDelete} onView={handleView} />}
            <LinkWraper>
              <Button text="Add todo" onClick={toggleModal} />
              <Link to="/profile">Profile</Link>
            </LinkWraper>
            {isOpen && <ModalComponent onClick={toggleModal}>
              <TodoFormComponent onSubmit={onSubmit} text="Add your todo" />
            </ModalComponent>}
          </TodosContainer>
        );
    }
};

export default TodosPageContainer;
