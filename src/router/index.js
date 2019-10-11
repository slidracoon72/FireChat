import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';
import Chat from '@/components/Chat';
import About from '@/components/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About,
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome,
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.name) {
          next();
        } else {
          next({ name: 'Welcome' });
        }
      },
    },
  ],
  mode: 'history',
});
