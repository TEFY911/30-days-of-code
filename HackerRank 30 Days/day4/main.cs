using System;

class Person
{
    public int Age { get; private set; }

    public Person(int initialAge)
    {
        if (initialAge < 0)
        {
            Console.WriteLine("Age is not valid, setting age to 0.");
            Age = 0;
        }
        else
        {
            Age = initialAge;
        }
    }

    public void amIOld()
    {
        if (Age < 13)
        {
            Console.WriteLine("You are young.");
        }
        else if (Age < 18)
        {
            Console.WriteLine("You are a teenager.");
        }
        else
        {
            Console.WriteLine("You are old.");
        }
    }

    public void yearPasses()
    {
        Age += 1;
    }
}

class Solution
{
    static void Main(string[] args)
    {
        int t = int.Parse(Console.ReadLine() ?? "0");

        for (int i = 0; i < t; i++)
        {
            int age = int.Parse(Console.ReadLine() ?? "0");
            Person person = new Person(age);
            person.amIOld();
            for (int j = 0; j < 3; j++)
            {
                person.yearPasses();
            }
            person.amIOld();
        }
    }
}
