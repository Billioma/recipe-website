<template>
  <div>
    <Header />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import { Header, Footer } from "./index";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
