import apiClient from './api-client';

export interface User {
  id: number;
  name: string;
}

class UserService {
  getAllUsers() {
    // Built-in class in browsers that allows us to cancel asynch operations
    const controller = new AbortController();

    const request = apiClient.get<User[]>('/users', {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  deleteUser(id: number) {
    return apiClient.delete<User>('/users/' + id);
  }

  createUser(user: User) {
    return apiClient.post('/users', user);
  }

  updateUser(user: User) {
    return apiClient.put<User>('/users/' + user.id);
  }
}

export default new UserService();
