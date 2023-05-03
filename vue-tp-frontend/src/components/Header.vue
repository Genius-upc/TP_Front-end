
<template>
  <header class="header">

    <div class="container">
      <a href="menu">{{ menu }}</a>
      <img src="src/img/car.png" />
      <!--<input id="menu" type="button" @click="handleClick(3)" value="Click me !">-->
    </div>

    <div class="container">
      <router-link to="/ListUser">Users</router-link>
      <router-link to="/User">Ad User</router-link>

    </div>

    <div class="container">

      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText v-model="value1" placeholder="Search" />
      </span>
      <a href="title">{{ }}</a>
      <!--<router-link to="/ListComponent">{{ title }}</router-link>-->
    </div>

    <div class="container">
      <router-link to="/SignIn">{{ profile }}</router-link>
      <!-- <a  href="profile">{{ profile }}</a>  titulo sin roteo -->
      <img src="src/img/login.png" alt="" />
    </div>
  </header>
</template>

<script >
export default {
  name: "header",
  props: {
    menu: String,
    title: String,
    profile: String,
  },
  data() {
    return {
      menu: 'Genius',
      title: 'Buscar',
      profile: 'Login'
    }
  },

  mounted() {
    console.log('...montando componente')
  },
  updated() {
    console.log('----actualizando componente')
  },
  methods: {
    handleClick(numberA) {
      console.log('haciendo click', numberA)
      this.menu = 'more options'
      this.profile = 'login'
    },
  }
}
</script>
<style scoped>
header {
  font-size: 1.5rem;
  padding: 2.7rem;
  color: #0a0a0a;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

}

.container img {
  float: left;
  margin-top: -10px;
  margin-right: 10px;
  border-radius: 50%;

}

header a {
  transition: color 0.3s ease;
  color: #0a0a0a;
  text-decoration: none;

}

img {
  width: 60px;
  height: 60px;
  float: left;
}
</style>