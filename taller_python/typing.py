
# valid types

# In order to be able to use None we have to use
# Optional like this:
from typing import Optional

def main() -> None:
    sample: Optional[int] = None;
    print(sample)

if __name__ == "__main__":
    main()


