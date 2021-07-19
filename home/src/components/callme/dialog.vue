<script>
export default {
  name: 'CallMeDialog'
}
</script>

<template lang="pug">
.callme-dialog
  .content {{ TextMap.phone }}
  .gray (电话)
  .content {{ TextMap.email }}
  .gray (邮箱)
  .img-box
    img.w-100(:src="`${baseOss}/qrcode.jpg`")
  .gray (备注来意，谢谢)
  .close-icon(
    @click="$emit('closeDialog')"
  )
    img.w-100(:src="`${baseOss}/close_icon.png`")
</template>

<style lang="scss">
.callme-dialog {
  text-align: center;
  padding-top: 3.8rem;
  .content {
    font-size: 1.68rem;
    font-weight: 600;
  }
  .gray {
    font-size: 0.84rem;
    color: #CAC7D6;
    margin-bottom: 2.3rem;
  }
  .img-box {
    width: 7.3rem;
    margin: 0 auto;
  }
  .close-icon {
    cursor: pointer;
    width: 1.2rem;
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
  }
}
</style>
