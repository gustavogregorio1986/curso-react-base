import axios from 'axios';

const axiosInstance = axios.create(); // se a API está no mesmo servidor

export const TodoAPI = {
  async getAll() {
    const response = await axiosInstance.get('/api/todos');
    return response.data;
  },

  async create(id: string, label: string, complete: boolean) {
    const response = await axiosInstance.post('/api/todos', {
      id,
      label,
      complete
    });
    return response.data;
  },

  async update(id: string, label: string, complete: boolean) {
    const response = await axiosInstance.put(`/api/todos/${id}`, {
      label,
      complete
    });
    return response.data;
  },

  async delete(id: string) {
    const response = await axiosInstance.delete(`/api/todos/${id}`);
    return response.data;
  }
};