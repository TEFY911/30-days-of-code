using System;
using System.Linq;

class Difference
{
    private int[] elements;
    public int maximumDifference;

    public Difference(int[] a)
    {
        elements = a;
    }

    public void computeDifference()
    {
        int max = 0;
        for (int i = 0; i < elements.Length; i++)
        {
            for (int j = i + 1; j < elements.Length; j++)
            {
                int diff = Math.Abs(elements[i] - elements[j]);
                if (diff > max)
                {
                    max = diff;
                }
            }
        }
        maximumDifference = max;
    }
}

class Solution
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        int[] a = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

        Difference d = new Difference(a);
        d.computeDifference();
        Console.WriteLine(d.maximumDifference);
    }
}
