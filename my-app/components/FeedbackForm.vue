<template>
  <form @submit.prevent="sendFeedback">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="feedback.name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="feedback.email" required>
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" v-model="feedback.message" required></textarea>
    </div>
    <button type="submit">Send Feedback</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      feedback: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    async sendFeedback() {
      try {
        // Call your API or third-party service here
        // For demonstration purposes only
        console.log('Feedback:', this.feedback);

        alert('Feedback sent successfully!');
      } catch (error) {
        console.error('Error sending feedback:', error);
        alert('There was an error sending your feedback.');
      }
    }
  }
}
</script>
