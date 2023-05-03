<script setup>
import Header from "@/components/Header.vue";


</script>

<template>
   
  <main>
    <Header class="header" />
    
    <div class="aside">
   
    </div>

    <div class="article">
    <div class="container">
      <nav class="nav-container">
      
        <router-view />
      </nav>
    </div>
  </div>
  <Footer class="footer" />
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;

}

.nav-container {
  display: flex;
  flex-direction: row;

  grid-gap: 10px;

}

@media (min-width: 1024px) {
  main {
    display: grid;
    grid-column: span 2;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 2fr 15fr 1fr;
  }
  .header {
    display: flex;
    grid-column: span 3;
    background-color: #f2be05fa;
    border-color: #ffffff;
    border-width: 1px;
    border-style: solid;
  }

  .aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: hsl(0, 0%, 1%);
    padding: 10px;
    border-color: #060606;
    border-width: 2px;
    border-style: solid;
  }

  .article {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 2fr);
    grid-template-rows: 1fr 1fr;
    background-color: rgb(4, 4, 4);
    grid-gap: 10px 12px;
    padding: 15px;
    border-color: rgb(241, 235, 235);
  }

  .footer {
    grid-column: span 3;
    background-color: rgba(255, 255, 255, 0.75);
    border-color: #fcf7f7;
    border-width: 2px;
    border-style: solid;
  }

}
</style>
