<script setup lang="ts">
defineProps<{
  title: string,
  src: string,
  createdAt: Date,
}>()
</script>

<template>
  <div class="rounded-2xl overflow-hidden bg-[#1f2937] shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div class="relative group">
        <video
            class="w-full h-48 object-cover"
            :src="src"
            muted
            playsinline
            preload="metadata">
        </video>

        <div
            class="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors duration-300">
            <svg
            class="w-10 h-10 text-white opacity-80 group-hover:scale-110 transform transition"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path
                fill-rule="evenodd"
                d="M6.5 5.5a1 1 0 011.5-.866l6 3.464a1 1 0 010 1.732l-6 3.464A1 1 0 016.5 12.5v-7z"
                clip-rule="evenodd"/>
            </svg>
        </div>
    </div>

    <div class="p-4 space-y-2">
        <h3 class="text-lg font-semibold text-yellow-500 truncate">
            {{ title }}
        </h3>
        <p class="text-sm text-gray-400">
            Uploaded on <span class="font-medium">{{ createdAt.toLocaleDateString() }}</span>
        </p>
    </div>
  </div>
</template>