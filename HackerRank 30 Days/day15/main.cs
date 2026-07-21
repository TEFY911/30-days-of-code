using System;

class Node
{
    public int data;
    public Node next;

    public Node(int d)
    {
        data = d;
        next = null;
    }
}

class Solution
{
    public Node insert(Node head, int data)
    {
        Node p = new Node(data);
        if (head == null)
        {
            head = p;
        }
        else
        {
            Node current = head;
            while (current.next != null)
            {
                current = current.next;
            }
            current.next = p;
        }
        return head;
    }

    public void display(Node head)
    {
        Node current = head;
        while (current != null)
        {
            Console.Write(current.data + " ");
            current = current.next;
        }
    }

    static void Main(String[] args)
    {
        Solution mylist = new Solution();
        int T = int.Parse(Console.ReadLine());
        Node head = null;

        for (int i = 0; i < T; i++)
        {
            int data = int.Parse(Console.ReadLine());
            head = mylist.insert(head, data);
        }

        mylist.display(head);
    }
}
