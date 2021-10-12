from os import listdir
from os.path import isfile, join
import urllib.request

onlyfiles = [f for f in listdir('.') if isfile(join('.', f))]

for i in onlyfiles:
    if i.endswith(".html"):
        with open(i, 'r') as file:
            lines = file.read().split("\n")
            for line in lines:
                if '<a' in line and 'id=' in line:
                    id = line.strip().replace('<a id="', '').replace('"></a>', '')
                    url = f"https://ik.imagekit.io/nightcafe/jobs/{id}/{id}.jpg?tr=w-1600,c-at_max"
                    print(url)
                    response = urllib.request.urlopen(url)
                    data = response.read()
                    file = open(f"img/{id}.jpg", 'wb')
                    file.write(bytearray(data))
                    file.close()
