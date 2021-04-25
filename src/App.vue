<template>
  <div id="app" v-bind:style="{ backgroundImage: 'url(' + makeTemplateProps.backgroundImage + ')' }">

    <div v-if="makeTemplateProps.showLogos" style="z-index: 2;">
      <Logos />
    </div>

    <h1>{{ makeTemplateProps.headline }}</h1>

    <Shapes />

  </div>
</template>

<script>
import Logos from './components/Logos.vue';
import Shapes from './components/Shapes.vue';

const makeTemplateMixin = {
  computed: {
    makeTemplateProps() {
      return window.templateProps || {
        headline: "This is my first test",
        showLogos: true,
        backgroundImage: 'https://lh3.googleusercontent.com/eG1k8dH0SSttV8wKD5sfcizhUNeprz1ST1RdL1rkCTqJ0EedRvAZrYp7YNt_PClLfI9F_mdqeSW6NBLB_TVb-G6_ik-426IZ-lzSMDZ-ywuc6a_dloTsxh3dJPkP6H_i03uV7NFM3caNiEKSBMG3Ln34cItcSDfoHWIBenbziAieX2klTQEcquR31iAG1pZOYKWeynTRC9I-GB6M9A7L42UYcLuTVvQdSv8Fw8skk12Ybfzj08Iqd72_WnhCNsFo0SUw9U2_W5bugsfgqWKQdI2cBi-6I0HFTwW4YzA17D7dyFziBAyQxWCWwCB5S1A08W1TnvXa-NbcJapxudjjgNal7wYYOfvACQ3cm01B7VZ0RUuTa-W8GhJG9KTAXKlpDvFd812DlAo02lzIYhYVW-5lEfu5Ucw93KLf8QYXb07h1RTZNCXmLLc8lFhgRa6ttNfMv0HoXWn3IpbUBDOyQIOwCVMdf-hWAhj7AG1iOUbkCEzBDTsr3Cvi9ZONIiFAFA8P-kQQmKYMMvkRSbjor544B96fPPyFQGUkWNTILjajrsc04dUR211-rjgcfDi9SaUcEfw75mAuQ_BmMg3y7LNlntwSo8YxU88AMUOArTeHcmeW5e427GgsqYBuW5mxjW-80cMqCrSu2zBsTXYap9jvf_BJUixkS2iXtRIhv8DOjfwnLSEDricNQIV3W124puTUq8QXc4jHBjwRR37aN_s=w1000-no-tmp.jpg',
      };
    }
  }
}

export default {
  name: 'App',
  components: {
    Logos,
    Shapes
  },
  mixins: [makeTemplateMixin]
}
</script>

<style>
  body {
    margin: 0;
    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  h1 {
    font-size: clamp( 16px, 10vh, 250px);
    font-weight: 700;
    line-height: 100%;
    color: #1f2a44;
    text-align: center;
    width: 100%;
    padding: 0 2rem;
    z-index: 1;
  }
</style>
