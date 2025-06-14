<script setup>
import { ref } from 'vue'

const experience = ref([
  {
    title: 'UI/UX Designer',
    company: 'Tech Solutions Inc.',
    date: 'June 2021 - Present',
    description: 'Responsible for designing user-friendly interfaces and enhancing user experience across various applications.'
  },
  {
    title: 'Junior UI/UX Designer',
    company: 'Creative Agency',
    date: 'January 2020 - May 2021',
    description: 'Assisted in the design and development of web applications, focusing on user research and usability testing.'
  }
])

const education = ref([
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    date: '2016 - 2020',
    description: 'Focused on software development and user experience design.'
  },
  {
    degree: 'Diploma in Graphic Design',
    institution: 'Design Institute',
    date: '2014 - 2016',
    description: 'Studied graphic design principles and digital media.'
  }
])
</script>

<template>
  <section class="timeline">
    <h2 class="text-2xl font-semibold mb-4">Experience & Education</h2>
    <div class="tabs">
      <button @click="activeTab = 'experience'" :class="{ active: activeTab === 'experience' }">Experience</button>
      <button @click="activeTab = 'education'" :class="{ active: activeTab === 'education' }">Education</button>
    </div>
    <div v-if="activeTab === 'experience'">
      <ul>
        <li v-for="item in experience" :key="item.title" class="timeline-item">
          <h3>{{ item.title }} at {{ item.company }}</h3>
          <span>{{ item.date }}</span>
          <p>{{ item.description }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <ul>
        <li v-for="item in education" :key="item.degree" class="timeline-item">
          <h3>{{ item.degree }} from {{ item.institution }}</h3>
          <span>{{ item.date }}</span>
          <p>{{ item.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  background-color: #1e1e1e;
  color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.tabs {
  display: flex;
  margin-bottom: 20px;
}

.tabs button {
  background: none;
  border: none;
  color: #f9f9f9;
  padding: 10px;
  cursor: pointer;
}

.tabs button.active {
  border-bottom: 2px solid #4a90e2;
}

.timeline-item {
  margin-bottom: 20px;
}

.timeline-item h3 {
  font-size: 1.2em;
  margin: 0;
}

.timeline-item span {
  display: block;
  font-size: 0.9em;
  color: #bbb;
}
</style>