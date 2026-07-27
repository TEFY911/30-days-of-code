using System;

class Solution
{
    static void Main(string[] args)
    {
        string s = Console.ReadLine() ?? string.Empty;

        try
        {
            Console.WriteLine(int.Parse(s));
        }
        catch (FormatException)
        {
            Console.WriteLine("Bad String");
        }
    }
}
