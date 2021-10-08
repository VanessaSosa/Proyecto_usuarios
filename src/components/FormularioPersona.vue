<template>
  <v-container>
    <h1>Formulario Persona</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <!-----FILA 1----->
      <v-row>
        <!-----COLUMNA 1----->
        <v-col cols="6" sm="6" md="6">
          <v-text-field
            v-model="nombre"
            :counter="50"
            :rules="rules"
            label="Nombre"
            required
            outlined
          ></v-text-field>
        </v-col>
        <!-----COLUMNA 2----->
        <v-col cols="6" sm="6" md="6"
          ><v-text-field
            v-model="apellido"
            :counter="50"
            :rules="rules"
            label="Apellido"
            required
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <!-----FILA 2----->
      <v-row>
        <!-----COLUMNA 1----->
        <v-col cols="6" sm="6" md="6">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            outlined
          ></v-text-field>
        </v-col>
        <!-----COLUMNA 2----->
        <v-col cols="6" sm="6" md="6">
          <v-text-field
            v-model="telefono"
            :counter="50"
            :rules="rules"
            label="Teléfono"
            required
            outlined
            type="tel"
          ></v-text-field>
        </v-col>
      </v-row>
      <!-----FILA 3----->
      <v-row>
        <!-----COLUMNA 1----->
        <v-col cols="6" sm="6" md="6"
          ><v-text-field
            v-model="cedula"
            :counter="50"
            :rules="rules"
            label="Cédula"
            required
            outlined
          ></v-text-field>
        </v-col>
        <!-----COLUMNA 2----->
        <v-col cols="6" sm="6" md="6">
          <v-text-field
            v-model="edad"
            :counter="3"
            :rules="agerules"
            label="Edad"
            required
            outlined
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="registrar">
        Registrar
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import store from "../store/index.js";
export default {
  data: () => {
    return {
      valid: true,
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      cedula: "",
      edad: "",
      rules: [
        (v) => !!v || "Este campo es requerido",
        (v) => (v && v.length <= 50) || "Máximo 50 caracteres",
      ],
      agerules: [
        (v) => !!v || "Este campo es requerido",
        (v) => (v && v.length <= 3) || "Máximo 3 caracteres",
      ],
      emailRules: [
        (v) => !!v || "El E-mail es requerido",
        (v) => /.+@.+\..+/.test(v) || "Ingrese un E-mail válido",
      ],
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false,
    };
  },
  methods: {
    registrar() {
      if (this.$refs.form.validate()) {
        let objPersona = {
          nombre: this.nombre,
          apellido: this.apellido,
          email: this.email,
          telefono: this.telefono,
          edad: this.edad,
        };
        //crear una persona; realiza solicitud post al backend
        store.dispatch("crearPersona", objPersona).then(()=>{
          //Limpia el formulario cuando se registra una persona
          this.$refs.form.reset()
        })
      }
    }, 
  },
};
</script>

<style>
</style>
