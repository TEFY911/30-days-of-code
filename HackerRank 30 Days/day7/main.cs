using System;
using System.Linq;

class Solution
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine() ?? "0");
        int[] arr = (Console.ReadLine() ?? string.Empty)
            .Split()
            .Take(n)
            .Select(int.Parse)
            .ToArray();

        Array.Reverse(arr);
        Console.WriteLine(string.Join(" ", arr));
    }
}
