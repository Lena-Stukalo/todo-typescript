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
import { CustomCheckbox } from '../../common/components/checkbox/checkbox.component';
import { APP_KEYS } from '../../common/consts';

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
    navigate(APP_KEYS.ROUTER_KEYS.TODOS);
    client.removeQueries({ queryKey: [APP_KEYS.QUERY_KEYS.TODO] });
    onDelete(card.id);
  };
  const handleGoBack = () => {
    navigate(APP_KEYS.ROUTER_KEYS.TODOS);
    client.removeQueries({ queryKey: [APP_KEYS.QUERY_KEYS.TODO] });
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
          <CustomCheckbox isTrue={card.isDone} />
        </CheckBoxLabel>
        <CheckBoxLabel>
          Private:
          <CustomCheckbox isTrue={card.isPrivate} />
        </CheckBoxLabel>
      </Wraper>
      <ButtonWraper>
        <Button type="button" onClick={handleDelete}>Delete</Button>
        <Button type="button" onClick={() => { onClick(); }}>Update</Button>
        <Button type="button" onClick={handleGoBack}>Go back</Button>
      </ButtonWraper>
    </Info>);
};
