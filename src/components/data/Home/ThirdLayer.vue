<template>
  <Wrapper>
    <c-flex flexDirection="column" justifyContent="center" align="center">
      <c-heading fontSize="13px" color="red">TESTIMONIAL</c-heading>
      <c-heading>What they say</c-heading>
      <c-text>We have interesting reviews from our users!</c-text>
      <c-grid
        w="100%"
        :template-columns="[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
        ]"
        my="10"
        gap="5"
      >
        <c-flex
          flexDirection="column"
          align="center"
          justifyContent="center"
          v-for="item in review"
          boxShadow="lg"
          :key="item.id"
          bg="#fff"
          borderRadius="5px"
          p="5"
        >
          <c-image
            :src="item.img"
            w="3rem"
            h="3rem"
            border="2px solid red"
            rounded="full"
          />
          <c-text my="5">{{ item.desc }} </c-text>
          <c-heading my="5" fontSize="12px" fontStyle="italic"
            >{{ item.author }}
          </c-heading>
        </c-flex>
      </c-grid>
    </c-flex>
  </Wrapper>
</template>

<script>
import { CFlex, CHeading, CImage, CGrid, CText } from "@chakra-ui/vue";
import Wrapper from "../../../components/common/Wrapper.vue";
import { reviews } from "../../common/constants";

export default {
  components: {
    CFlex,
    CGrid,
    CHeading,
    CImage,
    CText,
    Wrapper,
  },
  data() {
    return {
      review: reviews,
    };
  },
};
</script>

<style></style>
