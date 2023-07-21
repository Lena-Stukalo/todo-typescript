/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable prettier/prettier */
import React from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useQueryClient } from 'react-query';
import { InView } from 'react-intersection-observer';
import { TodoCard } from '../todoCard/todo-card.component';
import { ITodo } from '../../../common/types/todo.types';
import { StyledNavLink } from './todoSlider.styled';
import { Button } from '../../../common/components/button/button.component';
import { APP_KEYS } from '../../../common/consts';

interface IProps {
  cards: ITodo[];
    onDelete: Function
    onLoadMore:Function;
    pagin:{
      page:number;
      limits:number
    }
    count:number
}
export const TodoSliderComponent: React.FC<IProps> = ({ cards, onDelete, count, onLoadMore, pagin }) => {
  const client = useQueryClient();

  const handleLoadNext = () => {
    onLoadMore((prev:typeof pagin) => {
      const news = { ...prev, page: prev.page + 1 };
      return news;
});
client.removeQueries(APP_KEYS.QUERY_KEYS.TODOS);
  };
  const countitems = cards.length === count;
  const autoLoad = (inView:boolean) => {
    if (inView && !countitems) {
      handleLoadNext();
    }
  };
  return <Splide>
    {cards.map((todo) => <SplideSlide key={todo.id}>
      <StyledNavLink to={`/todo/${todo.id}`}>
        <TodoCard card={todo} />
      </StyledNavLink>
      <Button onClick={() => { onDelete(todo.id); }} text="Delete" type="button" />
    </SplideSlide>
        )}
    <SplideSlide>
      <InView onChange={(inView) => { autoLoad(inView); }}>
        <Button onClick={handleLoadNext} disabled={countitems} text={!countitems ? 'Load more' : 'No more'} type="button" />
      </InView>
    </SplideSlide>
  </Splide>;
};
