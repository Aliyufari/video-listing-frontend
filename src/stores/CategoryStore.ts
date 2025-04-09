import { defineStore } from "pinia";
import axiosInstance from "../api/axiosInstance";

export let useCategoryStore = defineStore('categories', {
    state: () => ({
        categories: ['All', 'Entertainment', 'Action Movie', 'Cartoons'],  
        loading: false, 
        error: null, 
    }),

    actions: {
        async fetchCategories() {
            this.loading = true;
            this.error = null;  
    
            try {
                const response = await axiosInstance.get('/categories');  
                this.categories = response.data;  
            } catch (err: any) {
                this.error = err.message;
                console.error(err);
            } finally {
                this.loading = false;
            }
        }
    }
});
