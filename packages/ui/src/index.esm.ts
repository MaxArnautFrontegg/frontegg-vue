import _Vue, { PluginFunction } from 'vue';

import './styles/app.scss';
// Import vue components
import * as authComponents from './auth/index';
import * as teamComponents from './team/index';

import Vuetify from 'vuetify';

export const vuetify = new Vuetify();

_Vue.use(Vuetify);

// install function executed by Vue.use()
const install: PluginFunction<any> = function installVueUi(Vue: typeof _Vue) {

  Object.entries(authComponents).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });

  Object.entries(teamComponents).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });

  const routes = Vue.fronteggAuth.routes;

  Vue.fronteggAuth.router.addRoute({
    path: routes.loginUrl,
    name: 'Login',
    component: authComponents.LoginPage,
  });

  Vue.fronteggAuth.router.addRoute({
    path: routes.activateUrl,
    name: 'ActivateAccount',
    component: authComponents.ActivateAccount,
  });

  Vue.fronteggAuth.router.addRoute({
    path: routes.acceptInvitationUrl,
    name: 'AcceptInvitation',
    component: authComponents.AcceptInvitation,
  });

  Vue.fronteggAuth.router.addRoute({
    path: routes.forgetPasswordUrl,
    name: 'ForgotPassword',
    component: authComponents.ForgotPassword,
  });

  Vue.fronteggAuth.router.addRoute({
    path: routes.resetPasswordUrl,
    name: 'ResetPassword',
    component: authComponents.ResetPassword,
  });

  Vue.fronteggAuth.router.addRoute({
    path: routes.logoutUrl,
    name: 'LogoutPage',
    component: authComponents.LogoutPage,
  });

  Vue.fronteggAuth.router.addRoute({
    path: routes.socialLoginCallbackUrl ?? '/account/social/success',
    name: 'SocialLoginsSuccess',
    component: authComponents.SocialLoginsSuccess,
  });

  Vue.fronteggAuth.router.addRoute({
    path: routes.signUpUrl,
    name: 'SignUp',
    component: authComponents.SignUp,
  });
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from './auth';
export * from './team';

