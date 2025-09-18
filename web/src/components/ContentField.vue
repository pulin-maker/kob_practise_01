<template>
  <div class="card">
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentField",
  components: {
    
  }
}

</script>


<style scoped>
.card {
  margin-top: 10px;
}
</style>