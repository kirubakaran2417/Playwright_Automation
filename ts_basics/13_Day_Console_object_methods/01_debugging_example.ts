// ===== DAY 13: DEBUGGING WITH TYPES =====
// TypeScript enhances console debugging with type information

console.log('--- Type-Safe Logging ---');

interface DebugInfo {
  level: "info" | "warn" | "error";
  message: string;
  data?: unknown;
}

const log = (info: DebugInfo): void => {
  const { level, message, data } = info;
  console.log(`[${level.toUpperCase()}] ${message}`, data);
};

log({ level: "info", message: "Starting app" });
log({ level: "error", message: "Error occurred", data: { code: 500 } });

// CUSTOM logger with types
console.log('\n--- Custom Logger ---');

class Logger {
  private logs: Array<{ timestamp: Date; level: string; message: string }> = [];
  
  info(message: string): void {
    this.logs.push({ timestamp: new Date(), level: "INFO", message });
    console.log(message);
  }
  
  error(message: string): void {
    this.logs.push({ timestamp: new Date(), level: "ERROR", message });
    console.error(message);
  }
  
  getLogs() {
    return this.logs;
  }
}

const logger = new Logger();
logger.info("Application started");
logger.error("An error occurred");

// ASSERTION FUNCTIONS
console.log('\n--- Assertion Functions ---');

function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("Value is not a string");
  }
}

const unknownValue: unknown = "Hello";
assertIsString(unknownValue);
console.log('Length:', unknownValue.length);  // TS knows it's string now

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Debugging ---');
console.log('JS: Console logs whatever without validation');
console.log('TS: Can enforce specific data structures');
console.log('JS: No way to track log history with types');
console.log('TS: Logger class with typed storage');
console.log('JS: Assertions are runtime-only');
console.log('TS: Assert functions refine types for compiler');
