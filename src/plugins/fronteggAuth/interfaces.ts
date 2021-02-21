export type AuthPageRoutes = {
  /**
   * the page whither need to redirect in the case when a user is authenticated
   * @default: url before redirect to login or '/'
   */
  authenticatedUrl: string;
  /**
   * the page whither need to redirect in the case when a user is not authenticated
   */
  loginUrl: string;
  /**
   * navigating to this url, AuthProvider will logout and remove coockies
   */
  logoutUrl: string;
  /**
   * the page whither need to redirect in the case when a user want to activate his account
   */
  activateUrl: string;
  /**
   * the page whether need to redirect in the case when a user want to accept invite to tanent
   */
  acceptInvitationUrl: string;
  /**
   * the page in the case a user forgot his account password
   */
  forgetPasswordUrl: string;
  /**
   * the page whither need to redirect in the case when a user redirected from reset password url
   */
  resetPasswordUrl: string;
  /**
   * the url to reach the idp redirect after successful SAML response
   */
  samlCallbackUrl?: string;
  /**
   * the url to reach the idp redirect after successful SAML response
   */
  socialLoginCallbackUrl?: string;
  /**
   * sign up page
   */
  signUpUrl: string;
};

export interface HideOption {
  hide?: boolean;
}

export interface RouteWrapper {
  path?: string;
}

export interface BasePageProps {
  rootPath?: string;
}

export type AuthPluginOptions = { routes?: Partial<AuthPageRoutes> };