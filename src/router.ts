import {createRouter, createWebHashHistory} from 'vue-router';
import {h} from 'vue';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import DocDemo from './components/DocDemo.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import Markdown from './components/Markdown.vue';


const history = createWebHashHistory();
const md = (filename) => h(Markdown, {path:`../markdown/${filename}.md`, key: filename});
export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: '',
          redirect: '/doc/intro'
        },
        {
          path: 'intro',
          component: md('intro')
        },
        {
          path: 'install',
          component: md('install')
        },
        {
          path: 'get-started',
          component: md('get-started')
        },
        {
          path: 'switch',
          component: SwitchDemo
        },
        {
          path: 'button',
          component: ButtonDemo
        },
        {
          path: 'dialog',
          component: DialogDemo
        },
        {
          path: 'tabs',
          component: TabsDemo
        },
      ]
    }
  ],
});

router.afterEach(() => {
  console.log('路由切换了');
});