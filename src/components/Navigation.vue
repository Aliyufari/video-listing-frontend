<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <nav class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 text-white py-4 px-4 sm:px-10 lg:px-20 bg-[#1f2937]">
        <RouterLink to="/"  class="text-lg sm:text-2xl font-bold">Video Listing</RouterLink>

        <aside class="flex flex-col sm:flex-row sm:items-center sm:gap-8 text-sm sm:text-md gap-4">
            <ul class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <li>
                <RouterLink 
                    to="/new-video" 
                    class="bg-yellow-500 text-black px-4 py-2 rounded text-center block w-full sm:w-auto">
                    New Video
                </RouterLink>
            </li>
            <li>
                <a href="#" class="hover:underline text-white">My Videos</a>
            </li>
            </ul>

            <div class="flex items-center gap-2">
            <span class="flex items-center justify-center font-bold bg-yellow-500 h-8 w-8 rounded-full text-black">AL</span>
            <span class="text-white">John Doe</span>
            </div>
        </aside>
    </nav>
</template>