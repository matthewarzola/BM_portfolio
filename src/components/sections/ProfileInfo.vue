<script setup>
import { ref } from "vue";
import Skills from '@/components/sections/Skills.vue'
import Timeline from "@/components/Timeline.vue";
import careerData from "@/data/careers.json";
import educationData from "@/data/education.json";
import Accordion from "@/components/Accordion.vue";

const experience = ref(careerData.career);
const education = ref(educationData.education);

</script>

<template>
  <div class="space-y-4 w-full max-w-4xl mx-auto">
    <!-- Work Experience -->
    <Accordion title="Experience" :initiallyOpen="true" icon="lucide:briefcase-business">
      <Timeline :experience="experience" />
    </Accordion>
    
    <!-- Education -->
    <Accordion title="Education" :initiallyOpen="true" icon="lucide:graduation-cap" ">
      <Timeline :experience="education" />
    </Accordion>

    <!-- Skills -->
    <Accordion title="Technical Skills" :initiallyOpen="true" icon="lucide:cpu">
      <Skills />
    </Accordion>

  </div>
</template>
