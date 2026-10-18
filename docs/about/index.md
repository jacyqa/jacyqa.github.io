---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/logo.webp',
    name: 'Derek yobe',
    title: '内容创作者',
    links: [
      { icon: 'github', link: 'https://github.com/jacyqa' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Hi! I'm Yobe.
    </template>
    <template #lead>
       我是一名内容创作者，业余前端爱好者。同时也是一名在校学生，很高兴认识你！
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>