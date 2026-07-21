#!/bin/python3

import math
import os
import random
import re
import sys

def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

if __name__ == '__main__':
    n = int(input().strip())

    print(factorial(n))