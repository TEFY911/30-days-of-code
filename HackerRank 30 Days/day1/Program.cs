using System;

class Solution
{
    static void Main(string[] args)
    {
        int i = 4;
        double d = 4.0;
        string s = "HackerRank ";

        int inputInt = int.Parse(Console.ReadLine() ?? "0");
        double inputDouble = double.Parse(Console.ReadLine() ?? "0");
        string inputString = Console.ReadLine() ?? string.Empty;

        Console.WriteLine(i + inputInt);
        Console.WriteLine((d + inputDouble).ToString("F1"));
        Console.WriteLine(s + inputString);
    }
}
