using System;

class Calculator
{
    public int power(int n, int p)
    {
        if (n < 0 || p < 0)
        {
            throw new ArgumentException("n and p should be non-negative");
        }

        return (int)Math.Pow(n, p);
    }
}

class Solution
{
    static void Main(string[] args)
    {
        int t = int.Parse(Console.ReadLine() ?? "0");
        Calculator calculator = new Calculator();

        for (int i = 0; i < t; i++)
        {
            string[] values = (Console.ReadLine() ?? "").Split(' ');
            int n = int.Parse(values[0]);
            int p = int.Parse(values[1]);

            try
            {
                Console.WriteLine(calculator.power(n, p));
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
