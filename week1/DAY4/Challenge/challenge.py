import math

class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items = items if items is not None else []
        self.page_size = page_size
        self.current_idx = 0  
        self.total_pages = math.ceil(len(self.items) / self.page_size)

    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    def go_to_page(self, page_num):
        if 1 <= page_num <= self.total_pages:
            self.current_idx = page_num - 1  
        else:
            raise ValueError("Page number out of range")
        return self

    def first_page(self):
        self.current_idx = 0
        return self

    def last_page(self):
        self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    def __str__(self):
        visible = self.get_visible_items()
        return "\n".join(str(item) for item in visible)

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print("Page 1:", p.get_visible_items())
p.next_page()
print("Page 2:", p.get_visible_items())
p.last_page()
print("Dernière page:", p.get_visible_items())

try:
    p.go_to_page(5)
    print("Aller à la page 5:", p.get_visible_items())
except ValueError as e:
    print("Erreur:", e)

try:
    p.go_to_page(10)
except ValueError as e:
    print("Erreur:", e)

try:
    p.go_to_page(0)
except ValueError as e:
    print("Erreur:", e)
