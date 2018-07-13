import multiprocessing
import os

def run_task(name):
    print("task %s (pid = %s) is running"  %(name,os.getpid()))
    while True:
        pass

if __name__ == "__main__":
    print("current process %s ." %os.getpid())
    pool = multiprocessing.Pool(processes = 2)
    for i in range(2):
        pool.apply_async(run_task,args=(i,))
    pool.close()
    pool.join()
