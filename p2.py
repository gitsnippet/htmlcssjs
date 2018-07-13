import os,time
from multiprocessing import Process,Pool
 
def run_proc(name):
    print('child process %s (%s) running ...' %(name,os.getpid()))
    print('process will start'+name)
    time.sleep(5)
    print('end  '+name)
 
if __name__ == '__main__': 
    print('parent process %s.' %os.getppid())
    p= Pool(processes=5)
    p.join()
    print(p)
    for i in range(5):
        p = Process(target=run_proc,args=(str(i),))
        p.start()
    p.join()
    print("parent process end")