/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Card,
    Title,
    Description,
    CheckBoxLabel,
    Wraper,
} from './todo-card.styled';
import { CustomCheckbox } from '../../../common/components/checkbox/checkbox.component';
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
        <CustomCheckbox isTrue={card.isDone} />
      </CheckBoxLabel>
      <CheckBoxLabel>
        Private
        <CustomCheckbox isTrue={card.isPrivate} />
      </CheckBoxLabel>
    </Wraper>
  </Card>
);
