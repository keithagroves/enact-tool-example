#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);
const params = {};

for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith('--')) {
    const key = args[i].slice(2);
    if (i + 1 < args.length && !args[i + 1].startsWith('--')) {
      params[key] = args[i + 1];
      i++;
    } else {
      params[key] = true;
    }
  }
}

// Define available operations
const operations = {
  echo: (message) => {
    return { result: message };
  },
  
  countWords: (text) => {
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    return {
      result: words.length,
      words: words
    };
  },
  
  generateReport: (title, content) => {
    const timestamp = new Date().toISOString();
    const report = {
      title,
      content,
      timestamp,
      wordCount: content.trim().split(/\s+/).filter(w => w.length > 0).length,
      charCount: content.length
    };
    
    return {
      result: "Report generated successfully",
      report
    };
  }
};

// Main function
async function main() {
  try {
    // Get operation type
    const operation = params.operation || 'echo';
    
    // Check if operation exists
    if (!operations[operation]) {
      console.error(JSON.stringify({
        error: {
          message: `Unknown operation: ${operation}`,
          code: "UNKNOWN_OPERATION"
        }
      }));
      process.exit(1);
    }
    
    // Execute operation
    let result;
    switch (operation) {
      case 'echo':
        result = operations.echo(params.message || 'Hello from Enact Example Tool!');
        break;
      
      case 'countWords':
        result = operations.countWords(params.text || '');
        break;
      
      case 'generateReport':
        result = operations.generateReport(
          params.title || 'Untitled Report',
          params.content || 'No content provided.'
        );
        break;
    }
    
    // Output result as JSON
    console.log(JSON.stringify(result, null, 2));
    
  } catch (error) {
    console.error(JSON.stringify({
      error: {
        message: error.message,
        code: "EXECUTION_ERROR",
        details: error.stack
      }
    }));
    process.exit(1);
  }
}

// Run main function
main();
