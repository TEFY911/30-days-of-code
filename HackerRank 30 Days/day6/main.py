import sys


def main() -> None:
    data = sys.stdin.read().splitlines()
    if not data:
        return

    t = int(data[0].strip())
    output = []

    for i in range(1, t + 1):
        s = data[i].strip()
        pares = []
        impares = []

        for idx, ch in enumerate(s):
            if idx % 2 == 0:
                pares.append(ch)
            else:
                impares.append(ch)

        output.append("".join(pares) + " " + "".join(impares))

    sys.stdout.write("\n".join(output))


if __name__ == "__main__":
    main()
