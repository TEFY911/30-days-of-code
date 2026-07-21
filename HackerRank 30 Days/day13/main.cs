using System;

abstract class Book
{
    protected string title;
    protected string author;

    protected Book(string t, string a)
    {
        title = t;
        author = a;
    }

    public abstract void display();
}

class MyBook : Book
{
    private int price;

    public MyBook(string t, string a, int p) : base(t, a)
    {
        price = p;
    }

    public override void display()
    {
        Console.WriteLine("Title: " + title);
        Console.WriteLine("Author: " + author);
        Console.WriteLine("Price: " + price);
    }
}

class Solution
{
    static void Main()
    {
        string title = Console.ReadLine();
        string author = Console.ReadLine();
        int price = int.Parse(Console.ReadLine());

        Book newNovel = new MyBook(title, author, price);
        newNovel.display();
    }
}
