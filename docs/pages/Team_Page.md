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
    avatar: '/nalanyinyun.jpg',
    name: 'Nalanyinyun',
    title: 'Writer,Developer(docs),Maintainer(docs)',
    links: [
      { icon: 'github', link: 'https://github.com/naranyinyun' },
      { icon: 'youtube', link: 'https://space.bilibili.com/384920476' },
    ]
  },
  {
    avatar: '/RBQ.jpg',
    name: 'XiaHua',
    title: 'Developer(ROM),Maintainer(ROM)',
    links: [
        { icon: 'youtube', link: 'https://space.bilibili.com/251529945' },
    ]
  },
  {
    avatar: '/xuejian.jpg',
    name: '雪见松竹',
    title: 'Contributor(docs),Yuru-chara'
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      关于我们
    </template>
    <template #lead>
      本项目包括文档和资源,它们由这些人共同创建:
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>