// import axios from 'axios';
// import ApiResponse from './apiTypes';

// const api = axios.create({
//   baseURL: 'http://localhost:3333/users', // O URL base da sua API
// });

// export const fetchData = async (): Promise<ApiResponse> => {
//   try {
//     const response = await api.get<ApiResponse>('/data');
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };