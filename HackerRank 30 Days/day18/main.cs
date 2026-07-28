using System;
using System.Collections.Generic;

class Solution
{
    Stack<char> stack = new Stack<char>();
    Queue<char> queue = new Queue<char>();

    public void pushCharacter(char ch)
    {
        stack.Push(ch);
    }

    public void enqueueCharacter(char ch)
    {
        queue.Enqueue(ch);
    }

    public char popCharacter()
    {
        return stack.Pop();
    }

    public char dequeueCharacter()
    {
        return queue.Dequeue();
    }

    static void Main(String[] args)
    {
        string s = Console.ReadLine();

        Solution obj = new Solution();

        foreach (char c in s)
        {
            obj.pushCharacter(c);
            obj.enqueueCharacter(c);
        }

        bool isPalindrome = true;

        for (int i = 0; i < s.Length / 2; i++)
        {
            if (obj.popCharacter() != obj.dequeueCharacter())
            {
                isPalindrome = false;
                break;
            }
        }

        Console.WriteLine(
            isPalindrome
                ? $"The word, {s}, is a palindrome."
                : $"The word, {s}, is not a palindrome."
        );
    }
}