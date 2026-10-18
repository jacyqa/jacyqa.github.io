---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "yobe文档"
  text: "分享作品，资源，工具的网站"
  tagline: Enjoy your time
  image:
    src: /logo.webp
    alt: yobelogo
  actions:
    - theme: brand
      text: 获取作品
      link: /src/index
    - theme: alt
      text: 资源分享
      link: /share/index
    - theme: alt
      text: 教程分享
      link: /tutorial/index

features:
  - title: 我的作品
    details: 我的木偶，木偶的原图（当然作者不是我）和木偶的绿幕素材（可以做溶图打光什么的）。
  - title: 有用网站分享
    details: 会分享一些我做木偶时会用到的网站，以及一些有意思的网站。
  - title: 工具
    details: 会分享一些做木偶时用到的工具，包括一些AE插件，脚本等。
---

<style>
  :root {
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(54px);
}
</style>
<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  gsap.from('.VPNav',{
    y: -1500, duration: 0.5, ease: 'power1.out'
  })
  gsap.from('.VPHomeFeatures', {
    y: 1500, duration: 0.5, ease: 'power1.out', delay: 0.5
  })
})

</script>
