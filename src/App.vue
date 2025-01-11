<template>
  <div>
    <!-- Navbar always visible -->
    <Navbar />

    <!-- Dynamic routing happens here -->
    <main>
      <router-view />
    </main>

    <!-- Footer always visible -->
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
/* Optional global styling */
main {
  padding: 1rem;
}
</style>
