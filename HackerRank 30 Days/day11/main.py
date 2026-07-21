import sys


def main():
    data = list(map(int, sys.stdin.read().split()))
    if not data:
        return

    matrix = [data[i:i + 6] for i in range(0, 36, 6)]
    max_sum = -63

    for row in range(4):
        for col in range(4):
            hourglass = (
                matrix[row][col] + matrix[row][col + 1] + matrix[row][col + 2] +
                matrix[row + 1][col + 1] +
                matrix[row + 2][col] + matrix[row + 2][col + 1] + matrix[row + 2][col + 2]
            )
            max_sum = max(max_sum, hourglass)

    print(max_sum)


if __name__ == "__main__":
    main()
