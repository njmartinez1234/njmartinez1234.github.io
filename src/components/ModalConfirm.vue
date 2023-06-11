<template>
  <!-- Modal Confirmation Component -->
  <div>
    <b-modal id="modal-prevent-closing" centered ref="modal" title="User Confirmation" @show="resetModal"
      @hidden="resetModal" @ok="handleOk">
      <!-- Overlay Component -->
      <OverlayComponent :show="showOverlayConfirm">
        <!-- Confirmation message -->
        <p class="my-4">
          Please enter the confirmation code we sent to your email.
        </p>
        <!-- Confirmation form -->
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group label-for="name-input" :invalid-feedback="invFeedbackTxt" :state="codeState">
            <b-form-input id="name-input" type="number" v-model="code" :state="codeState" required size="lg"
              placeholder="Enter your code"></b-form-input>
          </b-form-group>
        </form>
      </OverlayComponent>
    </b-modal>
  </div>
</template>

<script>
import auth from "@/assets/js/auth";
import OverlayComponent from "@/components/Overlay";

export default {
  name: 'ModalConfirmation',
  components: {
    OverlayComponent
  },
  props: {
    email: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // Code input value
      code: '',
      // Code input validation state
      codeState: null,
      // Feedback message for invalid code input
      invFeedbackTxt: 'Code is required',
      // Flag to control overlay visibility
      showOverlayConfirm: false
    };
  },
  methods: {
    // Check the validity of the form
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.codeState = valid;
      return valid;
    },
    // Reset modal state
    resetModal() {
      this.code = '';
      this.codeState = null;
    },
    // Handle OK button click
    handleOk(bvModalEvent) {
      bvModalEvent.preventDefault();
      this.handleSubmit();
    },
    // Handle form submission
    async handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      this.showOverlayConfirm = !this.showOverlayConfirm;
      try {
        const response = await auth.confirmation(this.email, this.code);
        this.confirmationMsgBox(response.data.message, 'Success', 'success', 'OK');
      } catch (error) {
        this.confirmationMsgBox(error.response.data.message, 'Error', 'danger', 'Retry');
        this.showOverlayConfirm = !this.showOverlayConfirm;
        return;
      }
    },
    // Show confirmation message box
    confirmationMsgBox(text, status, variant, okTitle) {
      this.$bvModal.msgBoxOk(text, {
        title: status,
        size: 'sm',
        buttonSize: 'sm',
        okTitle: okTitle,
        okVariant: variant,
        cancelTitle: 'NO',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true
      })
        .then(value => {
          if (variant === 'success' && value) {
            this.resetModal;
            this.$router.push('/');
            this.showOverlayConfirm = !this.showOverlayConfirm;
          }
        })
        .catch(err => {
          // An error occurred
        });
    }
  }
};
</script>
