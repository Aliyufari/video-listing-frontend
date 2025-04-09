import { defineStore } from 'pinia';
import axios from '../axios';
import axiosInstance from '../api/axiosInstance';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('authToken') || null
  }),

  actions: {
    async login(email: string, password: string) {
      try {
        const response = await axiosInstance.post('login', { email, password });
        this.token = response.data.token;
        this.user = response.data.user;

        localStorage.setItem('authToken', this.token);
      } catch (error) {
        console.error('Login failed', error);
      }
    },

    async logout() {
      try {
        await axios.post('logout');
        this.token = null;
        this.user = null;

        localStorage.removeItem('authToken');
      } catch (error) {
        console.error('Logout failed', error);
      }
    },

    async fetchUser() {
      try {
        const response = await axios.get('user');
        this.user = response.data;
      } catch (error) {
        console.error('Fetching user failed', error);
      }
    }
  },

  getters: {
    isAuthenticated(state) {
      return !!state.token;
    }
  }
});