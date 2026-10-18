<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref } from 'vue'

const { Layout } = DefaultTheme

const outline = ref("yobe's blog")


</script>

<template>
    <Layout>
        <template #aside-outline-before>
            {{ outline }}
        </template>
    </Layout>
</template>