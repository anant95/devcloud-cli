const conf = new (require('conf'))()
const chalk = require('chalk')

function createProject(name,desc) {
    var request = require('request');

var headers = {
    'Connection': 'keep-alive',
    'sec-ch-ua': '" Not;A Brand";v="99", "Microsoft Edge";v="97", "Chromium";v="97"',
    'X-XSRF-TOKEN': '55c4f405-ba3c-4a5b-b029-382e67754d2b',
    'sec-ch-ua-mobile': '?0',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJha3VtYXI3MmJAZ21haWwuY29tIiwiYWNjZXNzIjpbeyJyb2xlIjoiRGV2Q2xvdWQtRWRnZS1CYXNpYyIsInByaXZpbGVnZXMiOlsiUmVhZCJdfSx7InJvbGUiOiJEZXZDbG91ZC1vbmVBUEktQmFzaWMiLCJwcml2aWxlZ2VzIjpbIlJlYWQiXX0seyJyb2xlIjoiRGV2Q2xvdWQtRWRnZS1BY2FkZW1pYSIsInByaXZpbGVnZXMiOlsiUmVhZCJdfV0sImFjY291bnRFeHBpcnkiOiIyMDIyLTAyLTExIiwiZGF5c0xlZnQiOjE4LCJ1c2VyTmFtZSI6ImFrdW1hcjcyYkBnbWFpbC5jb20iLCJzZXJ2aWNlTmFtZSI6ImFrdW1hcjcyYjMwMDAwMzU3Nzk1MCIsImV4cCI6MTY0MzAxNzQzNCwidXNlcklkIjozMDAwMDM1Nzc5NTAsImlhdCI6MTY0Mjk5OTQzNH0.rovnTK88TatVAIn3RtdfYu3t8Xxs01DCYvlkFhZACBB3uyaydAOeFBqVZtlI5Gd97tz862l3G5AKV_vnduFGTlc5JGj-fp-T01MTwykh9B36ILRmDkz09_QMYfdbSx-8X-cQAB2bMITwiPUOTZizRGSkeCtku_34tlvu98B3bug', 
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36 Edg/97.0.1072.62',
    'sec-ch-ua-platform': '"Windows"',
    'Origin': 'https://frontend.apps.cfa.devcloud.intel.com',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://frontend.apps.cfa.devcloud.intel.com/',
    'Accept-Language': 'en-US,en;q=0.9',
    'Cookie': 'detected_bandwidth=HIGH; src_countrycode=IN; AMCVS_AD2A1C8B53308E600A490D4D%40AdobeOrg=1; at_check=true; s_cc=true; _cs_c=0; ELOQUA=GUID=00A7494D673C438BB639238F3F6CD74F; ELQSTATUS=OK; kndctr_AD2A1C8B53308E600A490D4D_AdobeOrg_identity=CiY3ODA0NzgyOTcyMjk5NTQxNzQzMjkwNzY4MzA2ODc1NDc3NDAyMFIPCIql9LTmLxgBKgRTR1Ay8AGKpfS05i8=; kndctr_AD2A1C8B53308E600A490D4D_AdobeOrg_consent=general=in; TS018cf1c9=01c5f9c67c67f3c2101e90bcf02933c51235c451c7a87f73f79fd2bce6ee09b4e1c7c7756f42db739ccd42053bfb2a4e45715e06c0f2946900c6ccf49b9c4b7e236f43f72c34c37c254282d1fa6f600e7fd9da69f047aa4a2fec7a2b0a9958b87f5543336b; _gcl_au=1.1.1420555059.1642484077; kndctr_AD2A1C8B53308E600A490D4D_AdobeOrg_consent_check=1; aam_uuid=78070295510099755422905427144262350877; intelresearchREF=https%3A//www.intel.com/content/www/us/en/developer/tools/devcloud/overview.html; intelresearchUID=3940567890105M1642484079686; intelresearchSID=3940567890105M1642484079686; SMSESSION=/KYhpXnQN+nYwCDnwVEuzVAZIEpAjyGggvWCvsmg6UmA567e34RUjJHIWYh+BR6ZhsnapanZ/AoIsOmi5FbJ/7jyNRAemqVsUaHIICo0durOAa7z8XS8PifsUHIjjBV2IcDteWG8nNDkj84twWk2F6uuv9VxiSzNkkDm+kZPIWJJNV+5OJercl6Vzr0tTAYSEJVumN5Chua3jiBsdZN4tRiwuGCdXJ4FPWJ0SDe/LLQ1zHPbJfbU92mFqJDKjSEigRQO5bGveKGF8WzTNIckgbCOETAXlI2gQ7LwjvCeneiRGQJtt6RDCVwo8/7tG2t3ynUkq1pmlmsleMPb/O1wJZYtGLyFFot5waGDOrJYnP2CFBAhAQlVZuR5qmcPJjmwGINNOxuRJQcumoK9ETuIw4rK/fbr+L4O2uk+iOqFwka/ZUPzQRCpZUu+xF8iLvyU13AciEb+q+YEUUKiM78v4apF/MYiqRqxP/OPSGN5PNooaAGUcrVrR1uPXd47O+b02NgdEikfV4jVLcLkQDMV0V2f6NWe1jklFx6PHhzCCcns4Vv2FrY0AKqh55k5tEC5TswjaZVkskq3PSDF9J94dtO8VMmyE11cK7pRdclnn0D2knx3LPFx/wHw7z1OCNi5QsfyjX7Fm4JCtXOI2bW6lhYEQGvaE+nr8k90eTs4WXy4Tr4WC+yKw09qU7RU3KsTCcPl9TfwwUdGopvHWtWJfccaaJoX2XDoJy8gXPfgJRDcpqida9rOgI/1edUl6DGtFFnDCu6sZFOsATM/xRyrXL2yZe7dicx18WZGMuk+BCsiyKpE8PlW3maExtEe0gGWBO00SQbRDm7nbVEtWefoo03Ge57VqwvmvzCjs36LmKQcLEweO+exp2UgDm/SafxmfKvQKFaoQhQ/YGzQOcCSurt8FXYF6Gi8Fd79sRs1AT9fLeMi6ItRWRPg+/C/wMsk1nokJ7fTZLuKQEUYSQC5qoLrKA/xgPbon4au+U6Qkmkf+ecYrYn9RxOjcF0qvLaHGwfQXl2UPYR0Er/SmFT8ciAnyZxJvGFH+X6WUBw1zoY1VvjnoFEI+r6QY2rgRp2kZvZ5msWE7rDpXJNgAZo5ff+9onUA2g+l; IGHFLoggedIn=true; eRPMID=11234130; adcloud={%22_les_v%22:%22y%2Cintel.com%2C1642485893%22}; AMCV_AD2A1C8B53308E600A490D4D%40AdobeOrg=1585540135%7CMCIDTS%7C19010%7CvVersion%7C4.4.0%7CMCMID%7C78047829722995417432907683068754774020%7CMCAAMLH-1643088893%7C12%7CMCAAMB-1643088893%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1642491293s%7CNONE%7CMCCIDH%7C489341208; _cs_id=6b162010-3704-ac2f-e19c-ea16d0debb34.1642399076.2.1642484093.1642484076.1589385054.1676563076740; mbox=PC#e369dbcbc7a347f59ea90150c638e757.31_0#1705643878|session#c8424516b38345079388c2f95003cd72#1642485954; utag_main=v_id:017e669d0c120012ee2c28b2bdc805083066407b007e8$_sn:2$_se:17$_ss:0$_st:1642485897308$wa_ecid:78047829722995417432907683068754774020$ses_id:1642484075303%3Bexp-session$_pn:3%3Bexp-session$wa_adbchk:1%3Bexp-session$wa_internal_user:true%3Bexp-session$wa_erpm_id:11234130$elqid:8740111$elqwdl:true$elq_enrich:1%3Bexp-session; s_sq=%5B%5BB%5D%5D; intelresearchSTG=32; SecureSESSION=ZwOzPnaFbO0ZerYefCXYXSDhWfGpkTP6BL8k+RmBGPAJi8Nv5T8BSQzXh/Qtz74xcLSNGcbl9nsr7GSSAGBS41jNRRhIPMFjGzLUGAvd8Mr9d7VToB65I4bN1zaiRxs11MCshOhnc4XkZQVK188b1dECJarb3pFSbypW4o0/5U3cB5HbqFPPJGsxCH4VjIgo0rrV9/Pz93bLnS45z0V8bJpld3Rg7nTbtkczDO6N2O9S9RySgWRQB7z5T+LLLRvjB7p2sJqhfGRevr06o4Heyb2WD9GN6Gf5c3+DLSgyHh/2TMtTpXfO74swlXN6Dkm4ParPsu4me6JSGvSKwE/+hkihI9KgJ4L/5gLaTFnjQXfdhBh5Lrd2C0uxbIHPNBVWIdJ3iVS8+wAPTz7IRac6FkVpjypDND8nbEguC6eIDoRu+u0fo0bKtmT9CbdCZqBrvGtEz/aX3rw9IPUZ6Rmm/5b4hybEaLlPtMBuJiMYyp+SL7s/1DBiYk3CQHNqG8zqllRqgp1aP+RC/K3mOJlb6T4tnxrK01F0YlMXylhPXcMYKQg4ydcX/o/tC1LB81RqA31RfUG0AxffNf0c4dF2ipJG5DBADG6OOXXBtGrJ+MWZS+FvZCY0Phw6Hguwo94ef+eiRUPrky9m/xOnOzxlsUCJHc98KmhjhSGrQfnpIrrxUM8+LDlam/Q1lHHUr7hGLSp/oJ7Va4L4qoaE+cxY/g6c5SoG/GlEWamPXP1YMPz7MnF1xybGpL0OWGHRvy2Z6IanYoCTjxl4GZQRmBa2CE25fiCr1/qScz5UwNDCo5F8EsYWexWsXEHtISgPPeTWUAg/k4ZSFHNc9Edu/Xq61cMpEWxKMmBVnHYwxy7Yh0o73k7uNoFgg0CztqFbbjqATzaZ8Dkov+9ZFTCCb+SMlCVMYDoMh6Eb8liJ8xt/BdN1WmzpIvwDWy8Ub1LgmptKuLRVMm3DP15XafTfvfOjZULI9RYx6HbtMXib/VV+QV+r08E+DTFdW+3SilCPVy4TJCUsGkvD5JKEddV/iD23Aikz5f6X0HS8; TS0138fa28=01eb8d28b3e230dd6c826c7698514178941f38e21f8562c9900d6b990d4ee14034fba6c62af06cc100467b010002e7d88c1b4591fb70f2ced023b6460d6cde9b3a15653d86; token=eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJha3VtYXI3MmJAZ21haWwuY29tIiwiYWNjZXNzIjpbeyJyb2xlIjoiRGV2Q2xvdWQtRWRnZS1CYXNpYyIsInByaXZpbGVnZXMiOlsiUmVhZCJdfSx7InJvbGUiOiJEZXZDbG91ZC1vbmVBUEktQmFzaWMiLCJwcml2aWxlZ2VzIjpbIlJlYWQiXX0seyJyb2xlIjoiRGV2Q2xvdWQtRWRnZS1BY2FkZW1pYSIsInByaXZpbGVnZXMiOlsiUmVhZCJdfV0sImFjY291bnRFeHBpcnkiOiIyMDIyLTAyLTExIiwiZGF5c0xlZnQiOjI0LCJ1c2VyTmFtZSI6ImFrdW1hcjcyYkBnbWFpbC5jb20iLCJzZXJ2aWNlTmFtZSI6ImFrdW1hcjcyYjMwMDAwMzU3Nzk1MCIsImV4cCI6MTY0MjUwMjEwNiwidXNlcklkIjozMDAwMDM1Nzc5NTAsImlhdCI6MTY0MjQ4NDEwNn0.vDBqFJAMd00zyB4GGjhG3t2hNLL60oGKsFb7MwzNIUVrjIJFbndcA5hf570MqlVAVL3tC3j9_vDVI_aYVNM_NB4-ghbP_8Xy5n6keqwquEH3e2u0-6CLMTeRxfhROiBKm9lSbUlQLEobsxZGt22krMFDcb8C2Oecdx3HUMScKIo; JSESSIONID=8C315DCDBCEA7610D55B806044BF6E77; 3f0876cf282574d6279bbc49ee90ccfa=1c085d73cf2ece7d4943dd8d71c76a71; XSRF-TOKEN=55c4f405-ba3c-4a5b-b029-382e67754d2b'
};

var dataString = JSON.stringify({"name":name,"description":desc});

var options = {
    url: 'https://byoc-devcloud-prod.apps.cfa.devcloud.intel.com/api/v1/projects',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 201) {
        console.log(chalk.greenBright("Project name " + chalk.red(Object(JSON.parse(body)).name)+" is successfully created with projectId: "+ chalk.red(Object(JSON.parse(body)).projectId)));
        //console.log(body);
    }
}

request(options, callback);
}
module.exports = createProject
