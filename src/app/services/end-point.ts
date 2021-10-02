export const prefixRoute = 'http://localhost:57325/api';
export const ApiEnspoints = {
  Endpoints: {
    login: `${prefixRoute}/Authentication/login`,
    registerAdmin: `${prefixRoute}/Authentication/register-admin`,
    registerEmployee: `${prefixRoute}/Authentication/register-employee`,
    getAllEmps: `${prefixRoute}/Task/emps`,
    getAllTasks: `${prefixRoute}/Task`,
    addTask: `${prefixRoute}/Task`,
    editTask: `${prefixRoute}/Task`,
  },
};