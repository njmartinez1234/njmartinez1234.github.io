<template>
  <!-- Overlay Component -->
  <OverlayComponent :show="loggedIn">
    <div v-if="!loggedIn" class="inner-block">
      <div>
        <!-- Modal Dialog Component -->
        <ModalConfirm ref="modalConfirmation" :email="email"></ModalConfirm>
        <ModalDialog v-model="isModalOpen" :text="modalText" />
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <h1 class="text-center">Login</h1>
            <!-- Overlay Component -->
            <OverlayComponent :show="showOverlaySignIn">
              <form class="mt-4" @submit.prevent="login">
                <div class="form-group fixed-form-margin">
                  <label for="email">Email:</label>
                  <input v-model="email" class="form-control" type="email" id="email" required
                    placeholder="user@mail.com" />
                </div>
                <div class="form-group fixed-form-margin">
                  <label for="password">Password:</label>
                  <input v-model="password" class="form-control" type="password" id="password" placeholder="Password" />
                </div>
                <p v-if="error" class="text-danger">
                  Has introducido mal el email o la contraseña.
                </p>
                <button class="btn btn-outline-primary fixed-form-margin" type="submit">Login</button>
              </form>
              <p class="mt-3">
                ¿Don't have an account? <router-link to="/signup">Signup</router-link>
              </p>
            </OverlayComponent>
          </div>
        </div>
      </div>
    </div>
  </OverlayComponent>
</template>


<script>

import auth from "@/assets/js/auth";
import ModalDialog from "@/components/ModalDialog";
import OverlayComponent from "@/components/Overlay";
import ModalConfirm from "@/components/ModalConfirm";

export default {
  components: {
    ModalDialog,
    OverlayComponent,
    ModalConfirm
  },
  data: () => ({
    email: "",
    password: "",
    error: false,
    showOverlaySignIn: false,
    showOverlayIsLogedIn: false,
    modalText: "",
    isModalOpen: false
  }),
  beforeRouteEnter(to, from, next) {
    // Check if user is already logged in and not in the process of logging in
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    const showOverlaySignIn = localStorage.getItem("showOverlaySignIn") === "true";

    if (loggedIn && !showOverlaySignIn) {
      next("/operations");
    } else {
      next();
    }
  },
  computed: {
    loggedIn() {
      return localStorage.getItem("loggedIn") === "true";
    }
  },
  methods: {
    // Handle login form submission
    login() {
      this.showOverlaySignIn = !this.showOverlaySignIn;
      auth
        .signin(this.email, this.password)
        .then((result) => {
          // Set user token and information in event bus
          this.$eventBus.loggedIn = "true";
          this.$eventBus.token = result.data.access_token;
          this.$eventBus.userBalance = String(result.data.user.balance);
          this.$eventBus.userName = result.data.user.username;
          this.$router.push("/operations");
        })
        .catch((error) => {
          if (error.response.data.message==='User is not confirmed. Please confirm your account.') {
              this.$bvModal.msgBoxConfirm([error.response.data.message], {
                buttonSize: 'sm',
                centered: true,
                size: 'sm'
              }).then(value => {
                if (value) {
                  this.$refs.modalConfirmation.$refs.modal.show();
                }else{
                  return;
                }
              })
          }else{
              this.openModal(error.response.data.message);
          }
        })
        .finally(() => {
          this.showOverlaySignIn = !this.showOverlaySignIn;
        });
    },
    // Open modal dialog with a message
    openModal(msg) {
      this.isModalOpen = true;
      this.modalText = msg;
    }
  }
};
</script>
