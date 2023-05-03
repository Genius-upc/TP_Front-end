<template>
    <div class="card">
        <Panel header="Add New User">

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
                <pv-button label="Save" @click="saveuser()"></pv-button>
            </div>

        </Panel>
    </div>
</template>


<script>
import { UserServices } from "@/services/user-api.services";
export default {
    name: "user-create-form",
    data() {
        return {
            userService: new UserServices()
        }
    },
    methods: {
        saveuser() {
            const body = {
                'tipo_arrendor': this.tipo_arrendador,
                'zona': this.zona,
                'distrito': this.distrito,
                'costo_hora': this.costo_hora,
                'costo_mes': this.costo_mes
            }
            this.userService.postUser(body).then((response) => {
                if (response.status === 201) {
                    alert('Created')
                    this.$router.push('/')
                }
                else {
                    alert('Error creating user')
                }
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
<script setup>
import { ref } from 'vue';
const value = ref(null);
</script>
