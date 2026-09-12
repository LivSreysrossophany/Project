<script setup lang="ts">
import Footer from './components/layout/Footer.vue';
import Navbar from './components/layout/Navbar.vue';
import Homapage from './components/views/Homapage.vue';


</script>

<template>
<nav>
   <Navbar/> 
</nav>

<main>
    <router-view></router-view>
</main>
<footer>
    <Footer/>
</footer>

</template>
