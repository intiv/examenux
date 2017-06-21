<template>
	<div id="loginRoot">
		<div class="row" id="loginTitle">
			<div class="col l12 m12 s12">
				<p>Bienvenidos a Hogwarts</p>
			</div>
		</div>
		<div class="row">
			<div class="col l6 m6 s6">
				<div id="loginContainer">
					<div class="loginContainerTitle">
						<h4>Login</h4>
					</div>
					<div class="row inputContainer">
						<div class="col l8 m8 s8 offset-l1 offset-m1 offset-s1">
							<input type="text" id="usernameInput" v-model="user.username">
							<label for="usernameInput" class="active">Username</label>
						</div>
					</div>
					<div class="row inputContainer">
						<div class="col l8 m8 s8 offset-l1 offset-m1 offset-s1">
							<input type="password" id="passwordInput" v-model="user.password">
							<label for="passwordInput" class="active">Password</label>
						</div>
					</div>
					<div class="row buttonsContainer">
						<div class="col l4 m4 s4 offset-l1 offset-m1 push-l2">
							<button class="btn" v-on:click="login()">Login</button>
						</div>
					</div>
					
				</div>
			</div>
			<div class="col l6 m6 s6">
				<div id="registerContainer">
					<div class="loginContainerTitle">
						<h4>Register</h4>
					</div>
					<div class="row inputContainer">
						<div class="col l8 m8 s8 offset-l1 offset-m1 offset-s1">
							<input type="text" id="registerUsernameInput" v-model="registro.username">
							<label for="registerUsernameInput" class="active">Username</label>
						</div>
					</div>
					<div class="row inputContainer">
						<div class="col l8 m8 s8 offset-l1 offset-m1 offset-s1">
							<input type="password"  id="registerPasswordInput" v-model="registro.password">
							<label for="registerPasswordInput" class="active">Password</label>
						</div>
					</div>
					<div class="row buttonsContainer">
						<div class="col l4 m4 s4 offset-l1 offset-m1 push-l2">
							<button class="btn" v-on:click="register()">Register</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import baseUrl from '../../config.js'
	export default{
		name: 'login',
		data() {
			return{
				user: {
					username: '',
					password: ''
				},
				registro: {
					username: '',
					password: '',
					scope: ['hechicero']
				}

			}
		},
		methods : {
			login(){
				var User= {
					username: this.user.username,
					password: this.user.password
				}
				
				if(this.user.username.length>0 && this.user.password.length>0){
					this.$http.post(`${baseUrl.uri}/login`,User).then((response)=>{

						if(response.body.success===true){
							localStorage.setItem('user',JSON.stringify(User));
							swal(
								{
									title: 'Login con exito!',
									text: 'Bienvenido a Hogwartz! ',
									type: 'success',
									confirmButtonColor: '#327A41'
								}
							);
							this.$router.push('/perfil');//redirect
						}else{
							swal({
								title: 'Error',
								text: 'Algo salio mal',
								type: 'error'
							});
							this.user.username = '';
							this.user.password = '';
						}
					});
				}else{
					swal({
						title: 'Login failed!',
						text: 'Username and password are required',
						type: 'warning'
					});
				}
			},
			register(){
				var nUser = this.registro;

				this.$http.post(`${baseUrl.uri}/register`, nUser).then((response)=>{
					localStorage.setItem('user',JSON.stringify(nUser));
					if(response.body.success === true){
						swal({
							title: 'Registered!',
							text: 'User registered succesfully!',
							type: 'success'
						});
						this.$router.push('/crearPerfil');
					}else{
						alert({
							title: 'Oops!',
							text: 'Registration failed',
							type: 'error'
						});
					}
				});
			}
		}
	}
</script>

<style scoped>

	.correct{
		background-color: green;
	}

	.malo{
		background: red;
	}

	#loginContainer{
		background-color: lightgrey;
		width: 30vw;
		height: 45vh;
		margin: 10% auto;
		padding-top: 10px;
		border-radius: 5px;
		animation: fadein 2s;

	}

	#loginTitle{
		text-align: center;
	}

	.loginContainerTitle{
		text-align: center;
	}

	button{
		margin-top: 5px;
		width: 8vw;
		font-size: 1vw;
	}

	#registerContainer{
		background-color: lightgrey;
		width: 30vw;
		height: 45vh;
		margin: 10% auto;
		border-radius: 5px;
		padding-top: 10px;
		animation: fadein 2s;
	}
	
	.checkP{
		margin-top: 0px;
		margin-left: 50px;
	}
	.inputContainer{
		margin-left: 5vw;
		margin-bottom: 5px;
	}

	.buttonsContainer{
		margin-top: 10px;
		margin-left: 50px;

	}

	p{
		font-size: 6vh;
		margin-bottom: 0;

	}

	#loginTitle{
		width: 100%;
		margin-bottom: 0;
		margin-left: 2.5vw;
		background-color: lightgrey;
		width: 30vw;
		margin-left: 35%;
	}

	label{
		color: black;
	}

	input{
		border-bottom: 1px solid black;
		box-shadow: 0 1px 0 0 black;
		color: black;
	}

	button{
		color: black;
	}
</style>
