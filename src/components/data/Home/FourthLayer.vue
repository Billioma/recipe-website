<template>
  <Wrapper>
    <c-flex class="header">
      <c-box width="37%">
        <c-heading fontSize="13px">MESSAGE FROM FOUNDER</c-heading>
        <c-heading>First, we weat. Then, we do everything else.</c-heading>
        <c-text my="5"
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque iure
          consequatur nobis nostrum! Totam ratione eveniet fuga dolores laborum
          adipisci?</c-text
        >
        <c-text my="5"
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque iure
          consequatur nobis nostrum! Totam ratione eveniet fuga dolores laborum
          adipisci?</c-text
        >
        <c-image width="15rem" :src="require('@/assets/sign.png')" w="6rem" />
      </c-box>
    </c-flex>
  </Wrapper>
</template>

<script>
import { CFlex, CImage, CBox, CText, CHeading } from "@chakra-ui/vue";
import Wrapper from "../../common/Wrapper.vue";

export default {
  components: {
    CFlex,
    CImage,
    CHeading,
    CText,
    CBox,
    Wrapper,
  },
};
</script>

<style scoped>
.header {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../../../assets/food1.jpg");
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
  padding: 0 0 0 5rem;
  color: #fff;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: -1rem -7rem 0 -7rem;
  padding-top: 11rem;
  -webkit-animation: zoomin 50s ease-in infinite;
  animation: zoomin 50s ease-in infinite;
  transition: all 0.5s ease-in-out;
}
</style>
