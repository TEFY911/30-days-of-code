using System;

class Solution
{
    static void Main()
    {
        int[,] matrix = new int[6, 6];

        for (int i = 0; i < 6; i++)
        {
            string[] rowValues = (Console.ReadLine() ?? string.Empty).Split();
            for (int j = 0; j < 6; j++)
            {
                matrix[i, j] = int.Parse(rowValues[j]);
            }
        }

        int maxSum = int.MinValue;

        for (int row = 0; row < 4; row++)
        {
            for (int col = 0; col < 4; col++)
            {
                int hourglass =
                    matrix[row, col] + matrix[row, col + 1] + matrix[row, col + 2] +
                    matrix[row + 1, col + 1] +
                    matrix[row + 2, col] + matrix[row + 2, col + 1] + matrix[row + 2, col + 2];

                maxSum = Math.Max(maxSum, hourglass);
            }
        }

        Console.WriteLine(maxSum);
    }
}
