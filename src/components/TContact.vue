<template>
  <TSection id="contact" class="t-contact" background-color="primary">
    <va-card>
      <va-card-title>
        {{ $t('contactForm.form') }}
      </va-card-title>
      <va-card-content>
        <va-form ref="form" style="width: 300px;">
          <va-input
              v-model="name"
              class="mt-5"
              :label="$t('contactForm.name')"
              :rules="rules"
          />
          <va-input
              v-model="additionalInformation"
              type="textarea"
              autosize
              :min-rows="5"
              :max-rows="10"
              class="mt-5"
              :label="$t('contactForm.note')"
              :rules="rules"
          />
          <div class="mt-5 t-contact__button-group">
            <va-button @click="sendEmail">{{ $t('contactForm.send') }}</va-button>
            <div class="mx-5">
              {{ $t('or') }}
            </div>
            <a href="https://www.instagram.com/mirek.trainer/" target="_blank">
              <img src="/instagram.svg" alt="Instagram"/>
            </a>
          </div>
        </va-form>
      </va-card-content>
    </va-card>
  </TSection>
</template>

<script setup lang="ts">
import TSection from './TSection.vue'
import { ref, shallowRef, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const props = defineProps({
  note: String,
  plan: Object,
})

const form = shallowRef()
const additionalInformation = ref(props.note)
const name = ref('')

watch(() => props.plan, (value) => {
  additionalInformation.value = `${t('contactForm.notePlaceholder', { name: name.value })} ${t(value?.name)} (${t(value?.price)})`
})
watch(name, (value) => {
  additionalInformation.value = `${t('contactForm.notePlaceholder', { name: value })} ${t(props.plan?.name)}`
})

const sendEmail = () => {
  const formIsValid = form.value.validate()
  if (formIsValid) {
    window.location.href = `mailto:m.trainer.pl@gmail.com?subject=${t('contactForm.mailSubject')}&body=${additionalInformation.value}`
  }
}
const rules = [(value: string) => (value && value.length > 0) || t('requiredField')]
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

  &__button-group {
    display: flex;
    align-items: center;
    justify-content: center
  }

  .va-button {
    width: 100%;
  }
}
</style>
