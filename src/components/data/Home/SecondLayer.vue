<template>
  <Wrapper>
    <c-flex align="center" justifyContent="space-between">
      <c-box w="100%">
        <c-box position="relative">
          <c-flex
            flexDirection="column"
            justifyContent="center"
            w="50%"
            align="center"
            textAlign="center"
            bg="#fff"
            p="3"
            position="absolute"
          >
            <v-icon name="ri-double-quotes-l" color="orange" scale="2" />
            <c-text fontSize="14px">
              "Ask not what you can do for your country. Ask what's for lunch."
              <br />
              ~ Orson Welles
            </c-text>
          </c-flex>
          <c-image
            :src="require('@/assets/chef.jpg')"
            w="35rem"
            borderRadius="5px"
          />
        </c-box>
      </c-box>
      <c-box w="50%">
        <c-heading fontSize="13px" color="red">WHO WE ARE </c-heading>
        <c-heading fontSize="35px" w="65%"
          >One thousand flavors in one place.
        </c-heading>
        <c-text my="5">
          Are you running low on inspiration or losing your cooking mojo in the
          kitchen?
          <br />
          <br />
          There are plenty of personal secrets to cooking that you can store up
          your sleeves. Do not let the fear of failure in cooking hold you back
          from showing your culinary skills and producing some good food for
          everyone. Cooking done with care is an act of joy and cooking done
          with love is always appreciated. Here are some popular cooking quotes
          you can count on!
        </c-text>
      </c-box>
    </c-flex>
  </Wrapper>
</template>

<script>
import { CBox, CFlex, CImage, CHeading, CText } from "@chakra-ui/vue";
import Wrapper from "../../../components/common/Wrapper.vue";

export default {
  components: {
    CBox,
    CFlex,
    CHeading,
    CText,
    CImage,
    Wrapper,
  },
};
</script>

<style></style>
