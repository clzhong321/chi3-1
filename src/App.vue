<script setup>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import AppToast from './components/ui/AppToast.vue'
</script>

<template>
  <div class="site">
    <AppHeader />
    <main class="site__main">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter />
    <AppToast />
  </div>
</template>

<style scoped>
.site{display:flex;min-height:100vh;flex-direction:column}
.site__main{flex:1;padding-top:76px}
</style>
