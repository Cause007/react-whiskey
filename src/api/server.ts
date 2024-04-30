const token = '883696e83b5c743a2368a537a926892e85bba026c6aeb9b7'

export const server_calls = {
    get: async () => {
        const response =  await fetch (`https://whiskey-zqsl.onrender.com/api/whiskeys`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response =  await fetch (`https://whiskey-zqsl.onrender.com/api/whiskeys`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response =  await fetch (`https://whiskey-zqsl.onrender.com/api/whiskey/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok){
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id: string) => {
        const response =  await fetch (`https://whiskey-zqsl.onrender.com/api/whiskey/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },

        })

        if (!response.ok){
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
}
