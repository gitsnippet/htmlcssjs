import os
import threading
print(os.getpid())
def dead_loop():
    while True:
        pass

t = threading.Thread(target=dead_loop)
t.start()


dead_loop()

t.join()


 
