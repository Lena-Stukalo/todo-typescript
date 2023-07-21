import React from 'react';
import { TodoList } from '../todoList/totos-list.component';
import { TodoSliderComponent } from '../todoSlider/todoSlider.component';
import { TodoTabele } from '../todoTable/todo-table.component';
import { ITodo } from '../../../common/types/todo.types';

interface IProps {
  data: ITodo[];
  datatable: ITodo[];
  onDelete: Function;
  onView: Function;
  onLoadMore: Function;
  pagin: {
    page: number;
    limits: number;
  };
  count: number;
}
export const TodoContent: React.FC<IProps> = ({
  data,
  onDelete,
  onView,
  onLoadMore,
  pagin,
  count,
  datatable
}) => {
  const screenSize = {
    width: window.innerWidth,
    isMobile: window.innerWidth <= 480,
    isTablet: window.innerWidth > 480 && window.innerWidth < 1280,
    isDescktop: window.innerWidth >= 1280
  };
  return (
    <>
      {screenSize.isMobile && (
        <TodoList
          cards={data}
          onDelete={onDelete}
          onLoadMore={onLoadMore}
          pagin={pagin}
          count={count}
        />
      )}
      {screenSize.isTablet && (
        <TodoSliderComponent
          cards={data}
          onDelete={onDelete}
          onLoadMore={onLoadMore}
          pagin={pagin}
          count={count}
        />
      )}
      {screenSize.isDescktop && (
        <TodoTabele
          cards={datatable}
          onDelete={onDelete}
          onView={onView}
          onLoadMore={onLoadMore}
          pagin={pagin}
          count={count}
        />
      )}
    </>
  );
};
