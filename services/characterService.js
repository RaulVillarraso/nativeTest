import api from './index'

async function getAllCharacters(){
    const { data } = api.get('/character')
    return data
}