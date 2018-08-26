import Vuex from 'vuex'
import json from '@/db/fantagazzettaDB.json'

const createStore = () => {
    return new Vuex.Store({
        state: {
            players: json
        },
        getters: {
            getList(state){
                return state.players
            }
        }
    })
}

export default createStore