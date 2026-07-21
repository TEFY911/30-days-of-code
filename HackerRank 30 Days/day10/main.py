n = int(input())

binary = bin(n)[2:]

max_ones = 0
current_ones = 0

for digit in binary:
    if digit == '1':
        current_ones += 1
        max_ones = max(max_ones, current_ones)
    else:
        current_ones = 0

print(max_ones)