class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Solution:
    def insert(self, head, data):
        p = Node(data)
        if head is None:
            head = p
        else:
            current = head
            while current.next is not None:
                current = current.next
            current.next = p
        return head

    def display(self, head):
        current = head
        while current is not None:
            print(current.data, end=' ')
            current = current.next


T = int(input())
head = None
mylist = Solution()

for _ in range(T):
    data = int(input())
    head = mylist.insert(head, data)

mylist.display(head)
