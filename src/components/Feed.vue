<template>
  <div>FEED {{ apiUrl }}</div>
</template>
<script>
export default {
  name: 'McvFeed',
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },
}
</script>
