/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Card,
    Title,
    Description,
    CheckBoxLabel,
    Wraper,
} from './todo-card.styled';
import { CustomChecbox } from '../../../common/components/checkbox/checkbox.component';
import { ITodo } from '../../../common/types/todo.types';

interface IProps {
    card: ITodo;
}
export const TodoCard: React.FC<IProps> = ({ card }) => (
  <Card>
    <Title>{card.title}</Title>
    <Description>{card.description}</Description>
    <Wraper>
      <CheckBoxLabel>
        Done
        <CustomChecbox isTrue={card.isDone} />
      </CheckBoxLabel>
      <CheckBoxLabel>
        Private
        <CustomChecbox isTrue={card.isPrivate} />
      </CheckBoxLabel>
    </Wraper>
  </Card>
);
