# -*- coding: utf-8 -*-
"""
Created on Mon Nov 11 13:55:18 2019

@author: FREEMAN
"""

import json
import xlwings as xw
import io

array=[]
dic={}
dic2={}
file_name='噪咖EBCbuzz'###########################################
book = xw.Book('噪咖EBCbuzz.xlsx')###########################################
sheet = book.sheets['工作表1']
for i in range(2,1566):###########################################
    viewer=str(sheet.cells(i,"B").value).replace(".0","")
    date=str(sheet.cells(i,"C").value).replace(" 00:00:00","")
    dic={
            "日期":date,
            "觀看人數":viewer
             }
    array.append(dic)
    dic2={
            file_name:array
            }
    jdata=json.dumps(dic2, ensure_ascii=False)
print(jdata)
fp = open(file_name+"_new.json", "w",encoding='utf-8')
fp.write(jdata)
fp.close()
