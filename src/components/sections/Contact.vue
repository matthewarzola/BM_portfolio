<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  console.log('Form submitted:', { name: name.value, email: email.value, message: message.value });
}
</script>

<template>
  <section class="contact bg-gray-800 text-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold mb-4">Contact Me</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="name" class="block">Name:</label>
        <input type="text" id="name" v-model="name" class="border p-2 w-full bg-gray-700 text-white" required />
      </div>
      <div>
        <label for="email" class="block">Email:</label>
        <input type="email" id="email" v-model="email" class="border p-2 w-full bg-gray-700 text-white" required />
      </div>
      <div>
        <label for="message" class="block">Message:</label>
        <textarea id="message" v-model="message" class="border p-2 w-full bg-gray-700 text-white" required></textarea>
      </div>
      <button type="submit" class="bg-blue-500 text-white p-2 rounded">Send Message</button>
    </form>
  </section>
</template>

<style scoped>
.contact {
  margin-top: 2rem;
}
</style>