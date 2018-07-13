import os,sys,time
print(os.getpid())
pid = os.fork()
getpid = os.getpid()
getppid = os.getppid()
if pid == 0:
    time.sleep(50)
    print("this is child pid=%d,getpid=%d,getppid=%d" %(pid,getpid,getppid))
    sys.exit()
else:
    print("This is parent pid=%d,getpid=%d,getppid=%d"%(pid,getpid,getppid))
    #os.wait()
    

 