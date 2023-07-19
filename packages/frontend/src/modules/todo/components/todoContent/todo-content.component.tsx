import React from 'react';
import { TodoList } from '../todoList/totos-list.component';
import { TodoSliderComponent } from '../todoSlider/todoSlider.component';
import { TodoTabele } from '../todoTable/todo-table.component';
import { ITodo } from '../../../common/types/todo.types';

interface IProps {
  data: ITodo[];
  onDelete: Function;
  onView: Function;
}
export const TodoContent: React.FC<IProps> = ({ data, onDelete, onView }) => {
  const screenSize = {
    width: window.innerWidth,
    isMobile: window.innerWidth <= 480,
    isTablet: window.innerWidth > 480 && window.innerWidth < 1280,
    isDescktop: window.innerWidth >= 1280
  };
  return (
    <>
      {screenSize.isMobile && <TodoList cards={data} onDelete={onDelete} />}
      {screenSize.isTablet && <TodoSliderComponent cards={data} onDelete={onDelete} />}
      {screenSize.isDescktop && <TodoTabele cards={data} onDelete={onDelete} onView={onView} />}
    </>
  );
};
