<template>
<div class="demo-item demo-item-rich-text">
    这是一个维护记录的组件
</div>
</template>

<script>
export default {
  props:['list'],
  methods:{
    
  },
  data () {
    return {
      datalist:this.list
    }
  }
}
</script>
