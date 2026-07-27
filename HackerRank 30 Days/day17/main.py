import sys


class Calculator:
    def power(self, n, p):
        if n < 0 or p < 0:
            raise ValueError("n and p should be non-negative")
        return n ** p


if __name__ == "__main__":
    data = sys.stdin.read().strip().split()
    if not data:
        sys.exit()

    t = int(data[0])
    calculator = Calculator()
    output = []

    index = 1
    for _ in range(t):
        n = int(data[index])
        p = int(data[index + 1])
        index += 2

        try:
            output.append(str(calculator.power(n, p)))
        except ValueError as error:
            output.append(str(error))

    sys.stdout.write("\n".join(output))
