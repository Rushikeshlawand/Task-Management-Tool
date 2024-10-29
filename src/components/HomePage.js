import React, { useState } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [newTask, setNewTask] = useState({
    name: '',
    description: '',
    dueDate: '',
    status: 'Pending',
    priority: 'Low',
    assignedTo: '',
    comments: '',
  });

  // Here Create a new task
  const handleCreateTask = () => {
    setTasks([...tasks, { ...newTask, id: Date.now().toString() }]);
    setNewTask({
      name: '',
      description: '',
      dueDate: '',
      status: 'Pending',
      priority: 'Low',
      assignedTo: '',
      comments: '',
    });
  };

  //Here we can Update task status and comments
  const handleUpdateTask = (id, updatedFields) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedFields } : task)));
  };

  // Handle input change for new task form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prevState => ({ ...prevState, [name]: value }));
  };

  // Filter all tasks by status, priority.
  const filteredTasks = tasks.filter(task =>
    (!filter || task.status === filter || task.priority === filter) &&
    (!search || task.name.toLowerCase().includes(search.toLowerCase()) ||
     task.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="container-fluid">
      {}
      <Header />

      <div className="row">
        {}
        <div className="col-md-3">
          <Sidebar search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
        </div>

        {}
        <main className="col-md-9">
          {}
          <div className="my-3 p-3 border rounded">
            <h4>Create New Task</h4>
            <div className="row">
              <div className="col-md-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Task Name"
                  value={newTask.name}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={newTask.description}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="date"
                  name="dueDate"
                  value={newTask.dueDate}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
              </div>
              <div className="col-md-4">
                <select name="status" value={newTask.status} onChange={handleInputChange} className="form-select mb-2">
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="col-md-4">
                <select name="priority" value={newTask.priority} onChange={handleInputChange} className="form-select mb-2">
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  name="assignedTo"
                  placeholder="Assign to"
                  value={newTask.assignedTo}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
              </div>
            </div>
            <button onClick={handleCreateTask} className="btn btn-primary mt-2">Create Task</button>
          </div>

          {}
          <div>
            <h4>Tasks</h4>
            {filteredTasks.map(task => (
              <div key={task.id} className="border rounded p-3 mb-2">
                <h5>{task.name}</h5>
                <p>{task.description}</p>
                <p><strong>Due Date:</strong> {task.dueDate}</p>
                <p><strong>Status:</strong> {task.status}</p>
                <p><strong>Priority:</strong> {task.priority}</p>
                <p><strong>Assigned to:</strong> {task.assignedTo}</p>
                <div className="d-flex align-items-center">
                  <input
                    type="text"
                    placeholder="Add comment"
                    value={task.comments}
                    onChange={(e) => handleUpdateTask(task.id, { comments: e.target.value })}
                    className="form-control me-2"
                  />
                  <select
                    value={task.status}
                    onChange={(e) => handleUpdateTask(task.id, { status: e.target.value })}
                    className="form-select w-auto"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
