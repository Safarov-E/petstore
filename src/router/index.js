import Vue from 'vue'
import Router from 'vue-router'
import Form from '../components/Form'
import Main from '../components/Main'
import Product from '../components/Product'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'iMain',
            component: Main,
            props: true
        },
        {
            path: '/form',
            name: 'Form',
            component: Form,
            props: true
        },
        {
            path: '/products/:id',
            name: 'Id',
            component: Product,
            props: true
        }
    ]
})