<template>
  <div id="app">
  	<div class="container" v-if="isLogin()===false">
		<div class="row" id="body">
			<div class="col l2 m2 s2">
				<aside id="sidebar">
					<div class="linkContainer" >
						<a>
						<router-link to="/hechizos">
							<p>Hechizos</p>
						</router-link>
						</a>
					</div>
				
					<div class="linkContainer">
						<a>
							<router-link to="/books/search">
								<p>Amistades</p>
							</router-link>
						</a>
					</div>
				</aside>
			</div>
			<div class="col l10 m10 s10" id="contentRender">
				<router-view></router-view>
			</div>
		</div>
	</div>		
  	<div v-if="isLogin()===true">
  		<router-view></router-view>
  	</div>
  </div>

</template>

<script>
	import baseUrl from '../config'
	export default {
	  name: 'app',
	  data(){
	  	return {
	  		Selected : false
	  	}
	  },
	  methods : {
	  	
	  	isLogin(){
	  		if(this.$route.path==='/login'){
	  			return true;
	  		}else{
	  			return false;
	  		}
	  	},
	  	Logout(){
	  		this.$http.put(`${baseUrl.uri}/logout`).then((response)=>{
	  			this.$router.push('/login');
	  		});
	  	}
	  }
	}
</script>


<style>
	@keyframes fadein {
	  0% { opacity: 0; }
	  80%   { opacity: 0; }
	  90% {opacity: 0.5;}
	  100% {opacity: 1;}
	}

	@keyframes slidein {
	  0% { opacity: 0; }
	  80%   { opacity: 0; }
	  90% {opacity: 0.5;}
	  100% {opacity: 1;}
	}

	/* Firefox < 16 */
	@-moz-keyframes fadein {
	  from { opacity: 0; }
	  to   { opacity: 1; }
	}

	/* Safari, Chrome and Opera > 12.1 */
	@-webkit-keyframes fadein {
	  from { opacity: 0; }
	  to   { opacity: 1; }
	}

	/* Internet Explorer */
	@-ms-keyframes fadein {
	  from { opacity: 0; }
	  to   { opacity: 1; }
	}

	#sidebar{
		text-align: center;
		height: 93vh;
		background-color: #327A41;
		font-size: 2vh; 
		filter: saturate(100%);
		margin-left: 25%;
		padding-top: 30%;
		border: 2px solid #184223;
		width: 15vw;
		animation: fadein 2s;
	}

	#app{
		margin-top: 5px;
		height:100vh;
		width: 100vw;
	}

	.container{
		width: 100vw;
		margin: 5% 10%;
		display: inline;
	}

	.current{
		background-color: darkgreen;
	}

	#contentRender{
		height: 93vh;
		width: 65vw;
		margin-left: 10%;
		border: 2px #171717 solid;
		background-color: #f2f2f2;
		padding: 0;
	}
	
	router-link{
		background-color: #462E22;
	}

	*{
		font-family: 'Roboto', sans-serif;
	}
	body{
		
		background-image: url('./wood.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		font-family: "Roboto";
	}

	nav{
		background-color: #743B2F;
		font-size: 5vh;
		width:80vw;
		box-shadow: 1px 1px 10px black;
		border: 2px solid #3D1E19;
	}

	a{
		color: white;
		height: 100%;
		margin-top: 0px;
		margin-bottom: 0px;
	}

	hr{
		margin-top: 0;
		margin-bottom: 0;
	}
	
	.btn{
		background-color: #327A41;
	}

	.btn:hover{
		background-color: #006400;
		transition: background-color 0.3s ease-in-out;
	}

	.linkContainer{
		height: 10%;
		text-align: center;
		padding-top: 3px;
		border: 1px solid darkgreen;
	}

	.linkContainer:hover{
		background-color: darkgreen;
		transition: background-color 0.3s ease-in-out;
	}

	router-link>p{
		margin-top: 0;
		margin-bottom: 0;
	}

	#nav-mobile{
		margin-right: 10px;
		padding-bottom: 10px;
	}
</style>
