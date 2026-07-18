class Person:
    def __init__(self, initialAge: int):
        if initialAge < 0:
            print("Age is not valid, setting age to 0.")
            self.age = 0
        else:
            self.age = initialAge

    def amIOld(self) -> None:
        if self.age < 13:
            print("You are young.")
        elif self.age < 18:
            print("You are a teenager.")
        else:
            print("You are old.")

    def yearPasses(self) -> None:
        self.age += 1


def main() -> None:
    t = int(input().strip())

    for _ in range(t):
        age = int(input().strip())
        person = Person(age)
        person.amIOld()
        for _ in range(3):
            person.yearPasses()
        person.amIOld()


if __name__ == "__main__":
    main()
