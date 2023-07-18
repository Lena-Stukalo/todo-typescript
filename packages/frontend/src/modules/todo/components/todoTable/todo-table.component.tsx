/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ITodo } from '../../../common/types/todo.types';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow
} from './todo-table.styled';
import { TodoAction } from './todoAction/todo-action.component';

interface IProps {
    cards: ITodo[];
    onDelete: Function,
    onView:Function
}
export const TodoTabele: React.FC<IProps> = ({ cards, onDelete, onView }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeaderCell>Title</TableHeaderCell>
        <TableHeaderCell>Description</TableHeaderCell>
        <TableHeaderCell>Actions</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {cards.map((todo) =>
            (<TableRow key={todo.id}>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.description}</TableCell>
              <TableCell><TodoAction isTrue={todo.isDone} onDelete={onDelete} id={todo.id} onView={onView} /></TableCell>
             </TableRow>)
            )}
    </TableBody>
  </Table>
);
