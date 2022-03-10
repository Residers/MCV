<template>
  <div class="home-page">
    <mcv-banner />
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <mcv-feed :api-url="apiUrl" />
        </div>
        <div class="col-md-3">POPULAR TAGS</div>
      </div>
    </div>
  </div>
</template>

<script>
import McvFeed from '@/components/Feed'
import McvBanner from '@/components/Banner'
export default {
  name: 'McvGlobalFeed',
  components: {McvFeed, McvBanner},
  data() {
    return {
      apiUrl: '/articles',
    }
  },
}
</script>
