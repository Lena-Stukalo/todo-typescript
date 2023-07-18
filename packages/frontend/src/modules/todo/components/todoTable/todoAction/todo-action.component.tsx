/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, Wraper } from './todo-action.styled';
import { CustomChecbox } from '../../../../common/components/checkbox/checkbox.component';

interface IProps {
    isTrue: boolean;
    onDelete: Function;
    id: string,
    onView:Function,
}
export const TodoAction: React.FC<IProps> = ({ isTrue, onDelete, id, onView }) => (
  <Wraper>
    <CustomChecbox isTrue={isTrue} />
    <Button type="button" onClick={() => { onView(id); }}>View</Button>
    <Button type="button" onClick={() => { onDelete(id); }}>Delete</Button>
  </Wraper>
);
