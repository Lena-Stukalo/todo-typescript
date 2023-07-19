/* eslint-disable prettier/prettier */
import React from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { TodoCard } from '../todoCard/todo-card.component';
import { ITodo } from '../../../common/types/todo.types';
import { StyledNavLink } from './todoSlider.styled';
import { Button } from '../../../common/components/button/button.component';

interface IProps {
    cards: ITodo[];
    onDelete: Function
}
export const TodoSliderComponent: React.FC<IProps> = ({ cards, onDelete }) => (
  <Splide>
    {cards.map((todo) => (
      <SplideSlide key={todo.id}>
        <StyledNavLink to={`/todo/${todo.id}`}>
          <TodoCard card={todo} />
        </StyledNavLink>
        <Button onClick={() => { onDelete(todo.id); }} text="Delete" />
      </SplideSlide>
        ))}
  </Splide>
);
