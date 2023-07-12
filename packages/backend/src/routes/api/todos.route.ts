/* eslint-disable prettier/prettier */
import { Router } from 'express';

import { validateBody } from '../../middlewares/validateBody.middleware';
import { isExist } from '../../middlewares/isExist.middleware';
import { tryCatch } from '../../middlewares/tryCatch.middleware';
import todoController from '../../controllers/todo.controller';
import { Todo } from '../../entities/todo.entity';

const todosRouter: Router = Router();

todosRouter.get('', tryCatch(todoController.getAllTodo.bind(todoController)));
todosRouter.get('/:id', isExist(Todo), tryCatch(todoController.getByIdTodo.bind(todoController)));
todosRouter.post('', validateBody, tryCatch(todoController.createTodo.bind(todoController)));
todosRouter.patch(
    '/:id',
    isExist(Todo),
    tryCatch(todoController.updateByIdTodo.bind(todoController))
);
todosRouter.delete(
    '/:id',
    isExist(Todo),
    tryCatch(todoController.deleteByIdTodo.bind(todoController))
);

export default todosRouter;
