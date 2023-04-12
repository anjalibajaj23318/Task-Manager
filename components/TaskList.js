import React from 'react'
import Task from './Task'
const TaskList = ({tasks, deleteTask, editTask}) => {

    return (
        <div> {
            tasks && tasks.map(task => (
                <Task key={
                        task.id
                    }
                    title={
                        task.title
                    }
                    description={
                        task.description
                    }
                    id={
                        task.id
                    }
                    deleteTask={deleteTask}
                    editTask={editTask}/>
            ))
        } </div>
    )
}

export default TaskList;
