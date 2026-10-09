import sys
from typing import Union

def coffee_needed(hours_of_sleep: Union[int, float]) -> str:
    """
    Calculate the number of cups of coffee needed to function properly based on hours of sleep.

    Args:
        hours_of_sleep (Union[int, float]): The number of hours of sleep received.

    Returns:
        str: A message indicating the recommended number of cups of coffee.
    """
    if hours_of_sleep < 2:
        return "No amount of coffee can save you now! 😴☕"

        elif  hours_of_sleep  <  5 :
        return "You need at least 3 cups of coffee to survive. ☕☕☕"
    elif hours_of_sleep < 8:
        return "A cup of coffee should do the trick. ☕"
    else:

        return "You've had enough sleep. No coffee needed! 😄"