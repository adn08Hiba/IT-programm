user_input = input("user's word : ")

result = user_input[0] if user_input else ''
for char in user_input[1:]:
    if char != result[-1]:
        result += char

print(result)
