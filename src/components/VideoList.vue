<script setup lang="ts">
import { ref, computed } from 'vue'
import VideoCard from './VideoCard.vue'

const categories = ['All', 'Entertainment', 'Action Movie', 'Catoons']

const videos = [
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
    id: 2,
    title: 'Another Awesome Video',
    src: '/videos/clip.mp4',
    category: 'Entertainment',
    createdAt: new Date('2024-08-15'),
  },
  {
    id: 1,
    title: 'Sample Video Title',
    src: '/videos/sample.mp4',
    category: 'Catoons',
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
    id: 2,
    title: 'Another Awesome Video',
    src: '/videos/clip.mp4',
    category: 'Catoons',
    createdAt: new Date('2024-08-15'),
  }
]

const selectedCategory = ref('All')

function filterVideos(category: string) {
  selectedCategory.value = category
}

const filteredVideos = computed(() => {
  if (selectedCategory.value === 'All') {
    return videos
  }
  return videos.filter(video => video.category === selectedCategory.value)
})
</script>

<template>
  <section class="px-4 sm:px-10 lg:px-20 py-8 bg-[#111827] min-h-screen">
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
      <div
        v-for="category in categories"
        :key="category"
        @click="filterVideos(category)"
        :class="{
          'bg-yellow-500 text-black': selectedCategory === category,
          'bg-gray-800 text-gray-300 hover:bg-yellow-500 hover:text-black': selectedCategory !== category
        }"
        class="cursor-pointer py-2 px-4 rounded-lg text-center font-semibold transition-all"
      >
        {{ category }}
      </div>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <VideoCard
        v-for="video in filteredVideos"
        :key="video.id"
        :title="video.title"
        :src="video.src"
        :created-at="video.createdAt"
      />
    </div>
    </section>
</template>

