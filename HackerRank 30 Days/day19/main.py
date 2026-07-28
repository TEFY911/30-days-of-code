class AdvancedArithmetic:
    def divisorSum(self, n):
        pass


class Calculator(AdvancedArithmetic):
    def divisorSum(self, n):
        total = 0

        for i in range(1, n + 1):
            if n % i == 0:
                total += i

        return total


n = int(input())

myCalculator = Calculator()

print("I implemented: AdvancedArithmetic")
print(myCalculator.divisorSum(n))