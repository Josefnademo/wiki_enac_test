from wiki_test.foo import bar
import pytest
from your_module.foo import coffee_needed  # Replace 'your_module' with the actual module name

def test_coffee_needed():
    # Test case 1: Not enough sleep
    assert coffee_needed(1) == "No amount of coffee can save you now! 😴☕"

    # Test case 2: Need 3 cups of coffee
    assert coffee_needed(4) == "You need at least 3 cups of coffee to survive. ☕☕☕"

    # Test case 3: Just one cup needed
    assert coffee_needed(7) == "A cup of coffee should do the trick. ☕"

    # Test case 4: Enough sleep, no coffee needed
    assert coffee_needed(8) == "You've had enough sleep. No coffee needed! 😄"