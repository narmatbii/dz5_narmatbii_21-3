import React, { useState } from 'react'
import classes from './todocard.module.css'
import Button from '../Button/Button.jsx';
import editIcon from '../../assets/edit.svg'
import ButtonAction from '../ButtonAction/ButtonAction.jsx'
import Input from '../Input/Input.jsx';
const ToDoCard = ({ 
  todo, 
  handleDone, 
  handleDelete, 
  currentEdit, 
  handleChangeCurrent,
  handleEdit
}) => {
 const [ newTitle , setNewTitle ] = useState(todo.title);
 const handleSetTitle = (event) => {
  setNewTitle(event.target.value)
 }
  if(currentEdit) {
    return (
      <div>
        <Input 
        value={newTitle} 
        name={'new title'}
        onChange={handleSetTitle}
        placeholder={'Новый таск'}
        />
        <button onClick={() => handleEdit({
          id: todo.id,
          title: newTitle,
          completed: todo.completed
        })} >Save</button>
      </div>
    )
  } return (  
    <div className={classes.wrapperCard}>
         <div className={todo.completed ? classes['todoCard'] + " " + classes.done : classes.todoCard }>
        <h3>{todo.title}</h3>
        <div className={classes.actionButtons}>
          <ButtonAction type={'edit'} handleClick={handleChangeCurrent} 
          todo={todo}>
            Edit
          <img src={editIcon} className={classes.editIcon} alt='edit icon' /> 
          </ButtonAction>
        <ButtonAction handleClick={handleDone} todo={todo}>Done</ButtonAction>
        <ButtonAction type={'delete'} handleClick={handleDelete} 
        todo={todo}>Delete</ButtonAction>
        </div>
    </div>
    </div>
  )
}

export default ToDoCard;