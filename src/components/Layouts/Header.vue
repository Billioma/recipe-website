<template>
  <c-box boxShadow="lg" bg="#fff" zIndex="5" h="9vh" pos="fixed" w="100%">
    <c-flex
      justifyContent="space-between"
      alignItem="center"
      py="3"
      px="10rem"
      width="100%"
      transition="0.3s all ease-in-out"
    >
      <c-image :src="require('@/assets/main.png')" w="6rem" />
      <c-stack :spacing="10" is-inline>
        <c-box v-for="item in todos" :key="item.id">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </c-box>
      </c-stack>
      <c-stack :spacing="5" is-inline>
        <c-box v-for="item in icons" :key="item.id">
          <v-icon :name="item.icon" color="#FF0000" />
        </c-box>
      </c-stack>
    </c-flex>
  </c-box>
</template>

<script>
import { CBox, CFlex, CStack, CImage } from "@chakra-ui/vue";
import { headers, headerIcons } from "../common/constants";

export default {
  components: {
    CBox,
    CFlex,
    CImage,
    CStack,
  },
  data() {
    return {
      todos: headers,
      icons: headerIcons,
    };
  },
};
</script>

<style></style>
