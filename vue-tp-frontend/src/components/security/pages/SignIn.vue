<template>
  <div class="w-full flex flex flex-column mt-8">
    <div class="flex flex-column w-22rem mx-auto row-gap-2">
      <div class="w-fit mx-auto mb-4">
        <hi>Sign In</hi>
      </div>
      <div class="">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-user"></i>
          </span>
          <pv-input-text v-model="username" placeholder="Username" />
        </div>
      </div>
      <div class="">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-eye-slash"></i>
          </span>
          <pv-password v-model="password" toggleMask placeholder="Password"></pv-password>
        </div>
      </div>

      <div class="mx-auto mt-4">
        <pv-button @click="onSubmit" label="Sign In"></pv-button>
      </div>

      <div @click="closeMessage" v-if="error">
        <pv-message severity="error">{{ error }}</pv-message>
      </div>

      <div>
        <RouterLink to="/signUp">
          <a>No tienes cuenta ? registrate haciendo click aqui!</a>
        </RouterLink>
      </div>

    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { UsersApiService } from "@/security/services/users-api.service";

export default {
  name: "SignIn",
  setup() {
    const username = ref();
    const password = ref();
    return { username, password };
  },
  data() {
    return {
      error: "",
      userData: {},
      usersService: null,
      loading: false,
    };
  },
  created() {
    this.userData = JSON.parse(localStorage.getItem("userData"));
    if (this.userData) this.$router.push({ name: "dashboard" });
  },
  methods: {
    async onSubmit() {
      this.loading = true;

      if (!this.username || !this.password) {
        this.error = "Incomplete Data";
      }
      else {
        this.usersService = new UsersApiService();

        let user = {
          username: this.username,
          password: this.password,
        };
        console.log(user);
        await this.usersService
          .signIn(user)
          .then((res) => {
            console.log('RESPONSE', res);
            localStorage.setItem("userData", JSON.stringify(res.data));
            localStorage.setItem("token", JSON.stringify(res.data.token));
            window.location.reload();
          })
          .catch((err) => {
            console.log('RESPONSE', err.response.data);
            this.error = err.response.data.message;
          });
      }

      this.loading = false;
    },
    closeMessage() {
      this.error = "";
    },
  },

}
</script>

<style scoped></style>