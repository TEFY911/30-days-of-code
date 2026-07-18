using System;

public class Solution
{
    public static void Main(string[] args)
    {
        int t = int.Parse(Console.ReadLine() ?? "0");

        for (int i = 0; i < t; i++)
        {
            string s = Console.ReadLine() ?? string.Empty;
            string pares = "";
            string impares = "";

            for (int j = 0; j < s.Length; j++)
            {
                if (j % 2 == 0)
                {
                    pares += s[j];
                }
                else
                {
                    impares += s[j];
                }
            }

            Console.WriteLine($"{pares} {impares}");
        }
    }
}
