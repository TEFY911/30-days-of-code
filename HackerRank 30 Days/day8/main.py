n = int(input())

phone_book = {}

# Guardar los nombres y números
for _ in range(n):
    name, phone = input().split()
    phone_book[name] = phone

# Procesar las consultas hasta que no haya más entradas
while True:
    try:
        name = input()
        if name in phone_book:
            print(f"{name}={phone_book[name]}")
        else:
            print("Not found")
    except EOFError:
        break