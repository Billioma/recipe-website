<template>
  <Wrapper>
    <c-box class="overflow">
      <c-box class="header">
        <c-flex class="flex">
          <c-heading fontSize="50px" color="red">Boiled</c-heading>
          <c-heading my="1rem" w="30%" fontSize="27px"
            >no matter how you cook, Yumma has many the recipes</c-heading
          >
          <c-text w="40%"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            libero id voluptate doloremque quaerat vel ipsam qui, culpa odit
            repudiandae sequi corrupti facere, doloribus iure optio iusto! Vel,
            praesentium laborum.</c-text
          >
          <c-button mt="3rem" bg="red" color="#fff"
            >Explore Recipes
            <v-icon name="md-restaurantmenu-round" fill="#fff" />
          </c-button>
        </c-flex>
      </c-box>
    </c-box>
  </Wrapper>
</template>

<script>
import { CHeading, CFlex, CBox, CButton, CText } from "@chakra-ui/vue";
import Wrapper from "../../../components/common/Wrapper.vue";

export default {
  components: {
    CHeading,
    CButton,
    Wrapper,
    CBox,
    CText,
    CFlex,
  },
};
</script>

<style scoped>
.overflow {
  overflow: hidden;
  color: #000;
  margin: -1rem -7rem 0 -7rem;
}
.header {
  background: linear-gradient(rgba(0, 0, 0, 0), #525252),
    url("../../../assets/bg.jpg");
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
  text-align: center;
  padding-top: 11rem;
  -webkit-animation: zoomin 50s ease-in infinite;
  animation: zoomin 50s ease-in infinite;
  transition: all 0.5s ease-in-out;
}
.flex {
  flex-direction: column;
  align-items: center;
  -webkit-animation: zoomout 50s ease-in infinite;
  animation: zoomout 50s ease-in infinite;
  transition: all 0.5s ease-in-out;
}

@-webkit-keyframes zoomin {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes zoomin {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes zoomout {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.67);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes zoomout {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.67);
  }
  100% {
    transform: scale(1);
  }
}
</style>
