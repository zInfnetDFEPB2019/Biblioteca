<template>
  <v-dialog v-model="modalUI.open" persistent max-width="60vh">
    <v-card>
      <v-card-title class="headline d-flex justify-center">{{modalUI.title}}</v-card-title>
      <v-card-text v-if="modalUI.message != null" class="pb-2">{{modalUI.message}}</v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn :class="modalUI.firstButton.color  + ' white--text'" @click="executeButtonActions(modalUI.firstButton.actions)" style="width:49%;">{{modalUI.firstButton.text}}</v-btn>
        <v-btn :class="modalUI.secondButton.color  + ' white--text'" @click="executeButtonActions(modalUI.secondButton.actions)" style="width:49%;">{{modalUI.secondButton.text}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalTwoOptions",
  computed: {
    modalUI() {
      return this.$store.state.ui.generic.modalTwoOptions;
    }
  },
  methods: {
    closeModal() {
      this.$store.commit("ui/genericModal", { typeModal: "modalTwoOptions", attributes: {} }, { root: true });
    },
    executeButtonActions(actionParameter){
      if(this.modalUI.executeActions){
        this.executeDispatch(actionParameter.dispatch.name, actionParameter.dispatch.parameter)
        this.executeCommit(actionParameter.commit.name, actionParameter.commit.parameter)
      }
      this.closeModal()
    },
    executeDispatch(dispatchName, dispatchParameter){
      if(dispatchName != null){
        this.$store.dispatch(dispatchName, dispatchParameter);
      }
    },
    executeCommit(commitName, commitParameter){
      if(commitName != null){
        this.$store.commit(commitName, commitParameter);
      }
    },
  }
};
</script>