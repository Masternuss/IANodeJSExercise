//https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/

//Primise returns an 'fetch'
//Fetch will not allow cross-sites-cookues
//and also not send cookies by default unless you set the credentials option(init)

//EXAMPLE
const axios = require('axios');
const baseUrl = 'https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX';
const credentials = {
    username: 'guest',
    password: 'guest',
};
const config = {
    headers: {
        'Accept': 'application/json'
    },
    auth: credentials,
};

async function getAccess() {
    const contacts = await axios.get(`${baseUrl}/org.opencrx.kernel.account1/provider/CRX/segment/Standard/account`, config)
        .then(function (response) {
            console.log("Successs");
        })
        .catch(function (error) {
            console.log("Error")
        });
    const customers = contacts.data.objects;
    console.log(customers);
}
///====================================================================================================================
getAccess();


