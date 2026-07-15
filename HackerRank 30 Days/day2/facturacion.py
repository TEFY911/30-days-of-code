# Mini sistema de facturación + lógica tipo Day 2 de HackerRank
# Python 3

def pedir_entero(mensaje, minimo=None):
    while True:
        try:
            valor = int(input(mensaje))
            if minimo is not None and valor < minimo:
                print(f"Debe ser un número entero mayor o igual a {minimo}.")
                continue
            return valor
        except ValueError:
            print("Entrada inválida. Digita un número entero.")

def pedir_decimal(mensaje, minimo=0):
    while True:
        try:
            valor = float(input(mensaje))
            if valor < minimo:
                print(f"Debe ser un número mayor o igual a {minimo}.")
                continue
            return valor
        except ValueError:
            print("Entrada inválida. Digita un número válido.")

def main():
    print("=" * 50)
    print("        MINI SISTEMA DE FACTURACIÓN")
    print("=" * 50)

    cliente = input("Nombre del cliente: ").strip()
    factura = input("Número de factura: ").strip()

    # Cantidad mínima de productos
    cantidad_productos = pedir_entero("Cantidad de productos (mínimo 5): ", minimo=5)

    # Porcentajes generales
    tip_percent = pedir_decimal("Propina (%) a aplicar sobre cada producto: ", minimo=0)
    tax_percent = pedir_decimal("Impuesto de ley (%) a aplicar sobre cada producto: ", minimo=0)

    productos = []
    total_subtotal = 0.0
    total_propina = 0.0
    total_impuesto = 0.0
    total_general = 0.0

    print("\n--- Digita los productos ---")

    for i in range(1, cantidad_productos + 1):
        print(f"\nProducto #{i}")

        nombre = input("Nombre del producto: ").strip()
        cantidad = pedir_entero("Cantidad: ", minimo=1)
        precio_unitario = pedir_decimal("Precio unitario: ", minimo=0)

        subtotal = round(cantidad * precio_unitario, 2)
        propina = round(subtotal * (tip_percent / 100), 2)
        impuesto = round(subtotal * (tax_percent / 100), 2)
        total_producto = round(subtotal + propina + impuesto, 2)

        productos.append({
            "nombre": nombre,
            "cantidad": cantidad,
            "precio_unitario": precio_unitario,
            "subtotal": subtotal,
            "propina": propina,
            "impuesto": impuesto,
            "total": total_producto
        })

        total_subtotal = round(total_subtotal + subtotal, 2)
        total_propina = round(total_propina + propina, 2)
        total_impuesto = round(total_impuesto + impuesto, 2)
        total_general = round(total_general + total_producto, 2)

    print("\n" + "=" * 70)
    print(f"FACTURA #{factura} | CLIENTE: {cliente}")
    print("=" * 70)

    print(f"{'Producto':<20}{'Cant.':>8}{'P.Unit':>12}{'Subtotal':>12}{'Tip':>12}{'Impuesto':>12}{'Total':>12}")
    print("-" * 70)

    for p in productos:
        print(
            f"{p['nombre']:<20}"
            f"{p['cantidad']:>8}"
            f"{p['precio_unitario']:>12.2f}"
            f"{p['subtotal']:>12.2f}"
            f"{p['propina']:>12.2f}"
            f"{p['impuesto']:>12.2f}"
            f"{p['total']:>12.2f}"
        )

    print("-" * 70)
    print(f"{'TOTAL SUBTOTAL':<44}{total_subtotal:>12.2f}")
    print(f"{'TOTAL PROPINA':<44}{total_propina:>12.2f}")
    print(f"{'TOTAL IMPUESTO':<44}{total_impuesto:>12.2f}")
    print(f"{'TOTAL GENERAL':<44}{total_general:>12.2f}")
    print("=" * 70)

    print("\nResumen final:")
    print(f"Cliente: {cliente}")
    print(f"Factura: {factura}")
    print(f"Productos procesados: {cantidad_productos}")
    print(f"Total a pagar: {total_general:.2f}")

if __name__ == "__main__":
    main()