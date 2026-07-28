using System;

interface AdvancedArithmetic
{
    int divisorSum(int n);
}

class Calculator : AdvancedArithmetic
{
    public int divisorSum(int n)
    {
        int total = 0;

        for (int i = 1; i <= n; i++)
        {
            if (n % i == 0)
            {
                total += i;
            }
        }

        return total;
    }
}

class Solution
{
    static void Main(string[] args)
    {
        int n = int.Parse(Console.ReadLine());

        Calculator myCalculator = new Calculator();

        Console.WriteLine("I implemented: AdvancedArithmetic");
        Console.WriteLine(myCalculator.divisorSum(n));
    }
}