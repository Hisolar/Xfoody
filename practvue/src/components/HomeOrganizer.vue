<template>
  <div class="max-w-6xl mx-auto">
    <div class="p-6 bg-red-300 w-full">
      <ul class="flex items-center gap-6 justify-between">
        <slot name="top_navigation"></slot>
      </ul>
    </div>

    <div class="flex gap-6">
      <ul v-if="showLeftNavigation" class="w-32 flex flex-col gap-5">
        <slot name="left_navigation"></slot>
      </ul>

      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  showLeftNavigation: {
    type: Boolean,
    default: true,
  },
});
</script>
