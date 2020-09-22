# -*- coding: utf-8 -*-
"""
Created on Sun Nov  3 18:29:34 2019

@author: FREEMAN
"""

import json
import xlwings as xw
import io

file_name="這群人TGOP"
workbook=xw.Book()
sheet = workbook.sheets['工作表1']


with io.open(file_name+'.json', 'r', encoding='utf-8-sig') as json_file:  
    data = json.load(json_file)
    sheet.cells(1, "A").value="影片標題"
    sheet.cells(1, "B").value="觀看人數"
    sheet.cells(1, "C").value="日期"
    for i in range(len(data[file_name])):
        sheet.cells((i+2), "A").value = data[file_name][i]["影片標題"]
        print(data[file_name][i]["影片標題"])
        sheet.cells((i+2), "B").value = data[file_name][i]["觀看人數"].replace("次","").replace(",","")
        print(data[file_name][i]["觀看人數"].replace("次","").replace(",",""))
        sheet.cells((i+2), "C").value = data[file_name][i]["日期"].replace("年","-").replace("月","-").replace("日","").replace("首播期：","")
        print(data[file_name][i]["日期"].replace("年","-").replace("月","-").replace("日","").replace("首播期：",""))
    print(len(data[file_name]))
    

    workbook.save(r'這群人TGOP')
    workbook.close()
    
