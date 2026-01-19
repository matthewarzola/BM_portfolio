<script>
import projectsData from '@/data/projects.json'; // adjust path as needed

export default {
  data() {
    return {
      projects: projectsData,
      statusBadges: {
        online: "bg-green-400 text-green-900 inset-ring inset-ring-green-500/20",
        offline: "bg-red-400 text-red-900 inset-ring inset-ring-red-500/20",
        maintenance: "bg-yellow-400 text-yellow-900  inset-ring inset-ring-yellow-500/20",
        development: "bg-blue-400  inset-ring inset-ring-blue-500/20",
      }
    };
  },
};


</script>

<template>
  <section class="mt-10">
    <h2 class="text-2xl font-semibold mb-4">Featured Works</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <article v-for="project in projects" :key="project.title" class="relative group rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-transform duration-500 hover:-translate-y-2
         min-h-[400px] max-w-md mx-auto">

        <!-- Background Image -->
        <div class="absolute inset-0 bg-contain bg-center transition-transform duration-500 group-hover:scale-105"
          :style="{ backgroundImage: `url(${project.image})` }"></div>

        <!-- Blurred Overlay -->
        <div
          class="absolute inset-0 bg-black/25  transition-all duration-300 group-hover:bg-black/50 group-hover:backdrop-blur-md z-0">
        </div>

        <!-- Content -->
        <div class="relative z-10 flex flex-col justify-between h-full p-6">
  
  <!-- Top Content: Title + Badge -->
  <div class="flex flex-col mb-4">
    <!-- Title -->
    <h1
      class="text-white text-3xl sm:text-2xl font-bold mb-2 line-clamp-2 text-shadow-lg/20">
      {{ project.title }}
    </h1>

    <!-- Status Badge -->
    <span
      class="inline-flex self-start items-center rounded-md px-2 py-1 text-xs font-medium"
      :class="statusBadges[project.status]"
    >
      {{ project.status }}
    </span>
  </div>

  <!-- Description -->
  <p class="text-white text-base sm:text-sm line-clamp-4 mb-4 opacity-0 group-hover:opacity-90 transition-opacity duration-500">
    {{ project.description }}
  </p>

  <!-- Live Site Button -->
  <div>
    <a v-if="project.status === 'online'" :href="project.link" target="_blank" rel="noopener noreferrer" class="relative inline-block text-white font-medium text-sm 
       hover:text-green-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] 
       after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full">
      Live Site →
    </a>

    <span v-else class="inline-block text-gray-400 font-medium text-sm cursor-not-allowed opacity-60">
      Live Site →
    </span>
  </div>
</div>

      </article>
    </div>
  </section>
</template>
