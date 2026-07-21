using System;
using System.Collections.Generic;

class Solution
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine() ?? "0");
        Dictionary<string, string> phoneBook = new();

        for (int i = 0; i < n; i++)
        {
            string[] parts = (Console.ReadLine() ?? string.Empty).Split();
            phoneBook[parts[0]] = parts[1];
        }

        string? query;
        while ((query = Console.ReadLine()) != null)
        {
            if (query.Length == 0)
            {
                continue;
            }

            if (phoneBook.TryGetValue(query, out string? value))
            {
                Console.WriteLine($"{query}={value}");
            }
            else
            {
                Console.WriteLine("Not found");
            }
        }
    }
}
