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

def formatear_moneda(valor):
    return f"{valor:.2f}"

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

        subtotal = cantidad * precio_unitario
        propina = subtotal * (tip_percent / 100)
        impuesto = subtotal * (tax_percent / 100)
        total_producto = subtotal + propina + impuesto

        productos.append({
            "nombre": nombre,
            "cantidad": cantidad,
            "precio_unitario": precio_unitario,
            "subtotal": subtotal,
            "propina": propina,
            "impuesto": impuesto,
            "total": total_producto
        })

        total_subtotal += subtotal
        total_propina += propina
        total_impuesto += impuesto
        total_general += total_producto

    print("\n" + "=" * 70)
    print(f"FACTURA #{factura} | CLIENTE: {cliente}")
    print("=" * 70)

    print(f"{'Producto':<20}{'Cant.':>8}{'P.Unit':>12}{'Subtotal':>12}{'Tip':>12}{'Impuesto':>12}{'Total':>12}")
    print("-" * 70)

    for p in productos:
        print(
            f"{p['nombre']:<20}"
            f"{p['cantidad']:>8}"
            f"{formatear_moneda(p['precio_unitario']):>12}"
            f"{formatear_moneda(p['subtotal']):>12}"
            f"{formatear_moneda(p['propina']):>12}"
            f"{formatear_moneda(p['impuesto']):>12}"
            f"{formatear_moneda(p['total']):>12}"
        )

    print("-" * 70)
    print(f"{'TOTAL SUBTOTAL':<44}{formatear_moneda(total_subtotal):>12}")
    print(f"{'TOTAL PROPINA':<44}{formatear_moneda(total_propina):>12}")
    print(f"{'TOTAL IMPUESTO':<44}{formatear_moneda(total_impuesto):>12}")
    print(f"{'TOTAL GENERAL':<44}{formatear_moneda(total_general):>12}")
    print("=" * 70)

    print("\nResumen final:")
    print(f"Cliente: {cliente}")
    print(f"Factura: {factura}")
    print(f"Productos procesados: {cantidad_productos}")
    print(f"Total a pagar: {formatear_moneda(total_general)}")

if __name__ == "__main__":
    main()