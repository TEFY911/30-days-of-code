using System;

class Solution
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine() ?? "0");
        string binary = Convert.ToString(n, 2);

        int count = 0;
        int maxCount = 0;

        foreach (char bit in binary)
        {
            if (bit == '1')
            {
                count++;
                maxCount = Math.Max(maxCount, count);
            }
            else
            {
                count = 0;
            }
        }

        Console.WriteLine(maxCount);
    }
}
