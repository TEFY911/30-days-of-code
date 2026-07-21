class Person:
    def __init__(self, firstName, lastName, idNumber):
        self.firstName = firstName
        self.lastName = lastName
        self.idNumber = idNumber


class Student(Person):
    def __init__(self, firstName, lastName, idNumber, scores):
        super().__init__(firstName, lastName, idNumber)
        self.scores = scores

    def calculate(self):
        average = sum(self.scores) / len(self.scores)
        if average >= 90:
            return 'O'
        if average >= 80:
            return 'E'
        if average >= 70:
            return 'A'
        if average >= 55:
            return 'P'
        return 'T'


def main():
    first_name = input().strip()
    last_name = input().strip()
    id_number = input().strip()
    scores = list(map(int, input().split()))

    student = Student(first_name, last_name, id_number, scores)
    print(f"{student.firstName} {student.lastName}")
    print(student.idNumber)
    print(student.calculate())


if __name__ == "__main__":
    main()
