import random

def get_random_temp(season=None):
    """
    Returns a random temperature in Celsius.
    If season is provided, returns a temperature in a range typical for that season.
    """
    if season == 'winter':
        return round(random.uniform(-10, 16), 1)
    elif season == 'spring':
        return round(random.uniform(5, 23), 1)
    elif season == 'summer':
        return round(random.uniform(16, 40), 1)
    elif season == 'autumn':
        return round(random.uniform(0, 23), 1)
    else:
        return round(random.uniform(-10, 40), 1)

def get_season_from_month(month):
    """
    Returns the season name based on the month number (1-12).
    """
    if month in [12, 1, 2]:
        return 'winter'
    elif month in [3, 4, 5]:
        return 'spring'
    elif month in [6, 7, 8]:
        return 'summer'
    elif month in [9, 10, 11]:
        return 'autumn'
    else:
        return None

def main():
    try:
        month = int(input("Enter the month as a number (1-12): "))
        season = get_season_from_month(month)
        if season is None:
            print("Invalid month. Using random temperature range.")
    except ValueError:
        print("Invalid input. Using random temperature range.")
        season = None
    temp = get_random_temp(season)
    print(f"The temperature right now is {temp} degrees Celsius.")
    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif 0 <= temp < 16:
        print("Quite chilly! Don't forget your coat.")
    elif 16 <= temp < 24:
        print("Nice weather.")
    elif 24 <= temp < 32:
        print("A bit warm, stay hydrated.")
    elif 32 <= temp <= 40:
        print("It's really hot! Stay cool.")
    else:
        print("Unusual temperature!")

if __name__ == "__main__":
    main()
