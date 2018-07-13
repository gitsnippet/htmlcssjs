import time
from multiprocessing import Process


def deal_task():
    time.sleep(300)
    print('coping with the task')


def cope_task():
    time.sleep(5)
    print('task is done')


if __name__ == '__main__':
    p1 = Process(target=deal_task, )
    p2 = Process(target=cope_task, )
    p1.daemon = True
    p1.start()
    p2.start()
    print('over')
