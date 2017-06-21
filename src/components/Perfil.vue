<template>
	<div id="perfilRoot">
		<div class="row">
			<div class="col l8 m8 s8 offset-l2 offset-m2 offset-s2">
				<h3>Nombre: {{wizard.nombre}} </h3>
				<h4>Username: {{wizard.username}}  </h4>
				<ul>
					<li>-Fecha de nacimiento: {{wizard.fecha}} </li>
					<li>-Ocupacion previa: {{wizard.ocupacion_previa}} </li>
					<li>-Pais origen: {{wizard.pais}} </li>
					<li>-Creencias religiosas: {{wizard.creencias}} </li>
				</ul>
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
		},
		beforeMount(){
			
		}
	}
</script>

<style scoped>
	
</style>