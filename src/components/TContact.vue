<template>
  <TSection id="contact" class="t-contact" background-color="primary">
    <va-card>
      <va-card-title>
        Contact form
      </va-card-title>
      <va-card-content>
        <va-form style="width: 300px;">
          <va-input
              v-model="name"
              class="mt-3"
              label="Your Name"
          />
          <va-input
              v-model="email"
              class="mt-3"
              label="Your email"
          />
          <va-input
              v-model="note"
              type="textarea"
              class="mt-3"
              label="Note"
          />
          <div>
            <va-button class="mt-3">Send</va-button>
          </div>
        </va-form>
      </va-card-content>
    </va-card>
  </TSection>
</template>

<script setup lang="ts">
import TSection from './TSection.vue'
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const note = ref('')
</script>

<style lang="scss">
.t-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .va-input-wrapper {
    width: 100%;
  }

  .va-button {
    width: 100%;
  }
}
</style>
