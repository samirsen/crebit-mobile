export type LogLevel = 'info' | 'warn' | 'error' | 'debug';

export interface LoggerConfig {
  isDevelopment: boolean;
  enableTimestamp: boolean;
}

export interface ILogger {
  info(message: string, ...args: any[]): void;
  warn(message: string, ...args: any[]): void;
  error(message: string, ...args: any[]): void;
  debug(message: string, ...args: any[]): void;
}
