import math

meal_cost = float(input().strip())
tip_percent = int(input().strip())
tax_percent = int(input().strip())

tip = meal_cost * tip_percent / 100
tax = meal_cost * tax_percent / 100
total_cost = meal_cost + tip + tax

print(int(round(total_cost)))
