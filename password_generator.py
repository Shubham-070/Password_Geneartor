import secrets
import string


def generate_password(length=12):
    """
    Generate a secure random password.
    """

    characters = (
        string.ascii_letters
        + string.digits
        + string.punctuation
    )

    password = ""

    for _ in range(length):
        password += secrets.choice(characters)

    return password


def check_strength(password):
    """
    Check the strength of a password.
    """

    score = 0

    if len(password) >= 8:
        score += 1

    if len(password) >= 12:
        score += 1

    if any(char.isupper() for char in password):
        score += 1

    if any(char.islower() for char in password):
        score += 1

    if any(char.isdigit() for char in password):
        score += 1

    if any(char in string.punctuation for char in password):
        score += 1


    if score <= 2:
        return "Weak"

    elif score <= 4:
        return "Medium"

    else:
        return "Strong"


# Main program

print("================================")
print("     PASSWORD GENERATOR")
print("================================")


try:

    length = int(
        input("Enter password length: ")
    )

    if length < 6:

        print("Password length should be at least 6.")

    else:

        password = generate_password(length)

        strength = check_strength(password)

        print("\nGenerated Password:")
        print(password)

        print("\nPassword Strength:")
        print(strength)


except ValueError:

    print("Please enter a valid number.")
