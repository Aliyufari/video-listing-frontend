import { defineStore } from "pinia";
import axiosInstance from "../api/axiosInstance";

export let useVideoStore = defineStore('videos', {
    state: () => ({
        selectedCategory: 'All',
        loading: false, 
        error: null, 
        videos: [
            {
                id: 1,
                title: 'Sample Video Title',
                src: '/videos/sample.mp4',
                category: 'Entertainment',
                createdAt: new Date('2024-08-01'),
            },
            {
                id: 2,
                title: 'Another Awesome Clip',
                src: '/videos/clip.mp4',
                category: 'Action Movie',
                createdAt: new Date('2024-08-15'),
            },
            {
                id: 3,
                title: 'Another Awesome Video',
                src: '/videos/clip.mp4',
                category: 'Entertainment',
                createdAt: new Date('2024-08-15'),
            },
            {
                id: 4,
                title: 'Sample Video Title',
                src: '/videos/sample.mp4',
                category: 'Cartoons',
                createdAt: new Date('2024-08-01'),
            },
            {
                id: 5,
                title: 'Another Awesome Clip',
                src: '/videos/clip.mp4',
                category: 'Action Movie',
                createdAt: new Date('2024-08-15'),
            },
            {
                id: 6,
                title: 'Another Awesome Video',
                src: '/videos/clip.mp4',
                category: 'Cartoons',
                createdAt: new Date('2024-08-15'),
            }
        ]
    }),

    actions: {
        async fetchVideos() {
            this.loading = true;
            this.error = null;  
      
            try {
                const response = await axiosInstance.get('/videos');  
                this.videos = response.data;  
            } catch (err: any) {
                this.error = err.message;
                console.error(err);
            } finally {
                this.loading = false;
            }
        },

        setSelectedCategory(category: string) {
            this.selectedCategory = category;
        }
    },

    getters: {
        filteredVideos(state) {
            if (state.selectedCategory === 'All') {
              return state.videos;
            }
            return state.videos.filter(video => video.category === state.selectedCategory);
        }
    }
});