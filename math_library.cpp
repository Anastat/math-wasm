#include <emscripten.h>
extern "C" {
    EMSCRIPTEN_KEEPALIVE
    unsigned long long fibonacci(unsigned int n) {
        if (n <= 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
}
extern "C" {
    EMSCRIPTEN_KEEPALIVE
        unsigned long long factorial(unsigned int n) {
        if (n == 0 || n == 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
}

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    double approximatePi(int iterations) {
        double piApproximation = 0;
        for (int i = 0; i < iterations; i++) {
            piApproximation += 4.0 * (i % 2 == 0 ? 1 : -1) / (2 * i + 1);
        }
        return piApproximation;
    }
}
