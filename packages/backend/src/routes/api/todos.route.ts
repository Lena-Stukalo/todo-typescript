import { Router } from 'express';

import { validateBody } from '../../middlewares/validateBody.middleware';
import { isExist } from '../../middlewares/isExist.middleware';
import todoController from '../../controllers/todo.controller';


const todosRouter: Router = Router();

todosRouter.get('', todoController.getAllTodo.bind(todoController));
todosRouter.get('/:todoId', isExist, todoController.getByIdTodo.bind(todoController));
todosRouter.post('', validateBody, todoController.createTodo.bind(todoController));
todosRouter.patch('/:todoId', isExist, todoController.updateByIdTodo.bind(todoController));
todosRouter.delete('/:todoId', isExist, todoController.deleteByIdTodo.bind(todoController));

export default todosRouter;
