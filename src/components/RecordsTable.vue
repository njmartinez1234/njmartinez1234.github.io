<template>
  <div class="overflow-auto">
    <!-- Filter Input -->
    <div class="mb-2">
      <b-form-input
        v-model="filterValue"
        placeholder="Filter by operation type"
        @input="startDebounceTimer"
      ></b-form-input>
    </div>
    <ModalDialog v-model="isModalOpen" :text="modalText" />
    <!-- Overlay Component for Table -->
    <OverlayComponent :show="showOverlayTable">
      <!-- Table Component -->
      <b-table
        id="my-table"
        :items="items"
        :fields="fields"
        :per-page="perPage"
        small
        :bordered="true"
        @row-clicked="rowClicked"
      >
        <!-- Delete Button Template -->
        <template #cell(delete)="row">
          <b-button variant="danger" size="sm" @click="deleteConfirmationMsgBox(row.item)">
            Remove
          </b-button>
        </template>
      </b-table>
    </OverlayComponent>

    <!-- Pagination Component -->
    <b-pagination
      v-model="currentPage"
      align="center"
      :per-page="perPage"
      :total-rows="totalRecords"
      aria-controls="my-table"
      @input="handlePageChange"
    ></b-pagination>
  </div>
</template>

<script>
import logic from "@/assets/js/logic";
import ModalDialog from "@/components/ModalDialog";
import OverlayComponent from "@/components/Overlay.vue";

export default {
  components: {
    ModalDialog,
    OverlayComponent,
  },
  created() {
    this.fetchData();
  },
  data() {
    return {
      perPage: 6,
      currentPage: 1,
      items: [],
      totalRecords: null,
      showOverlayTable: false,
      fields: [
        { key: "id", label: "ID", sortable: true },
        { key: "operation.type", label: "Op. type", sortable: true },
        { key: "operation.cost", label: "Cost", sortable: true },
        { key: "operation_response", label: "Op .Result", sortable: true },
        { key: "date", label: "Op. date", sortable: true },
        { key: "delete", label: "" },
      ],
      sortBy: "",
      sortDesc: false,
      filterValue: "",
      operationValue: "",
      modalText: "",
      isModalOpen: false,
      debounceTimer: null,
    };
  },

  computed: {
    totalItems() {
      return this.totalRecords;
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.filteredItems.slice(start, end);
    },
  },
  methods: {
    async fetchData() {
      await Promise.all([this.fetchRecords(1)]);
    },
    async fetchRecords(newPage) {
      // Show overlay during records fetching
      this.showOverlayTable = !this.showOverlayTable;

      try {
        const response = await logic.getRecords(
          null,
          newPage,
          this.perPage,
          this.filterValue
        );
        this.totalRecords = response.data.total_records;
        this.items = response.data.data;
      } catch (error) {
        return;
      }

      // Hide overlay after records fetching
      this.showOverlayTable = !this.showOverlayTable;
    },
    async deleteRow(item) {
      try {
        await logic.removeRecord(item.id);
        const index = this.items.indexOf(item);
        if (index != -1) {
          this.items.splice(index, 1);
        }
        this.fetchRecords(this.currentPage);
      } catch (error) {
        this.openModal(error.response.data.error);
        return;
      }
    },
    deleteConfirmationMsgBox(item) {
      this.$bvModal
        .msgBoxConfirm("Please confirm that you want to delete this item.", {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          if (value) {
            this.deleteRow(item);
          }
        })
        .catch((err) => {
          return;
        });
    },
    startDebounceTimer() {
      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer);
      }
      this.debounceTimer = setTimeout(() => {
        this.fetchRecords(1);
      }, 300);
    },
    rowClicked(item) {
      // Code to handle row click
    },
    handlePageChange(newPage) {
      this.fetchRecords(newPage);
      this.$emit("update:current-page", newPage);
    }, 
    openModal(msg) {
      this.isModalOpen = true;
      this.modalText = msg;
    },
  },
};
</script>
