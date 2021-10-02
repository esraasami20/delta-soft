export interface taskList {
  taskId: number;
  taskName: string;
  discription: string;
  createdAt: Date;
  deliverDate: Date;
  taskState: boolean;
  userId: string;
  applicationUsers: userList;
}

export interface State {
  
  taskState: boolean;
}


export interface userList {
  fname: string;
  lname: string;
  adminLocked: boolean;
  gender?: any;
  age: number;
  taskTables?: any;
  id: string;
  userName: string;
  normalizedUserName: string;
  email: string;
  normalizedEmail: string;
  emailConfirmed: boolean;
  passwordHash: string;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumber?: any;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd?: any;
  lockoutEnabled: boolean;
  accessFailedCount: number;
}