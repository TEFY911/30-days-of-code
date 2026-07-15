using System;

class Solution
{
    static void Main(string[] args)
    {
        int n = int.Parse(Console.ReadLine() ?? "0");

        if (n % 2 == 1)
        {
            Console.WriteLine("Weird");
        }
        else if (n >= 2 && n <= 5)
        {
            Console.WriteLine("Not Weird");
        }
        else if (n >= 6 && n <= 20)
        {
            Console.WriteLine("Weird");
        }
        else
        {
            Console.WriteLine("Not Weird");
        }
    }
}
