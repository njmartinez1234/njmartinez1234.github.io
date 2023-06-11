<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <OverlayComponent :show="showOverlaySignIn">
          <div>
            <router-view />
          </div>
        </OverlayComponent>
      </div>
    </div>
  </div>
</template>

<script>
import auth from "@/assets/js/auth";
import OverlayComponent from "@/components/Overlay";
import NavBarComponent from "@/components/NavBar";

export default {
  components: {
    OverlayComponent,
    NavBarComponent
  },
  data() {
    return {
      loggedIn: false,
      token: "",
      showOverlaySignIn: false,
      userBalance: "0"
    };
  },
  created() {
    this.loggedIn = localStorage.getItem("loggedIn") === "true";
    this.token = localStorage.getItem("token");
    this.userBalance = localStorage.getItem("userBalance");
  },
  methods: {
    async signout() {
      this.showOverlaySignOut = !this.showOverlaySignOut;
      try {
        await auth.signout(this.token);
        this.$eventBus.token = '';
      } catch (error) {
        console.log('An error occured when try to logout.')
      }
      localStorage.clear();
      this.$router.push("/login");
      this.showOverlaySignOut = !this.showOverlaySignOut;
    },
  },
};
</script>
