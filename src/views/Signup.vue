<template>
  <!-- Overlay Component for Sign Up -->
  <OverlayComponent :show="loggedIn">
    <div v-if="!loggedIn" class="inner-block">
      <div>
        <!-- Modal Dialog -->
        <ModalDialog v-model="isModalOpen" :text="modalText" />

        <!-- Modal Confirmation -->
        <ModalConfirm ref="modalConfirmation" :email="email"></ModalConfirm>
      </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <h1 class="text-center">Sign Up</h1>

            <!-- Overlay Component for Sign Up Form -->
            <OverlayComponent :show="showOverlaySignUp">
              <!-- Sign Up Form -->
              <form class="mt-2" @submit.prevent="register">
                <div class="form-group fixed-form-margin">
                  <label for="email">Email:</label>
                  <input v-model="email" class="form-control" type="email" id="email" required
                    placeholder="user@mail.com" />
                </div>

                <div class="mb-1"></div>

                <div class="form-group fixed-form-margin">
                  <label for="password">Password:</label>
                  <input v-model="password" class="form-control" type="password" id="password" placeholder="Password" />
                </div>

                <div class="form-group fixed-form-margin">
                  <label for="password-repeat">Re-enter password:</label>
                  <input v-model="passwordRepeat" class="form-control" type="password" id="password-repeat"
                    placeholder="Password repeat" />
                </div>

                <button class="btn btn-outline-primary fixed-form-margin" type="submit" :disabled="!isFormValid">
                  Sign Up
                </button>
              </form>

              <p class="mt-3">
                ¿Already have an account?
                <router-link to="/login">Login</router-link>
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
import ModalConfirm from "@/components/ModalConfirm";
import OverlayComponent from "@/components/Overlay";

export default {
  components: {
    ModalDialog,
    OverlayComponent,
    ModalConfirm
  },
  data() {
    return {
      email: '',
      password: '',
      passwordRepeat: '',
      modalText: '',
      isModalOpen: false,
      showOverlaySignUp: false,
      boxTwo: '',
      resetModal: false
    };
  },
  created() {
    // Redirect to operations page if already logged in
    if (this.loggedIn) {
      this.$router.push("/operations");
    }
  },
  computed: {
    isFormValid() {
      return this.email && this.password && this.password === this.passwordRepeat;
    },
    loggedIn() {
      return localStorage.getItem("loggedIn") === "true";
    }
  },
  methods: {
    async register() {
      // Show overlay during sign up process
      this.showOverlaySignUp = !this.showOverlaySignUp;

      try {
        await auth.signup(this.email, this.password);
        this.$refs.modalConfirmation.$refs.modal.show();
      } catch (error) {
        this.openModal(error.response.data.message);
      }

      // Hide overlay after sign up process
      this.showOverlaySignUp = !this.showOverlaySignUp;
    },
    openModal(msg) {
      this.isModalOpen = true;
      this.modalText = msg;
    },
  },
};
</script>
