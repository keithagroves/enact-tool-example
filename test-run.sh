#!/bin/bash
# Test script to verify the tool works

# Execute the tool locally
echo "Testing local execution..."
node index.js --operation echo --message "Testing local execution"
echo ""

# Test word counting
echo "Testing word count operation..."
node index.js --operation countWords --text "This is a test of the word counting functionality"
echo ""

# Test report generation
echo "Testing report generation..."
node index.js --operation generateReport --title "Test Report" --content "This is a test report content."
echo ""

# Instructions for NPX testing
echo "=================================================="
echo "To test with NPX, first link the package locally:"
echo "npm link"
echo ""
echo "Then run one of these commands:"
echo "npx enact-example-tool --operation echo --message \"Hello from NPX!\""
echo "npx enact-example-tool --operation countWords --text \"Count these words via NPX\""
echo "npx enact-example-tool --operation generateReport --title \"NPX Report\" --content \"Report via NPX\""
echo ""
echo "To publish to npm (if desired):"
echo "npm login"
echo "npm publish"
echo "=================================================="
