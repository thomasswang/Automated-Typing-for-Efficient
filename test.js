#!/bin/bash

yesterday=`date +%Y-%m-%d -d -1day`
#yesterday=`date +%Y-%m-%d`
maxalarmperday=50000    #max limit alarm per day/cron cycle
startIndex=0            #start record collection
maxCount=1000           #max record per page/request
recordCount=$maxCount

#dirpath="/home/DATA/TBG_FTTH

#debug
#maxalarmperday=8000
#startIndex=5000
#maxCount=1000
#recordCount=$maxCount

######################################################################################################################################
# Phase 1: Collect & formatting csv from TBG_FTTH
######################################################################################################################################

#set header file
echo "Hello, World!"



===========================================================


#!/bin/bash

# Endpoint Token URL
url="https://apigw.tower-bersama.com/ftth/alarmsync/oauth2/token"

# Client credentials
client_id="i0uwdcaD7GHsKvE7z2AnDZavlsZH5MFb"
client_secret="BIJ3JV0A4bCAbJ0yZ2Y0FsxJsO97lGJ2"
grant_type="client_credentials"

# Melakukan POST request
response=$(curl -s -X POST "$url" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "client_id=$client_id&client_secret=$client_secret&grant_type=$grant_type")

# Menampilkan respons
echo "Response:"
echo "$response"



============================================================


# Endpoint Alarm URL
url="https://apigw.tower-bersama.com/ftth/alarmsync"

# Bearer Token
token="MGHRWFGqH1iPnJoHGfw0O6FU8tb1Vg93"

# Body content
body='{
  "status": "rise",
  "period": 1
}'

# Melakukan POST request dan menyimpan respons
response=$(curl -s -X POST "$url" \
  -H "Authorization: Bearer $token" \
  -H "Content-Type: application/json" \
  -d "$body")

# Menampilkan respons
echo "Response:"
echo "$response"
