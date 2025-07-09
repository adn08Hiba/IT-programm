toppings = []

while True:
    topping = input("Enter a pizza topping (or 'quit' to finish): ")
    if topping.lower() == 'quit':
        break
    toppings.append(topping)
    print(f"Adding {topping} to your pizza.")

print("\nToppings on your pizza:")
for t in toppings:
    print(f"- {t}")

total_cost = 10 + 2.5 * len(toppings)
print(f"Total cost: ${total_cost:.2f}")
