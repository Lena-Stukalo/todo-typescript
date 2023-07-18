/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { useNavigate } from 'react-router-dom';
import { TodoList } from '../todo/components/todoList/totos-list.component';
import { TodosContainer } from './index.styled';
import { TodoSliderComponent } from '../todo/components/todoSlider/todoSlider.component';
import { TodoTabele } from '../todo/components/todoTable/todo-table.component';
import { useGetAllTodos } from '../todo/hooks/useGetAllTodos';
import { Notification } from '../common/components/notification/notification.component';
import { Button } from '../common/components/button/button.component';
import { useToggle } from '../todo/hooks/useTogglemodal';
import { ModalComponent } from '../common/components/modal/modal.component';
import { TodoFormComponent } from '../todo/components/addTodoForm/todo-form.component';
import { useCreateTodo } from '../todo/hooks/useCreateTodo';
import { ITodoNotId } from '../common/types/todo.types';
import { useDeleteTodo } from '../todo/hooks/useDeleteTodo';

const TodosPageContainer = () => {
    const screenSize = {
        width: window.innerWidth,
        isMobile: (window.innerWidth <= 480),
        isTablet: (window.innerWidth > 480 && window.innerWidth < 1280),
        isDescktop: (window.innerWidth >= 1280)
    };
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
        return <Notification text="...Loading" />;
    }
    if (isError) {
        return <Notification text="!!!Error" />;
    }
    if (data) {
        return (
          <TodosContainer>
            {screenSize.isMobile && <TodoList cards={data} onDelete={onDelete} />}
            {screenSize.isTablet && <TodoSliderComponent cards={data} onDelete={onDelete} />}
            {screenSize.isDescktop && <TodoTabele cards={data} onDelete={onDelete} onView={handleView} />}
            <Button text="Add todo" onClick={toggleModal} />
            {isOpen && <ModalComponent onClick={toggleModal}>
              <TodoFormComponent onSubmit={onSubmit} text="Add your todo" />
            </ModalComponent>}
          </TodosContainer>
        );
    }
};

export default TodosPageContainer;
