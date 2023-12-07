#include <emscripten.h>
#include <cmath>

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    unsigned long long int fibonacci(int n) {
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

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    bool isPrime(unsigned long int num) {
        if (num < 2) {
            return false;
        }
        for (int i = 2; i <= sqrt(num); ++i) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    unsigned long long ackermann(int m, int n) {
        if (m == 0) {
            return n + 1;
        } else if (m > 0 && n == 0) {
            return ackermann(m - 1, 1);
        } else {
            return ackermann(m - 1, ackermann(m, n - 1));
        }
    }
}

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    double zetaFunction(double s, int terms) {
        double result = 0.0;
        for (int n = 1; n <= terms; ++n) {
            result += 1.0 / pow(n, s);
        }
        return result;
    }
}
