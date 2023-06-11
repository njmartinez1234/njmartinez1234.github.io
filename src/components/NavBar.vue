<template>
    <!-- Vue component template -->
    <div class="vue-template">
        <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
            <div class="container">
                <a class="navbar-brand float-left" href="/">TRUENORTH Demo</a>
                <a v-if="loggedIn" class="navbar-brand float-left"><b>{{ userBalance }}</b></a>
                <ul class="nav navbar-nav flex-row float-right">
                    <li v-if="loggedIn" class="nav-item">
                        <button class="btn btn-outline-primary" type="submit" @click="logoutConfirmation()">
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>

import auth from "@/assets/js/auth";

export default {
    name: 'NavBar',
    data() {
        // Component data properties
        return {
            loggedIn: false,
            token: "",
            showOverlaySignIn: false,
            userBalance: 0,
        };
    },
    created() {
        // Initialization logic when component is created
        this.loggedIn = localStorage.getItem("loggedIn") === "true";
        this.token = localStorage.getItem("token");
        this.userBalance = localStorage.getItem("userName");
    },
    methods: {
        async signout() {
            // Method for signing out
            this.showOverlaySignIn = !this.showOverlaySignIn;
            try {
                await auth.signout(this.token);
                this.loggedIn = false;
            } catch (error) {
                console.error("Error occurred during signout:", error);
            }
            localStorage.clear();
            window.location.href = '/';
            this.showOverlaySignIn = !this.showOverlaySignIn;
        },
        logoutConfirmation() {
            // Method for showing logout confirmation dialog
            this.$bvModal.msgBoxConfirm(['Are you sure?'], {
                buttonSize: 'sm',
                centered: true,
                size: 'sm'
            }).then(value => {
                if (value) {
                    this.signout();
                }
            })
        },
    },
};
</script>
