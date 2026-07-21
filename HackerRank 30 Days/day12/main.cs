using System;

class Person
{
    protected string firstName;
    protected string lastName;
    protected int idNumber;

    public Person(string firstName, string lastName, int idNumber)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
    }
}

class Student : Person
{
    private int[] scores;

    public Student(string firstName, string lastName, int idNumber, int[] scores)
        : base(firstName, lastName, idNumber)
    {
        this.scores = scores;
    }

    public char Calculate()
    {
        double average = scores.Average();
        if (average >= 90) return 'O';
        if (average >= 80) return 'E';
        if (average >= 70) return 'A';
        if (average >= 55) return 'P';
        return 'T';
    }

    public void PrintInfo()
    {
        Console.WriteLine(firstName + " " + lastName);
        Console.WriteLine(idNumber);
        Console.WriteLine(Calculate());
    }
}

class Solution
{
    static void Main()
    {
        string firstName = Console.ReadLine() ?? string.Empty;
        string lastName = Console.ReadLine() ?? string.Empty;
        int idNumber = int.Parse(Console.ReadLine() ?? "0");
        int[] scores = Array.ConvertAll((Console.ReadLine() ?? string.Empty).Split(), int.Parse);

        Student student = new(firstName, lastName, idNumber, scores);
        student.PrintInfo();
    }
}
