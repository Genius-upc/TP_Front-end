<template>
    <div class="card">
        <Panel header="Edit User">

            <div>Id: {{ id }}</div>

            <div class="card flex justify-content-center">
                <label for="tipo_arrendador">Owner Type :</label>
                <InputText id="tipo_arrendador" v-model="tipo_arrendador" />
            </div>

            <div class="card flex justify-content-center">
                <label for="zona">Zone :</label>
                <InputText id="zona" v-model="zona" />
            </div>

            <div class="card flex justify-content-center">
                <label for="distrito">District :</label>
                <InputText id="distrito" v-model="distrito" />
            </div>

            <div class="card flex justify-content-center">
                <label for="ubicacion">Location :</label>
                <InputText id="ubicacion" v-model="ubicacion" />
            </div>
            <div class="card flex justify-content-center">
                <label for="costo_hora">Cost hour :</label>
                <InputText id="costo_hora" v-model="costo_hora" />
            </div>

            <div class="card flex justify-content-center">
                <label for="costo_mes">Cost month :</label>
                <InputText id="costo_mes" v-model="costo_mes" />
            </div>
            <div class="card flex justify-content-center">
                <pv-button label="Save" @click="editUser()"></pv-button>
            </div>

        </Panel>
    </div>
</template>

<script>
import { UserServices } from "@/services/user-api.services";
export default {
    name: "user-form",
    data() {
        return {
            id: 0,
            tipo_arrendador: '',
            zona: '',
            distrito: '',
            ubicacion: '',
            costo_hora: '',
            costo_mes: '',
            userService: new UserServices()
        }
    },
    methods: {
        editUser() {
            const body = {
                'tipo_arrendador': this.tipo_arrendador,
                'zona': this.zona,
                'distrito': this.distrito,
                'costo_hora': this.costo_hora,
                'costo_mes': this.costo_mes
            }
            this.userService.putUser(body, this.id).then((response) => {
                if (response.status === 200) {
                    alert("user updated")

                    this.$router.push('/ListUser')
                }
                else {
                    alert("error updating user")
                }
            })
        }
    },
    mounted() {
        if (this.$route.params.id) {
            this.id = this.$route.params.id; //identifica si lo estoy enviando un parametro
            console.log('getting id ', this.$route.params.id)

            this.userService.getUserById(this.id).then((response) => { // va a la servicio
                //con el then espreamos mientras que procese nuestra peticion y se pone un variable respuesta
                // seteamos los variables
                this.tipo_arrendador = response.data.name; //trae la informacio a traves  de las variables y lo enlaza con los imputext
                this.zona = response.data.username;
                this.distrito = response.data.email;
                this.ubicacion = response.data.address;
                this.costo_hora = response.data.phone;
                this.costo_mes = response.data.website;
            })
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    grid-column: span 3;
    gap: 20px;
    align-items: center;
    padding: 10px;
}
</style>