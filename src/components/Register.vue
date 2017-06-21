<template>
	<div id="perfilRoot">
		<div class="row">
			<div class="col l8 m8 s8 offset-l2 offset-m2 offset-s2">
				<h3>Cree un perfil de Hechicero!</h3>

				<input type="text" id="nombreInput" v-model="wizard.nombre">
				<label for="nombreInput" class="active">Nombre</label>
				<input type="text" id="usernameInput" v-model="wizard.username">
				<label for="usernameInput" class="active">Username</label>
				<input type="text" id="fechaInput" v-model="wizard.fecha">
				<label for="fechaInput" class="active">Fecha de nacimiento</label>
				<input type="text" id="ocupacionInput" v-model="wizard.ocupacion_previa">
				<label for="ocupacionInput" class="active">Ocupacion previa</label>
				<input type="text" id="paisInput" v-model="wizard.pais">
				<label for="paisInput" class="active">Pais de origen</label>
				<input type="text" id="creenciasInput" v-model="wizard.creencias">
				<label for="creenciasInput" class="active">Creencias religiosas</label>
				<br>
				<button class="btn">Terminar</button>
			</div>
		</div>
	</div>
</template>

<script>
	import baseUrl from '../../config'
	export default{
		name: 'perfil',
		data(){
			return{
				wizard: {

				}
			}
		}
	}
</script>

<style scoped>
	h3{
		text-align: center;
	}

	#perfilRoot{
		width: 65vw;
		animation: fadein 2s;
	}

	.btn{
		margin-top: 10px;
		margin-left: 40%;
	}
</style>