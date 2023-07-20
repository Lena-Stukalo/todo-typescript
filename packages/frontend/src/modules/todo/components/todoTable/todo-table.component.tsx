/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useQueryClient } from 'react-query';
import { ITodo } from '../../../common/types/todo.types';
import {
  ButtonWraper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableHeaderCell,
    TableRow
} from './todo-table.styled';
import { TodoAction } from './todoAction/todo-action.component';
import { Button } from '../../../common/components/button/button.component';
import { APP_KEYS } from '../../../common/consts';

interface IProps {
  cards: ITodo[];
    onDelete: Function,
    onView:Function;
    onLoadMore:Function;
    pagin:{
      page:number;
      limits:number
    }
    count:number
}
export const TodoTabele: React.FC<IProps> = ({ cards, onDelete, onView, pagin, onLoadMore, count }) => {
  const client = useQueryClient();
  const handleLoadNext = () => {
    onLoadMore((prev:typeof pagin) => {
      const news = { ...prev, page: prev.page + 1 };
      return news;
});
client.removeQueries(APP_KEYS.QUERY_KEYS.TODOS);
  };
  const handleLoadPrev = () => {
    onLoadMore((prev:typeof pagin) => {
      const news = { ...prev, page: prev.page - 1 };
      return news;
});
client.removeQueries(APP_KEYS.QUERY_KEYS.TODOS);
  };
  const countitems = pagin.limits * (pagin.page + 1) < count;

return <TableContainer> <Table>
    <TableHead>
      <TableRow>
        <TableHeaderCell>Title</TableHeaderCell>
        <TableHeaderCell>Description</TableHeaderCell>
        <TableHeaderCell>Actions</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {cards.map((todo) => <TableRow key={todo.id}>
          <TableCell>{todo.title}</TableCell>
          <TableCell>{todo.description}</TableCell>
          <TableCell><TodoAction isTrue={todo.isDone} onDelete={onDelete} id={todo.id} onView={onView} /></TableCell>
         </TableRow>
      )}
    </TableBody>
                        </Table>
  <ButtonWraper>
        {pagin.page !== 0 && (
          <Button text="Back" onClick={handleLoadPrev} type="button" />
        )}
        {countitems && (
          <Button text="Next" onClick={handleLoadNext} type="button" />
        )}
  </ButtonWraper>
       </TableContainer>;
};
