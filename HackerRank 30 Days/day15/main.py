class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Solution:
    def display(self, head):
        current = head

        while current:
            print(current.data, end=' ')
            current = current.next

    def insert(self, head, data):
        new_node = Node(data)

        # Si la lista está vacía
        if head is None:
            return new_node

        # Recorrer hasta el último nodo
        current = head

        while current.next is not None:
            current = current.next

        # Insertar el nuevo nodo al final
        current.next = new_node

        # Retornar el primer nodo
        return head


# Crear el objeto Solution
mylist = Solution()

# Leer cantidad de elementos
T = int(input())

# La lista comienza vacía
head = None

# Insertar cada elemento
for i in range(T):
    data = int(input())
    head = mylist.insert(head, data)

# Mostrar la lista
mylist.display(head)