export interface StatusBarConfig {
  barStyle: 'light-content' | 'dark-content';
  backgroundColor: string;
}

export type RouteStatusBarMap = {
  [routeName: string]: StatusBarConfig;
};
