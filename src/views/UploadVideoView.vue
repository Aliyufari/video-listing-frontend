<script setup lang="ts">
import { ref } from 'vue'

const title = ref('')
const videoFile = ref<File | null>(null)

function handleFileUpload(e: Event) {
  const files = (e.target as HTMLInputElement).files
  if (files && files.length > 0) {
    videoFile.value = files[0]
  }
}

function submitForm() {
  console.log('Video Title:', title.value)
  console.log('Selected File:', videoFile.value)
}
</script>

<template>
    <section class="min-h-screen bg-[#111827] text-white px-4 sm:px-10 lg:px-20 py-10">
        <div class="max-w-2xl mx-auto bg-[#1f2937] p-8 rounded-2xl shadow-lg">
        <h2 class="text-2xl font-bold mb-6">Upload New Video</h2>

        <form @submit.prevent="submitForm" class="space-y-6">
            <div>
                <label for="title" class="block text-sm font-medium text-gray-300 mb-1">Video Title</label>
                <input
                    id="title"
                    v-model="title"
                    type="text"
                    placeholder="Enter video title"
                    class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
            </div>

            <div>
                <label for="video" class="block text-sm font-medium text-gray-300 mb-1">Video File</label>
                <input
                    id="video"
                    type="file"
                    accept="video/*"
                    @change="handleFileUpload"
                    class="w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-yellow-500 file:text-black hover:file:bg-yellow-400 bg-gray-800 text-gray-300 rounded-lg"/>
            </div>

            <div>
                <label for="title" class="block text-sm font-medium text-gray-300 mb-1">Video URL</label>
                <input
                    id="title"
                    v-model="title"
                    type="text"
                    placeholder="Enter video URL"
                    class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
            </div>

            <div>
                <label for="title" class="block text-sm font-medium text-gray-300 mb-1">Video Description (Optional)</label>
                <textarea
                    id="title"
                    v-model="title"
                    placeholder="Enter video Description"
                    class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                </textarea>
            </div>

            <div class="pt-4">
            <button
                type="submit"
                class="w-full bg-yellow-500 text-black font-semibold py-2 rounded-lg hover:bg-yellow-400 transition-colors">
                Upload Video
            </button>
            </div>
        </form>
        </div>
    </section>
</template>
