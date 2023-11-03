# math-library
compile c++ code to WASM modules using "emcc -O3 -s WASM=1 -s MODULARIZE=1 --no-entry -o output.wasm math_library.cpp"
Then these modules can be used inside the math-library-WASM.js and run by "node math-library-WASM.js"
