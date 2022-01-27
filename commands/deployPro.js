
const conf = new (require('conf'))()
const chalk = require('chalk')

function deployProject(projectId, containerId, edgeId) {
    var request = require('request');

var headers = {
    'Connection': 'keep-alive',
    'sec-ch-ua': '" Not;A Brand";v="99", "Microsoft Edge";v="97", "Chromium";v="97"',
    'X-XSRF-TOKEN': '957f738e-7a2b-4569-a50f-02e58e8effa2',
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
    'Cookie': 'ELQSTATUS=OK; _fbp=fb.1.1634865538363.1023806443; ELOQUA=GUID=F029EAE744D747A2BB76DA7819D70E4B; aam_uuid=35514361286774165171705034170808972714; WRUIDAWS=3519203551772831; intelresearchUID=3036112895166M1634865520770; IDSID=anantkum; isManager=N; BadgeType=BB; CNCampusCode=BGA; ajs_user_id=%2211280125%22; ajs_group_id=null; ajs_anonymous_id=%22063bf7ba-da45-4020-876b-b85523afaf67%22; __CT_Data=gpv=48&ckp=tld&dm=intel.com&apv_78_www41=48&cpv_78_www41=48&rpv_78_www41=4; _ga_4C9WHFQHKS=GS1.1.1638158701.1.0.1638158701.0; _cs_c=0; _ga=GA1.2.979227840.1634896146; s_fid=72B244CA89297C15-2E04A7B17EE349E7; kndctr_AD2A1C8B53308E600A490D4D_AdobeOrg_consent=general=in; isMenuVisible=1; detected_bandwidth=HIGH; src_countrycode=IN; _cs_mk=0.4906245611613007_1642934201151; utag_main=v_id:017ca594611b001f29cd47ab557505082004e07a00bd0$_sn:61$_se:2$_ss:0$_st:1642936002245$wa_ecid:35491714101053681561702768900468082099$wa_erpm_id:8513674$ad_blockers:null$elqid:8740111$elqwdl:true$ses_id:1642934201047%3Bexp-session$_pn:2%3Bexp-session$wa_internal_user:true%3Bexp-session; intelresearchREF=https%3A//www.intel.com/content/www/us/en/my-intel/devcloud-sign-in.html%3Ftype%3D33554433%26realmoid%3D06-ff0e5da2-2e5c-4309-aa02-609465b39bbc%26guid%3D%26smauthreason%3D0%26method%3Dget%26smagentname%3D%24sm%24qnjmmp%252bn6gmn%252fvvnfgk5womi3xqrsadybde9vplr1ogltlzwyj6crft8rxfdy4hv%26target%3D%24sm%24https%253a%252f%252fsfederation%252eintel%252ecom%252ffederation2%252fsp%252fssodevcloud_prodappscfa%252fahr0chm6ly9zc28tzgv2y2xvdwqtchjvzc5hchbzlmnmys5kzxzjbg91zc5pbnrlbc5jb20vc2ftbc9tzxrhzgf0yq%24%253d%24%253d%253fsmportalurl%253dhttps%24%253a%24%252f%24%252fsfederation%252eintel%252ecom%24%252faffwebservices%24%252fpublic%24%252fsaml2sso%2526samltransactionid%253df48e9c30-d46940d0-6acbc980-53db1706-47e1dc10-f8; wap_new_session=1; AMCVS_AD2A1C8B53308E600A490D4D%40AdobeOrg=1; AMCV_AD2A1C8B53308E600A490D4D%40AdobeOrg=1585540135%7CMCIDTS%7C19016%7CMCMID%7C35491714101053681561702768900468082099%7CMCAAMLH-1643539002%7C12%7CMCAAMB-1643539002%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1642941402s%7CNONE%7CvVersion%7C4.4.0%7CMCCIDH%7C-1555475093; at_check=true; s_cc=true; mbox=PC#83d6d15447f64702b5278c51a381b0a0.31_0#1704471121|session#2a2f5d2c52024f8581075a033880d7aa#1642936063; kndctr_AD2A1C8B53308E600A490D4D_AdobeOrg_identity=CiYzNTQ5MTcxNDEwMTA1MzY4MTU2MTcwMjc2ODkwMDQ2ODA4MjA5OVIPCI3M0azKLxgBKgRJUkwx8AGO5Ym06C8=; kndctr_AD2A1C8B53308E600A490D4D_AdobeOrg_consent_check=1; adcloud={%22_les_v%22:%22y%2Cintel.com%2C1642936003%22}; _cs_id=55f5ef17-3639-ad15-e358-0482f9695f1f.1634865538.78.1642934203.1642934203.1589385054.1669029538228; _cs_s=1.5.0.1642936004718; s_sq=%5B%5BB%5D%5D; SMSESSION=llFHbwlphvt870I3o4qi3Frbsj3LWJbwcs/d3fk8/8QT91sllkflvLoatYpc1XJG+LlAAV32OurxyXLxYXCehqtETRUPVcG1IYb19jSf33fxP4efl9cedej8u6UzY/ZIXfqXgVfRoSprkaOKEG108sog/TtjqJUFhTYvF5J/07K1nwtlCs+CQunWLqqOjbP1a1BBv0mJIkDDwb6f0S5xH/EEuzEoOR96pXbdRNQN/fT6k6eRfrp/ZTLjVUd2AlJzhkBp5wi289VNKzf4A5k9ioM1CLYUn+vE0/2TWu3jbP4JAB3DrPPuigsi22RjIHecm0dvxJL40cli+Ze0zrgGWaMH/ozJxGXmobj/n6jVXNvUnpiNURGOAdTQYNre3M9qKjKZ6HBer8ohmTht4mnh9ZOiMpDjhWctlRn4vXPs7fLCHL/v8tFCIM3/DHZRm9cN01Eg+yYpzaofGGubvdeQVMB7qy5bJV/aV9i8HPbdLAh5Hyg3wJ7uQV7F5dfM0mwa5Rp+Z6NW/dFZNmEPIirTaDRKd4tNo+o/exoDwX+j2p2qrxrUKcTAomT7xJsOBpi6pjvHuIxaR/Llnda4c3h56+c8oDka5rP9UwS+gDpkuYM3RnzRaxQOQOQEKfmwowGjNpzh/B1c7tMWioSho1LptoR5+i4ZcT7EmlxcZob13KDsd9cAF+fcpQTg2BZwIuzHX5trdPKsDCwD/majYbIQJJ4bismlY2j7Vu+JmS59PAwYdoqxrkkUuvA8lLRGz4HJL7ye3IVGc8Ubg54mueUhO1ajcWRVTJEQGoURqATXiris2lnoxAZvblmRdBPa/W2Q1+xBnPzR47jIaCmD5IUMFE080KX5rRA4A8dbfZWp5g7Hi2+CdDRjisOosdDqrPYkO1bwyARQ21M54PESsVh2JqeucBDRL4jtChiq2hGZHEcNobNaXA3RwFJTJV22bjoxwx5m5jEsdIhlw2Te4Nez8M67gKpHSzla7gIcEtDvgWzRPBou8M1jqoqcWa9tu27HuipHH/JfcnZHYZ/2SMn3Nr1z3hxp9QNDfsZ3EimjDivjMyRbVUBZuSaDiUaTkyX3gX0lMXVW7t3afnbArNDlXBCwHeDanFzw; SecureSESSION=tlgKFPBJdrf3Z6Pl1sJEJ7vpQUnsXpTehFrvPIl185zDjOWgnWXFq+srvHNtw96HrvPyDnN8+Dlrr2HuyV44kmZmDHAC6crmPOKSnoIypq7+CV3a0zm7iwlYoQgsk4EsIzyFPz+rJi/aw724Ed0Uxj9c5Wns4efAF8Za4ba5dk9iYqew6SxqOQls+cwogCywuVnqYK80GvU2uvhSWxAi+7TtddtFSHGQ6rvtw7+YrZ2CoeVkI3padEsemNZnS0cv+KgwPZDTA9Qykb5uiBbTOHah8BvQQtL0UT5aa5h1B56vbPABdoRpMOXdUI0oN+Vwb6OrTiusdY8x9FAvtc7R9dOuBGnDSBRAdb6D5hozZ6W8DmuS1HermuAzi1vv8bZNlzFAt+lRf66ZC5cDZalLhkA6xfnelvH/I++BsnnCkaMI5cSkMkx6Rc5NjounJlbon9gJcjde3RsbSjPpQ2UFLpsh5QSu6SiwhK5nkjINCuwG9MzVcxUu+QA7W7jIRxEJJu3/rCkTqjo5RWnpn2ANoy0hXziyyU6k3jPVtok0HJEA3kQWcGf9I2ODPj78ynDPDh6/fdi+aUHd1IwkxmIjO9RTgiTJOJhRY68HZoHsCcCBNqe0KUgTdv0A3sjkcBeoQnXpNfdfGmGY0haKRluqDO6gdPhyBKSty+jWBSBNvN5QHZEBLdr6O19f53edpioz+VDM32No5QbnVF9hDHk+AQ3+O5eWTiNHI8JM1So+eAZbzBNqBXc9xKQE+d8ddE4Ecg+2ySAn0zVZ8QtUajfPM4Kt8fmatjf3Qwlc7LAu0Tp3ba7ZwPG09GfN3JAnT4iQiO6vTVMim7/cWG9bbtLJUepghk1p+Q+KEGbV86woNW0Zf/oJ0TuYEEoOCRMU6lzA8ZfnahFaAXsAd0UATQSzWB3a6N2F7KMH/qrbk444h7nq32ZkLi5mktAMygo0KFmKucepjOsmsFcbKT2kOLLh2LRPvJX2wuvBM+zHmLoJJxshKuLPF+VrVs1h8K4nR7xTDKw15A34jN+FSuqXKDd65/wcDbvBKwk/iBnpqCTg7KFf4e5LRSszve8lAZZfdpHeEcHsv0i0YaoutfbUFd8JAZJbR4xNj2EP48Nho1PoOJ4gg0nEdRzm/UUFI6kmP4xX; TS0138fa28=01eb8d28b3676f051a4b1dd381ab6efbaf5c8fb420e623124f5224d3ee6e24746969726f67c323c1585983e8e678ef1d42480fae55e728bbc67b7cc23c784e784ddbcaa7e88999d153692967f58d12ba41f00f6e85; token=eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJha3VtYXI3MmJAZ21haWwuY29tIiwiYWNjZXNzIjpbeyJyb2xlIjoiRGV2Q2xvdWQtRWRnZS1CYXNpYyIsInByaXZpbGVnZXMiOlsiUmVhZCJdfSx7InJvbGUiOiJEZXZDbG91ZC1vbmVBUEktQmFzaWMiLCJwcml2aWxlZ2VzIjpbIlJlYWQiXX0seyJyb2xlIjoiRGV2Q2xvdWQtRWRnZS1BY2FkZW1pYSIsInByaXZpbGVnZXMiOlsiUmVhZCJdfV0sImFjY291bnRFeHBpcnkiOiIyMDIyLTAyLTExIiwiZGF5c0xlZnQiOjE5LCJ1c2VyTmFtZSI6ImFrdW1hcjcyYkBnbWFpbC5jb20iLCJzZXJ2aWNlTmFtZSI6ImFrdW1hcjcyYjMwMDAwMzU3Nzk1MCIsImV4cCI6MTY0Mjk1MjIwOSwidXNlcklkIjozMDAwMDM1Nzc5NTAsImlhdCI6MTY0MjkzNDIwOX0.mWoKYaVMZewVTRSgCUUh7S0eAa_ScmjFgR-OSZTaqFszaiikDYeseW0JSXCdUSt7TYYjIB-SmKBDYGhYdJTnV9BEKkXGj4XfmtXCvqqFYXrcMeX3gt1VT2lf1Mc8_OFiBh-EQJGLHIIKKHnyK8hGrWKHEWiggv1-zRITL-flzgI; JSESSIONID=BCFCB03E58EC2DB04C2C9A41511B7C05; 3f0876cf282574d6279bbc49ee90ccfa=99e745c9f2ea265b4501b1f040afb6aa; XSRF-TOKEN=957f738e-7a2b-4569-a50f-02e58e8effa2'
};

var dataString = '{"cpu":"Core","variant":"i5","generation":"Gen8","projectId":'+ projectId+',"edgeNodeId":'+ edgeId+',"containerId":['+containerId+']}';

var options = {
    url: 'https://byoc-devcloud-prod.apps.cfa.devcloud.intel.com/api/v1/containers/deploy',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 202) {
        console.log("Project Deployed successfully check status with getStatus")
        //console.log(body);
    }
}

request(options, callback);
}
module.exports = deployProject
