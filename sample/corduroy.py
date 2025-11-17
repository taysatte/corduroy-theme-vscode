import os

"""A String"""

# A comment


class Foo(object):
    def __init__(self, num=0):
        self.num = num
        print(num)

    @property
    def foo(self):
        return "bar"
