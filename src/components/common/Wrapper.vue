<template>
  <c-box class="top">
    <slot>content</slot>
  </c-box>
</template>

<script>
import { CBox } from "@chakra-ui/vue";

export default {
  components: {
    CBox,
  },
};
</script>

<style scoped>
.top {
  padding: 5rem 7rem 2rem 7rem;
  background: #f7f7f7;
}
</style>
