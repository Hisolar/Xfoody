<script setup>
import SButton from "../components/SButton.vue";
import HomeOrganizer from "../components/HomeOrganizer.vue";

import gistUsers from "@/data/users.js";
</script>

<template>
  <div>
    <HomeOrganizer>
      <template #left_navigation>
        <li>Sport</li>
        <li>Technology</li>
        <li>Business</li>
        <li>Finance</li>
        <li>Others</li>
      </template>

      <template #top_navigation>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Team</li>
        <li>Blogs</li>
      </template>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, magni
      neque! Earum tenetur voluptate a, possimus quisquam commodi iusto
      praesentium delectus repudiandae consequatur necessitatibus rerum adipisci
      voluptas illo aut dolore.
    </HomeOrganizer>

    <div>
      <div
        class="flex justify-center items-center py-20 flex-col gap-28 container mx-auto"
      >
        <div class="flex items-center justify-center flex-col gap-6 py-6">
          <h1 class="text-5xl font-bold">Gihub Users</h1>
          <div class="h-1 bg-blue-300 w-44"></div>
        </div>

        <div class="grid w-full md:grid-cols-4 gap-12 pt-3">
          <article v-for="user in gistUsers"
            :key="user.id"
            class="bg-white flex justify-center items-center gap-8 flex-col w-full p-5 shadow-md rounded-md"
          >
            <img :src="user.avatar_url" alt="" class="h-24 w-24 rounded-full" />
            <h1 class="text-[#617D98] capitalize">{{ user.login }}</h1>

            <div>Node: {{ user.node_id }}</div>
            <a
              href="{element.html_url}"
              class="bg-[#48A6E8] text-white uppercase rounded-2xl px-2 py-1 text-sm tracking-widest"
            >
              view profile
            </a>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
