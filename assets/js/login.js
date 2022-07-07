const getDeviceCode = async () => {
    return await fetch(`https://httpbin.org/post`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
}

$(document).ready(async () => {
    const resp = await getDeviceCode();
    const {headers: h, url: u} = await resp.json()
    console.log(h, u);
})