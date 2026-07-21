using System;

class Solution
{
    static int Factorial(int n)
    {
        if (n <= 1)
        {
            return 1;
        }

        return n * Factorial(n - 1);
    }

    static void Main()
    {
        int n = int.Parse(Console.ReadLine() ?? "0");
        Console.WriteLine(Factorial(n));
    }
}
