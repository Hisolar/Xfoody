<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import SButton from "../components/SButton.vue";
import HomeOrganizer from "../components/HomeOrganizer.vue";

import { ref, reactive } from "vue";
const isLogged = ref(false);
</script>

<template>
  <div>
    <HomeOrganizer :show-left-navigation="isLogged">
      <template #top_navigation>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Team</li>
        <li>Blogs {{ isLogged }}</li>
        <li @click="isLogged = true">Login</li>
      </template>

      <template #left_navigation>
        <li>Sport</li>
        <li>Technology</li>
        <li>Business</li>
        <li>Finance</li>
      </template>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, magni
      neque! Earum tenetur voluptate a, possimus quisquam commodi iusto
      praesentium delectus repudiandae consequatur necessitatibus rerum adipisci
      voluptas illo aut dolore.
    </HomeOrganizer>
  </div>
</template>
