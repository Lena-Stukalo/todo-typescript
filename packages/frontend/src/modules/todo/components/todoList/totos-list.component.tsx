/* eslint-disable prettier/prettier */
import React from 'react';
import { ITodo } from '../../../common/types/todo.types';
import { List, Wraper, StyledNavLink } from './todo-list.styled';
import { TodoCard } from '../todoCard/todo-card.component';

interface IProps {
    cards: ITodo[];
    onDelete: Function

}
export const TodoList: React.FC<IProps> = ({ cards, onDelete }) => (
  <List>
    {cards.map((todo) => (
      <Wraper key={todo.id}>
        <StyledNavLink to={`/todo/${todo.id}`}>
          <TodoCard card={todo} onDelete={onDelete} />
        </StyledNavLink>
      </Wraper>
        ))}
  </List>
);
