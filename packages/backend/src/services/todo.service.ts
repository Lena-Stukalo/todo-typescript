import { Todo } from "../entities/todo.entity";
import { RequestError } from "../helpers/RequestError";
import {ITodo} from '../types/todos.type'

export default class TodoService {
  async findAll() {
    const result = await Todo.find()
    return result
  }

  async findById(id:string) {
    const result = await Todo.findOneBy({id})
  return result 
  }

  async create(data:ITodo) {
const {title,description,isDone,isPrivat}= data
   const result =await Todo.create({title,description,isDone,isPrivat})
   result.save()
   return result
  }

  async update(id:string,data:ITodo) {
    const result = await Todo.update(id,data )
    return result 
  }

  async delete(id:string) {
    const result = await Todo.delete(id)
    return result 
  }
}
