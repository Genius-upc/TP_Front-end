<template>
  <div class="card">
    <div v-for="user in users" class="container">
      <div>User {{ user.id }}</div>
      <router-link :to="{ name: 'user', params: { id: user.id } }">Edit</router-link>
      <pv-button label="Eliminar" @click="deleteUser(user.id)"></pv-button>
    </div>
  </div>
</template>
  
<script>
import { UserServices } from "@/services/user-api.services";

export default {
  name: "list-user",
  data() {
    return {
      users: [],
      userService: new UserServices()
    }
  },
  beforeMount() {
    console.log('getting')
    this.GetAll();
  },
  methods: {
    deleteUser(id) {
      this.userService.deleteUser(id).then((response) => {
        if (response.status === 200) {
          alert("user deleted");
        }
        else {
          alert("error deleting user");
        }
      })
    },
    GetAll() {
      this.userService.getUser().then((response) => {
        console.log('response', response.data);
        this.users = response.data;
      })
    }
  }

}
</script>
  
<style scoped>
.container {
  display: grid;
  flex-direction: row;
}

.card {
  display: flex;
  grid-column: span 3;
  gap: 20px;
  align-items: center;
  padding: 10px;
}
</style>