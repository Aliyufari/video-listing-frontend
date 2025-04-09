<script setup lang="ts">
import VideoCard from './VideoCard.vue'
import { useVideoStore } from '../stores/VideoStore'
import { useCategoryStore } from '../stores/CategoryStore';

const categories = useCategoryStore();
const videos = useVideoStore();
</script>

<template>
    <section class="px-4 sm:px-10 lg:px-20 py-8 bg-[#111827] min-h-screen">
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            <div
            v-for="category in categories.categories"
            :key="category"
            @click="videos.setSelectedCategory(category)"
            :class="{
                'bg-yellow-500 text-black': videos.selectedCategory === category,
                'bg-gray-800 text-gray-300 hover:bg-yellow-500 hover:text-black': videos.selectedCategory !== category
            }"
            class="cursor-pointer py-2 px-4 rounded-lg text-center font-semibold transition-all">
            {{ category }}
            </div>
        </div>
    
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <VideoCard
                v-for="video in videos.filteredVideos"
                :key="video.id"
                :title="video.title"
                :src="video.src"
                :createdAt="video.createdAt"/>
        </div>
    </section>
</template>