import urllib.parse
s="%E5%88%9B%E6%96%B0%E5%AD%A6%E7%AC%AC%E5%9B%9B%E7%AB%A0"
print(urllib.parse.unquote_to_bytes(s))
#urllib.parse.unquote_to_bytes(s).decode("utf-8")
