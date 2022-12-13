import s from './TaskList.module.css'
import {Link, NavLink} from "react-router-dom";

const TaskList = (props) => {
    return (
        <div className={s.todoContainer}>
            <div>
                <h3 className={s.todoTitle}>{props.title}</h3>
                <p className={s.todoDescription}>Tasks 11, completed 9</p>
            </div>
            <NavLink to={`/todo/${props.id}`} className={s.todoDetail}>Detail</NavLink>
        </div>
    )
}

export default TaskList;
