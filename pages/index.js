import Head from 'next/head'
import {v4 as uuid} from "uuid";
import TaskList from '@/components/TaskList'
import {useState, useEffect} from 'react'
import TaskInputForm from '@/components/TaskInputForm';


export default function Home({tasks}) {
    const [taskInfo, setTaskInfo] = useState(tasks);
    useEffect(() => { // Load tasks from local storage when the component mounts
        if (typeof window !== 'undefined') {
            const savedTasks = JSON.parse(localStorage.getItem('tasks'));
            if (savedTasks) {
                setTaskInfo(savedTasks);
            }
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskInfo));
    }, [taskInfo]);


    const onSubmit = (title, description) => {
        const newTask = {
            id: uuid(),
            title: title,
            description: description


        };
        setTaskInfo([
            ...taskInfo,
            newTask
        ]);

    }
    const deleteTask = (id) => {
        setTaskInfo(taskInfo.filter(task => task.id !== id));

    }
    const editTask = (id, title, description) => {
        const updatedTasks = taskInfo.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    title,
                    description
                };
            } else {
                return task;
            }
        });
        setTaskInfo(updatedTasks);


    };
    const searchTask = (title, description) => {
        const searchTasks = taskInfo.filter((task) => {
            return task.title.includes(title) || task.description.includes(description);
        });
        setTaskInfo(searchTasks);

    }


    return (
        <>
            <Head>
                <title>Task Manager</title>
            </Head>
            <TaskInputForm onSubmit={onSubmit}
                searchTask={searchTask}/>
            <TaskList tasks={taskInfo}
                deleteTask={deleteTask}
                editTask={editTask}/>
        </>
    );
}
export async function getServerSideProps() {
    const tasks = [{
            id: uuid(),
            title: 'Task 1',
            description: 'Description of task 1'

        }];

    return {props: {
            tasks
        }}
}
