<template>
  <c-box>
    <FirstLayer />
    <SecondLayer />
    <ThirdLayer />
    <FourthLayer />
  </c-box>
</template>

<script>
import {
  FirstLayer,
  SecondLayer,
  ThirdLayer,
  FourthLayer,
} from "../components/data/Home/index";
import { CBox } from "@chakra-ui/vue";

export default {
  components: {
    FirstLayer,
    SecondLayer,
    ThirdLayer,
    FourthLayer,
    CBox,
  },
};
</script>

<style></style>
