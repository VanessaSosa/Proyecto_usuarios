<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">Nommbre</th>
          <th class="text-center">Apellido</th>
          <th class="text-center">email</th>
          <th class="text-center">telefono</th>
          <th class="text-center">edad</th>
          <th class="text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in personas" :key="item._id">
          <td>{{ item.nombre }}</td>
          <td>{{ item.apellido }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.telefono }}</td>
          <td>{{ item.edad }}</td>
          <!----Listado de acciones-->
          <td>
            <v-btn class="ma-2" outlined color="indigo">
              Actualizar
            </v-btn>
            <v-btn class="ma-2" outlined color="error" v-on:click="eliminar(item._id)">
              Eliminar
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import store from "../store/index.js";

export default {
    methods: {
        eliminar(id){
            console.log("Eliminar-->",id);
            let obj = { id };
            store.dispatch('eliminarPersona', obj).then(()=>{
              //realiza solicitud get al backend
                store.dispatch("cargarpersona");
            });
        }
    },
  created: () => {
    //Realiza solicitud get al backend
    store.dispatch("cargarPersonas");
  },
  //propiedades computadas
  computed: {
    personas: () => {
      return store.state.personas;
    },
  },
};
</script>

<style>
</style>