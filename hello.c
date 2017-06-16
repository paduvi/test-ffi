#include <stdint.h>
#include <stdio.h>

#if defined(WIN32) || defined(_WIN32)
#define EXPORT __declspec(dllexport)
#else
#define EXPORT
#endif

EXPORT void hello() {
  printf("Hello World\n");
}