family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0

print("Ticket prices:")
for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    print(f"{name.title()}: ${price}")
    total_cost += price

print(f"Total cost: ${total_cost}")

def get_family_from_user():
    family = {}
    print("\nEnter family members (type 'done' to finish):")
    while True:
        name = input("Enter name: ").strip()
        if name.lower() == 'done':
            break
        age_input = input(f"Enter age for {name}: ").strip()
        if not age_input.isdigit():
            print("Please enter a valid age.")
            continue
        age = int(age_input)
        family[name] = age
    return family

user_family = get_family_from_user()
if user_family:
    total_cost = 0
    print("\nTicket prices:")
    for name, age in user_family.items():
        if age < 3:
            price = 0
        elif 3 <= age <= 12:
            price = 10
        else:
            price = 15
        print(f"{name.title()}: ${price}")
        total_cost += price
    print(f"Total cost: ${total_cost}")
