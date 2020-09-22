# -*- coding: utf-8 -*-
"""
Created on Sun Nov  3 18:29:34 2019

@author: FREEMAN
"""

import json

import io

file_name="噪咖EBCbuzz"###########################################



with io.open(file_name+'_new.json', 'r', encoding='utf-8-sig') as json_file:  
    data = json.load(json_file)
    array2019=[]
    array2018=[]
    array2017=[]
    array2016=[]
    array2015=[]
    array2014=[]
    array2013=[]
    array2012=[]
    array2011=[]
    array2010=[]
    array2009=[]
    dic2019={}
    dic2018={}
    dic2017={}
    dic2016={}
    dic2015={}
    dic2014={}
    dic2013={}
    dic2012={}
    dic2011={}
    dic2010={}
    dic2009={}
    jdata2019=""
    jdata2018=""
    jdata2017=""
    jdata2016=""
    jdata2015=""
    jdata2014=""
    jdata2013=""
    jdata2012=""
    jdata2011=""
    jdata2010=""
    jdata2009=""
    
    for i in range(len(data[file_name])):
        
        date=str(data[file_name][i]["日期"])
        viewer=data[file_name][i]["觀看人數"].replace("次","").replace(",","")
        
        if('2019-10-01'>date>='2019-01-01'): #2019
            dic2019={
                    "category":date,
                    "column-1":viewer
                }
            array2019.append(dic2019)
            jdata2019=json.dumps(array2019, ensure_ascii=False)
            
        elif('2019-01-01'>date>='2018-01-01'): #2018 
            dic2018={
                    "category":date,
                    "column-1":viewer
                }
            array2018.append(dic2018)
            jdata2018=json.dumps(array2018, ensure_ascii=False)
            
        elif('2018-01-01'>date>='2017-01-01'): #2017 
            dic2017={
                    "category":date,
                    "column-1":viewer
                }
            array2017.append(dic2017)
            jdata2017=json.dumps(array2017, ensure_ascii=False)
        
        elif('2017-01-01'>date>='2016-01-01'): #2016
            dic2016={
                    "category":date,
                    "column-1":viewer
                }
            array2016.append(dic2016)
            jdata2016=json.dumps(array2016, ensure_ascii=False)
        
        elif('2016-01-01'>date>='2015-01-01'):  #2015 
            dic2015={
                    "category":date,
                    "column-1":viewer
                }
            array2015.append(dic2015)
            jdata2015=json.dumps(array2015, ensure_ascii=False)
            
        elif('2015-01-01'>date>='2014-01-01'):  #2014 
            dic2014={
                    "category":date,
                    "column-1":viewer
                }
            array2014.append(dic2014)
            jdata2014=json.dumps(array2014, ensure_ascii=False)
        elif('2014-01-01'>date>='2013-01-01'):  #2013 
            dic2013={
                    "category":date,
                    "column-1":viewer
                }
            array2013.append(dic2013)
            jdata2013=json.dumps(array2013, ensure_ascii=False)
        elif('2013-01-01'>date>='2012-01-01'):  #2012 
            dic2012={
                    "category":date,
                    "column-1":viewer
                }
            array2012.append(dic2012)
            jdata2012=json.dumps(array2012, ensure_ascii=False)
        elif('2012-01-01'>date>='2011-01-01'):  #2011
            dic2011={
                    "category":date,
                    "column-1":viewer
                }
            array2011.append(dic2011)
            jdata2011=json.dumps(array2011, ensure_ascii=False)
        elif('2011-01-01'>date>='2010-01-01'):  #2010 
            dic2010={
                    "category":date,
                    "column-1":viewer
                }
            array2010.append(dic2010)
            jdata2010=json.dumps(array2010, ensure_ascii=False)
        elif('2010-01-01'>date>='2009-01-01'):  #2009
            dic2009={
                    "category":date,
                    "column-1":viewer
                }
            array2009.append(dic2009)
            jdata2009=json.dumps(array2009, ensure_ascii=False)
            
    if(len(jdata2019)>0):
        fp = open(file_name+"2019.json", "w")
        fp.write(jdata2019)
        fp.close()
    if(len(jdata2018)>0):
        fp = open(file_name+"2018.json", "w")
        fp.write(jdata2018)
        fp.close()
    if(len(jdata2017)>0):  
        fp = open(file_name+"2017.json", "w")
        fp.write(jdata2017)
        fp.close()
    if(len(jdata2016)>0):   
        fp = open(file_name+"2016.json", "w")
        fp.write(jdata2016)
        fp.close()
    if(len(jdata2015)>0):   
        fp = open(file_name+"2015.json", "w")
        fp.write(jdata2015)
        fp.close()
    if(len(jdata2014)>0):  
        fp = open(file_name+"2014.json", "w")
        fp.write(jdata2014)
        fp.close()
    if(len(jdata2013)>0):  
        fp = open(file_name+"2013.json", "w")
        fp.write(jdata2013)
        fp.close()
    if(len(jdata2012)>0): 
        fp = open(file_name+"2012.json", "w")
        fp.write(jdata2012)
        fp.close()
    if(len(jdata2011)>0):
        fp = open(file_name+"2011.json", "w")
        fp.write(jdata2011)
        fp.close()
    if(len(jdata2010)>0): 
        fp = open(file_name+"2010.json", "w")
        fp.write(jdata2010)
        fp.close()
    if(len(jdata2009)>0):
        fp = open(file_name+"2009.json", "w")
        fp.write(jdata2009)
        fp.close()
    #print(len(data[file_name]))
    #print(jdata)
    
    