class Person:
    def __init__(self, first_name: str, last_name: str, id_number: int):
        self.first_name = first_name
        self.last_name = last_name
        self.id_number = id_number

    def printPerson(self) -> None:
        print(f"Name: {self.last_name}, {self.first_name}")
        print(f"ID: {self.id_number}")


class Student(Person):
    def __init__(self, first_name: str, last_name: str, id_number: int, scores: list[int]):
        super().__init__(first_name, last_name, id_number)
        self.scores = scores

    def calculate(self) -> str:
        average = sum(self.scores) / len(self.scores)
        if average >= 90:
            return "O"
        if average >= 80:
            return "E"
        if average >= 70:
            return "A"
        if average >= 55:
            return "P"
        if average >= 40:
            return "D"
        return "T"


def main() -> None:
    first_name, last_name, id_number = input().split()
    _ = int(input().strip())
    scores = list(map(int, input().split()))

    student = Student(first_name, last_name, int(id_number), scores)
    student.printPerson()
    print(f"Grade: {student.calculate()}")


if __name__ == "__main__":
    main()
