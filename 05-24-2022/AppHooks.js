import React, { useEffect, useState } from 'react';

import Tasks from './componentsHooks/Tasks/Tasks';
import NewTask from './componentsHooks/NewTask/NewTask';
import useHttp from './componentsHooks/Hooks/use-http';

function App() {
    const [tasks, setTasks] = useState([]);

   
     const {isLoading, error, sendRequest: fetchTasks } = useHttp()

    


  useEffect(() => {
    const transformTasks= (taskobj) =>{

      const loadedTasks = [];

      for (const taskKey in taskobj) {
        loadedTasks.push({ id: taskKey, text: taskobj[taskKey].text });
      }
      
      setTasks(loadedTasks);      
    };
    fetchTasks({url:'https://my-project-78b0c-default-rtdb.firebaseio.com/tasks.json'},transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;

