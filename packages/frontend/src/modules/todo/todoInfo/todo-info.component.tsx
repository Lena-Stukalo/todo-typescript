/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { ITodo } from '../../common/types/todo.types';
import {
    Info,
    Title,
    Description,
    CheckBoxLabel,
    CardText,
    Button,
    ButtonWraper,
    Wraper,
} from './todo-info.styled';
import { CustomChecbox } from '../../common/components/checkbox/checkbox.component';

interface IProps {
  card: ITodo;
  onClick: Function;
  onDelete: Function;
}
export const TodoInfoComponent: React.FC<IProps> = ({
  card,
  onClick,
  onDelete,
}) => {
  const navigate = useNavigate();
  const client = useQueryClient();
  const handleDelete = () => {
    client.invalidateQueries({ queryKey: ['todo'] });
    navigate('/todos');
    onDelete(card.id);
  };
  const handleGoBack = () => {
    client.invalidateQueries({ queryKey: ['todo'] });
    navigate('/todos');
  };

  return (
    <Info>
      <Title>{card.title}</Title>
      <Wraper><CardText>Description:</CardText>
        <Description>{card.description}</Description>
      </Wraper>
      <Wraper>
        <CheckBoxLabel>
          Done:
          <CustomChecbox isTrue={card.isDone} />
        </CheckBoxLabel>
        <CheckBoxLabel>
          Private:
          <CustomChecbox isTrue={card.isPrivate} />
        </CheckBoxLabel>
      </Wraper>
      <ButtonWraper>
        <Button type="button" onClick={handleDelete}>Delete</Button>
        <Button type="button" onClick={() => { onClick(); }}>Update</Button>
        <Button type="button" onClick={handleGoBack}>Go back</Button>
      </ButtonWraper>
    </Info>);
};
