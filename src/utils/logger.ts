type LogLevel = 'info' | 'warn' | 'error' | 'debug';

class Logger {
  private isDevelopment = __DEV__;

  private log(level: LogLevel, message: string, ...args: any[]) {
    if (!this.isDevelopment) return;
    
    const timestamp = new Date().toISOString();
    console[level](`[${timestamp}] ${message}`, ...args);
  }

  info(message: string, ...args: any[]) {
    this.log('info', message, ...args);
  }

  warn(message: string, ...args: any[]) {
    this.log('warn', message, ...args);
  }

  error(message: string, ...args: any[]) {
    this.log('error', message, ...args);
  }

  debug(message: string, ...args: any[]) {
    this.log('debug', message, ...args);
  }
}

export const logger = new Logger();



