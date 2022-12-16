<template>
  <c-theme-provider>
    <c-reset />
    <layout>
      <!--Your application goes here -->
      <router-view />
    </layout>
  </c-theme-provider>
</template>

<script>
import { CThemeProvider, CReset } from "@chakra-ui/vue";
import { Layout } from "./components/Layouts/index";

export default {
  name: "App",
  components: {
    CThemeProvider,
    Layout,
    CReset,
  },
};
</script>
