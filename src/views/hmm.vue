<template>
  <div class="hmm">
    <div class="hmm-item">
      <div class="hmm-item-content">
        <div class="hmm-item-content-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hmm',
  components: {},
  props: {},
  data() {
    return {
      inputNum: '',
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.hmm {
  padding: 20px;
  .hmm-item {
    .hmm-item-content {
      .hmm-item-content-box {
        width: 150px;
        height: 150px;
        border: 1px solid #000;
      }
    }
  }
}
</style>
