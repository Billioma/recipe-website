<template>
  <c-box boxShadow="lg" bg="#fff" zIndex="5" p="10" w="100%">
    <c-grid
      :template-columns="[
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
        'repeat(4, 1fr)',
      ]"
      gap="5"
    >
      <c-flex class="flex">
        <c-image :src="require('@/assets/main.png')" w="6rem" h="2rem" />
        <c-text my="5" textAlign="start"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam
          distinctio facere dignissimos eius nam itaque quae, commodi dolorum
          quas rerum, suscipit impedit accusamus temporibus repellat veniam a
          nisi corporis.</c-text
        >
      </c-flex>
      <c-flex class="flex" v-for="item in todos" :key="item.id">
        <c-heading class="title">{{ item.title }}</c-heading>
        <c-flex class="list" v-for="item in item.list" :key="item.id">
          <v-icon name="pr-arrow-up-right" scale="1" fill="orange" />
          <c-text>{{ item.desc }} </c-text>
        </c-flex>
      </c-flex>
      <c-flex class="flex">
        <c-heading class="title">Get in connect</c-heading>
        <c-text>Follow us</c-text>
        <c-stack my="5" :spacing="5" is-inline>
          <c-box v-for="item in icons" :key="item.id">
            <v-icon :name="item.icon" />
          </c-box>
        </c-stack>
        <c-button bg="red" color="#fff">Contact Us</c-button>
      </c-flex>
    </c-grid>
  </c-box>
</template>

<script>
import {
  CBox,
  CFlex,
  CStack,
  CButton,
  CGrid,
  CHeading,
  CImage,
  CText,
} from "@chakra-ui/vue";
import { footer, footerIcons } from "../common/constants";

export default {
  components: {
    CBox,
    CFlex,
    CText,
    CStack,
    CButton,
    CHeading,
    CImage,
    CGrid,
  },
  data() {
    return {
      todos: footer,
      icons: footerIcons,
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 20px;
  margin-bottom: 2rem;
}
.list {
  gap: 1rem;
  align-content: center;
}
.flex {
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5;
}
</style>
