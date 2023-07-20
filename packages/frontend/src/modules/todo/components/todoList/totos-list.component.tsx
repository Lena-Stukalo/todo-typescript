/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useQueryClient } from 'react-query';
import { InView } from 'react-intersection-observer';
import { ITodo } from '../../../common/types/todo.types';
import { List, Wraper, StyledNavLink, ButtonReload } from './todo-list.styled';
import { TodoCard } from '../todoCard/todo-card.component';
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
export const TodoList: React.FC<IProps> = ({ cards, onDelete, onLoadMore, pagin, count }) => {
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
  return <List>
    {cards.map((todo) => (<Wraper key={todo.id}>
      <StyledNavLink to={`/todo/${todo.id}`}>
        <TodoCard card={todo} />
      </StyledNavLink>
      <Button onClick={() => { onDelete(todo.id); }} text="Delete" type="button" />
    </Wraper>))}
    <InView onChange={(inView) => { autoLoad(inView); }}>
      <ButtonReload onClick={handleLoadNext} disabled={countitems}>{!countitems ? 'Load more' : 'No more'}</ButtonReload>
    </InView>

  </List>;
};
