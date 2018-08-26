<template>
    <div class="column">
        <PlayersListControlBar :players="computedPlayers" @ChangeOrder="onChangeOrder($event)" @SearchedPlayer="onSearch($event)" @FilteredByRole="onFilter($event)" />
        <PlayersList :players="computedPlayers"/>
    </div>
</template>

<script>
import PlayersList from '@/components/PlayersList'
import PlayersListControlBar from '@/components/PlayersListControlBar'
export default {
    data(){
        return {
            players: this.$store.getters.getList,
            search: '',
            filters: '',
            order: '',
        }
    },
    computed: {
        computedPlayers(){
            let filtered = this.players;
            if(this.search){
                const string = this.search.toUpperCase()
                const regex = new RegExp(string)
                filtered = this.players.filter((item)=>{
                    return item.nome.match(regex);
                    })
            }
            if (this.filters){
                switch (this.filters) {
                    case 'portieri': 
                        filtered = filtered.filter((item)=>{
                            return item.ruolo.includes('Por')
                        })
                        break;
                    case 'difensori':
                        filtered = filtered.filter((item) => {
                            return item.ruolo.includes('Ds') | item.ruolo.includes('Dd') | item.ruolo.includes('Dc')
                        })
                        break;
                    case 'centrocampisti': 
                        filtered = filtered.filter((item) => {
                            return item.ruolo.includes('C') | item.ruolo.includes('M')
                        })
                        break;
                    case 'ali': 
                        filtered = filtered.filter((item)=>{
                            return item.ruolo.includes('W') | item.ruolo.includes('E')
                        })
                        break;
                    case 'trequartisti':
                        filtered = filtered.filter((item)=> {
                            return item.ruolo.includes('T')
                        })
                        break;
                    case 'attaccanti':
                        filtered = filtered.filter((item)=>{
                            return item.ruolo.includes('A')
                        })
                        break;
                    case 'pc':
                        filtered = filtered.filter((item)=>{
                            return item.ruolo.includes('Pc')
                        })
                        break;
                }
            }
            if(this.order){
                switch (this.order) {
                    case 'partite-':
                        filtered = filtered.sort((a,b)=>{
                            return b.partite2017 - a.partite2017
                        })  
                        break; 
                    case 'mvf-':
                        filtered = filtered.sort((a, b)=>{
                            return b.mediaVotoFantaGazzetta2017 - a.mediaVotoFantaGazzetta2017
                        })
                        break;
                    case 'goalFatti-': 
                        filtered = filtered.sort((a, b)=>{
                            return b.goalFatti2017 - a.goalFatti2017
                        })
                        break;
                    case 'goalSubiti-':
                        filtered = filtered.sort((a, b)=>{
                            return b.goalSubiti2017 - a.goalSubiti2017
                        })
                        break;
                }   
            }
            return filtered

        }
    },
    components: {
        PlayersList,
        PlayersListControlBar
    },
    methods: {
        onSearch(inputValue){
            console.log('[CLIENT] called onSearch')
            this.search = inputValue
        },
        onFilter(inputValue){
            console.log('[CLIENT] called onFilter')
            this.filters = inputValue
        },
        onChangeOrder(order){
            this.order = order
        }
    }

}
</script>

<style>

</style>
