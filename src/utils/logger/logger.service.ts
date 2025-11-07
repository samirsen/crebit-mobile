import { LogLevel, ILogger } from './logger.types';
import { LOGGER_CONFIG } from './logger.config';

class Logger implements ILogger {
  private log(level: LogLevel, message: string, ...args: any[]) {
    // Only log if in development environment
    if (!LOGGER_CONFIG.isDevelopment) return;

    // Correctly get timestamp using ternary operator
    const timestamp = LOGGER_CONFIG.enableTimestamp
      ? new Date().toISOString()
      : '';

    // Correctly format the log message with the timestamp
    const logMessage = timestamp ? `[${timestamp}] ${message}` : message;

    // Log to the console
    console[level](logMessage, ...args);
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