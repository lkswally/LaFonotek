<template>
  <div id="app">
    <SectionHeader />
    <router-view />
    <SectionFooter />
  </div>
</template>

<script>
import SectionHeader from './components/SectionHeader';
import SectionFooter from './components/SectionFooter';

export default {
  components: {
    SectionHeader,
    SectionFooter
  }
};
</script>
