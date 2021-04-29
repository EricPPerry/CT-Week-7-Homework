let token = `USE KEY PROVIDED IN GOOGLE COMMENT AND README`

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-inventory-homework-ep.herokuapp.com/api/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if(!response.ok){
            console.log('Failted to fetch car data from the server!')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://car-inventory-homework-ep.herokuapp.com/api/cars`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            console.log('Failed to CREATE new car data!')
        }
        console.log('SUCCESSFULLY CREATED!')
        return await response.json()

    },

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://car-inventory-homework-ep.herokuapp.com/api/cars/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        console.log(response)
    },

    delete: async (id:string) => {
        const response = await fetch(`https://car-inventory-homework-ep.herokuapp.com/api/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            }
        })
    }

}