using System;
using System.Linq;

class Person
{
    protected string FirstName { get; }
    protected string LastName { get; }
    protected int IdNumber { get; }

    public Person(string firstName, string lastName, int idNumber)
    {
        FirstName = firstName;
        LastName = lastName;
        IdNumber = idNumber;
    }

    public void printPerson()
    {
        Console.WriteLine($"Name: {LastName}, {FirstName}");
        Console.WriteLine($"ID: {IdNumber}");
    }
}

class Student : Person
{
    private int[] Scores { get; }

    public Student(string firstName, string lastName, int idNumber, int[] scores)
        : base(firstName, lastName, idNumber)
    {
        Scores = scores;
    }

    public string calculate()
    {
        double average = Scores.Average();

        if (average >= 90) return "O";
        if (average >= 80) return "E";
        if (average >= 70) return "A";
        if (average >= 55) return "P";
        if (average >= 40) return "D";
        return "T";
    }
}

class Solution
{
    static void Main(string[] args)
    {
        string[] inputs = (Console.ReadLine() ?? string.Empty).Split(' ');
        string firstName = inputs[0];
        string lastName = inputs[1];
        int idNumber = int.Parse(inputs[2]);
        int scoreCount = int.Parse(Console.ReadLine() ?? "0");
        int[] scores = (Console.ReadLine() ?? string.Empty).Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();

        Student student = new Student(firstName, lastName, idNumber, scores);
        student.printPerson();
        Console.WriteLine($"Grade: {student.calculate()}");
    }
}
