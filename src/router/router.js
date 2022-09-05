import Vue from 'vue';
import Router from 'vue-router';

import colorsCatalog from '../components/colors-catalog';

Vue.use(Router);


let router = new Router({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: colorsCatalog
        }

    ]
})

export default router;