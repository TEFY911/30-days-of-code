import sys


def main():
    n = int(sys.stdin.readline().strip())
    binary = format(n, 'b')
    count = 0
    max_count = 0

    for bit in binary:
        if bit == '1':
            count += 1
            max_count = max(max_count, count)
        else:
            count = 0

    print(max_count)


if __name__ == "__main__":
    main()
