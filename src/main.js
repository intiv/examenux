// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import App from './App.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Perfil from './components/Perfil.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.http.options.credentials = true;

const router = new VueRouter({
	routes : [

		{
			name: 'Login',
			path: '/login',
			component: Login
		},
		{
			name: 'Register',
			path: '/crearPerfil',
			component: Register
		},
		{
			name: 'Perfil',
			path: '/perfil/:username',
			component: Perfil
		}
	]
});


router.replace('/login');

new Vue({ // eslint-disable-line no-new
  router,
  render: (h) => h(App)
}).$mount('#app');