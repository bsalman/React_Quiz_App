const fetchSendFunction =(url,body)=>{
    return new Promise((resolve,reject)=>{
    fetch(url,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    }).then(response => {
        if (response.status === 200 ){
            response.json().then(data => {
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        }else {
            reject(new Error('can not get the data, response number is: ' + response.status))
        }
    }).catch(error => {
        reject(error)
    })
})

};
const fetchGetFunction =(url)=>{
    return new Promise((resolve,reject)=>{
    fetch(url,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => {
        if (response.status === 200 ){
            response.json().then(data => {
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        }else {
            reject(new Error('can not get the data, response number is: ' + response.status))
        }
    }).catch(error => {
        reject(error)
    })
})
};

//==================================================//
export const allSubjectsPost = ()=>{
    return new Promise((resolve,reject)=>{
        fetch('./register',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            if (response.status === 200 ){
                response.json().then(data => {
                    
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            }else {
                reject(new Error('can not get the data, response number is: ' + response.status))
            }
        }).catch(error => {
            reject(error)
        })
    })
};
 //============================================//
export const registerPost =(name,email)=>{
    const sendData ={
        name,
        email
    };
    return new Promise((resolve,reject)=>{
        fetch('/register',{
            method:'POST',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(sendData)
        }).then(response =>{
            if (response.status ==200) {
                response.json().then()
            }
        })

    });

}