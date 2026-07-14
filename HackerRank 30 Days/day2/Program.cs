using System;

class Solution
{
    static void Main(string[] args)
    {
        double mealCost = double.Parse(Console.ReadLine() ?? "0");
        int tipPercent = int.Parse(Console.ReadLine() ?? "0");
        int taxPercent = int.Parse(Console.ReadLine() ?? "0");

        double tip = mealCost * tipPercent / 100.0;
        double tax = mealCost * taxPercent / 100.0;
        int totalCost = (int)Math.Round(mealCost + tip + tax);

        Console.WriteLine(totalCost);
    }
}
