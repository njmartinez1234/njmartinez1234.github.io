<template>
    <div>
        <!-- NavBar Component -->
        <NavBar></NavBar>
        <div class="inner-block-custom">
            <p>
                <label>Balance: <b>{{ this.userBalance }}</b></label>
            </p>
            <div class="p-3" style="width: auto; margin: 20px 10px">
                <!-- OverlayComponent -->
                <OverlayComponent :show="showOverlay">
                    <div>
                        <!-- b-tabs component -->
                        <b-tabs content-class="mt-3" fill>
                            <div>
                                <!-- ModalDialog Component -->
                                <ModalDialog v-model="isModalOpen" :text="modalText" />
                            </div>
                            <!-- Operations Tab -->
                            <b-tab title="Operations" active>
                                <!-- OperationDisplay Component -->
                                <OperationDisplay :num1="num1" :num2="num2" :operationValue="operationValue" />
                                <!-- OperationButtons Component -->
                                <OperationButtons :buttons="buttons" @operator-click="handleOperatorClick" />
                                <div style="
                                    align-items: center;
                                    text-align: center;
                                    margin: 0 130px 0 130px;
                                    padding: 3%;">
                                    <!-- b-alert component -->
                                    <b-alert show :variant="variantAlert" style="text-align: center; margin-bottom: 0px">
                                        <h1 style="font-size: 1vw">{{ this.result }}</h1>
                                    </b-alert>
                                </div>
                                <div style="text-align: center; padding: 3%">
                                    <!-- OverlayComponent -->
                                    <OverlayComponent :show="showOverlayBtn">
                                        <!-- b-button-group -->
                                        <b-button-group>
                                            <b-button variant="success" :disabled="busy" size="lg"
                                                @click="calculate()">Calculate</b-button>
                                            <b-button variant="primary" :class="{ 'disabled': !this.isArithmetic }"
                                                @click="generateRandomNums()">Random Numbers</b-button>
                                        </b-button-group>
                                    </OverlayComponent>
                                </div>
                            </b-tab>
                            <!-- Records Tab -->
                            <b-tab title="Records" @click="recordRefresh()">
                                <!-- RecordsTable Component -->
                                <RecordsTable ref="recordsTable" />
                            </b-tab>
                        </b-tabs>
                    </div>
                </OverlayComponent>
            </div>
        </div>
    </div>
</template>
<script>

import logic from "@/assets/js/logic";
import ModalDialog from "@/components/ModalDialog";
import OperationDisplay from "@/components/OperationDisplay";
import OperationButtons from "@/components/OperationButtons";
import ResultDisplay from "@/components/ResultDisplay";
import RecordsTable from "@/components/RecordsTable";
import OverlayComponent from "@/components/Overlay.vue";
import NavBar from "@/components/NavBar";

export default {
    components: {
        ModalDialog,
        OperationDisplay,
        OperationButtons,
        ResultDisplay,
        RecordsTable,
        OverlayComponent,
        NavBar
    },
    computed: {
        loggedIn() {
            return localStorage.getItem("loggedIn") === "true";
        },
        getUserName() {
            return localStorage.getItem("userName");
        },
        getUserBalance() {
            return localStorage.getItem("userBalance");
        }
    },
    created() {
        if (!this.loggedIn) {
            this.$router.push("/login");
        }
        this.userName = this.getUserName;
        this.userBalance = this.getUserBalance;
        this.fetchData();
    },
    data() {
        return {
            busy: false,
            showOverlay: false,
            showOverlayBtn: false,
            buttons: [],
            num1: null,
            num2: null,
            tmp_num: '',
            isModalOpen: false,
            opString:'',
            modalText: "",
            operationValue: "?",
            result: "Select an operation type.",
            isArithmetic: true,
            variantAlert: "info",
            userName: "",
            userBalance: "",
        };
    },
    methods: {
        // Fetch initial data
        async fetchData() {
            this.showOverlay = !this.showOverlay
            this.showOverlayBtn = !this.showOverlayBtn;
            await Promise.all([this.generateRandomNums()]);
            this.fetchButtons();
            this.showOverlayBtn = !this.showOverlayBtn;
            this.showOverlay = !this.showOverlay
        },
        // Fetch operation buttons
        async fetchButtons() {
            try {
                const response = await logic.getAvOperations();
                this.buttons = response.data.data;
            } catch (error) {
                this.openModal(error.message);
            }
        },
        // Handle operator click event
        handleOperatorClick(operator, opId, isArithmetic, opType) {
            if (!isArithmetic) {
                operator = opType
                this.num1 = null;
                this.num2 = null;
            } else if (operator === "√") {
                this.tmp_num = this.num1;
                this.num2 = this.num1;
                this.num1 = null;
            }
            this.opString = opType;
            this.operationValue = operator;
            this.operationId = opId;
            this.isArithmetic = isArithmetic;
        },
        // Generate random numbers
        async generateRandomNums() {
            this.showOverlayBtn = !this.showOverlayBtn;
            try {
                const response = await logic.getRandomNumbers("numeric=true");
                const [num1, num2] = response.data.data;
                if (this.operationValue === "√") {
                    this.tmp_num = num1;
                    this.num1 = null;
                    this.num2 = num1;
                } else {
                    this.num1 = num1;
                    this.num2 = num2;
                }
            } catch (error) {
                this.openModal(error.message);
            }
            this.showOverlayBtn = !this.showOverlayBtn;
        },
        // Perform calculation
        async calculate() {
            const error_string= "Please generate random value(s) to proceed with the " + this.opString + " operation."
            if (this.operationValue === "√" && this.num2 === null ){
                this.resultDisplayHandler(error_string, "warning")
            } else if (!["√", "Random str"].includes(this.operationValue) && (this.num1 === null && this.num2 === null )) {
                this.resultDisplayHandler(error_string, "warning")
            } else if (!["√", "Random str"].includes(this.operationValue) && (this.num1 === null || this.num2 === null)) {
                this.resultDisplayHandler(error_string, "warning")
            } else if (this.operationValue === "?" || this.operationValue === "") {
                this.resultDisplayHandler("Please select a valid operation.", "warning")
            }else {
                this.showOverlayBtn = !this.showOverlayBtn;
                try {
                    if (!this.isArithmetic) {
                        const response = await logic.getRandomNumbers("numeric=false");
                        this.string = response.data.data[0];
                        this.result = await logic.OperationCalculation(this.string, this.num2, this.operationId);
                    } else {
                        if (this.operationValue === "√") {
                            this.result = await logic.OperationCalculation(this.tmp_num, this.num2, this.operationId);
                        }else{
                            this.result = await logic.OperationCalculation(this.num1, this.num2, this.operationId);
                        }
                    }
                    this.userBalance = this.result.data.data['user_balance']
                    this.$eventBus.userBalance = this.userBalance;
                    this.result = this.result.data.data['operation_response'];
                    this.resultDisplayHandler(this.result, "success")
                } catch (error) {
                    this.openModal(error.response.data.error);
                }
                this.showOverlayBtn = !this.showOverlayBtn;
            }
        },
        // Open modal dialog
        openModal(msg) {
            this.isModalOpen = true;
            this.modalText = msg;
        },
        // Handle result display
        resultDisplayHandler(msg, variant) {
            this.result = msg;
            this.variantAlert = variant;
        },
        recordRefresh(){
            this.$refs.recordsTable.fetchData();
        },
    }
};
</script>
