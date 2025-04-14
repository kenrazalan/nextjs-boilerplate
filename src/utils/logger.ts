type LogLevel = "debug" | "info" | "warn" | "error";

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: any;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === "development";

  private formatMessage(
    level: LogLevel,
    message: string,
    data?: any,
  ): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
    };
  }

  private log(level: LogLevel, message: string, data?: any): void {
    const logEntry = this.formatMessage(level, message, data);

    if (this.isDevelopment) {
      const consoleMethod = level === "debug" ? "log" : level;
      console[consoleMethod](
        `[${logEntry.timestamp}] ${level.toUpperCase()}: ${message}`,
        data ? "\nData:" : "",
        data ?? "",
      );
    } else {
      // In production, you might want to send logs to a logging service
      // Example: sendToLoggingService(logEntry);
    }
  }

  debug(message: string, data?: any): void {
    if (this.isDevelopment) {
      this.log("debug", message, data);
    }
  }

  info(message: string, data?: any): void {
    this.log("info", message, data);
  }

  warn(message: string, data?: any): void {
    this.log("warn", message, data);
  }

  error(message: string, error?: Error | unknown): void {
    const errorData =
      error instanceof Error
        ? {
            name: error.name,
            message: error.message,
            stack: error.stack,
          }
        : error;

    this.log("error", message, errorData);
  }
}

export const logger = new Logger();
