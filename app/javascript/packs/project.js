import Vue from 'vue/dist/vue.esm'
import VueResource from 'vue-resource'

Vue.user(VueResource)

document.addEventListener('turbolinks:load', () => {
    Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').get
    Attribute('content')
  var element = document.getElementById('team-form')
})
