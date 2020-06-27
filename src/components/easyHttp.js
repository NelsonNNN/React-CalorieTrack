export const get= async(url)=>{
    const responce = await fetch(url)
    const resData = await responce.json()

    return resData
}

export const post = async(url, data)=>{
    const responce = await fetch(url, {
        method: 'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(data)
    })
    const resData = await responce.json()
    return resData
}

export const put=async(url, data)=>{
    const responce = await fetch(url, {
        method: 'PUT',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(data)
    })
    const resData = await responce.json()
    return resData
}

export const deletes= async(url)=>{
    const responce = await fetch(url, {
        method: 'DELETE',
        headers:{'Content-type':'application/json'},
    })
    const resData = await responce.json()
    return resData
}


