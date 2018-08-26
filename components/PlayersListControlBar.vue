<template>
    <nav class="level">
                            <div class="level-left">
                                <div class="level-item">
                                    <p class="subtitle is-6">
                                        <strong>{{players.length}}</strong> {{players.length > 1 ? 'Giocatori' : 'Giocatore'}}
                                    </p><!-- end .subtitle-->
                                </div><!-- end .level-item-->                     
                                <div class="level-item">
                                    <div class="field has-addons">
                                        <p class="control">
                                            <input @input="onSearchPlayer" class="input" type="text" v-model="search" placeholder="Ricerca giocatore..."/>
                                        </p>
                                        <!--<p class="control">
                                            <button  class="button">Cerca</button>
                                        </p>-->
                                    </div><!-- end .fields-->
                                </div><!-- end .level-item-->
                                <div class="level-item">
                                    <div class="field">
                                        <div class="select">
                                            <select v-model="filter" @change="onChangeFilter">
                                                <option value="">Filtra per..</option>
                                                <option value="portieri">Portieri</option>
                                                <option value="difensori">Difensori</option>
                                                <option value="centrocampisti">Centrocampisti</option>
                                                <option value="ali">Ali</option>
                                                <option value="trequartisti">Trequartisti</option>
                                                <option value="attaccanti">Attaccanti</option>
                                                <option value="pc">Punte centrali</option>
                                        </select>
                                        </div>
                                        
                                    </div>
                                </div><!-- end .level-item-->
                                <div class="level-item">
                                    <div class="field">
                                        <div class="select">
                                            <select v-model="order" @change="onChangeOrder">
                                                <option value="">Ordina per..</option>
                                                <option value="partite-">Partite Giocate 2017 (discendente)</option>
                                                <option value="mvf-">Media Voto Fantagazzetta 2017 (discendente)</option>
                                                <option value="goalFatti-">Goal segnati 2017 (discendente)</option>
                                                <option value="goalSubiti-">Goal subiti 2017 (discendente)</option>
                                        </select>
                                        </div>
                                        
                                    </div>
                                </div><!-- end .level-item-->
                            </div><!-- end .level-left-->
                            <div class="level-right">
                               <!-- Say something --> 
                            </div>
                        </nav>
</template>

<script>
export default {
    data(){
        return {
            search: '',
            filter: '',
            order: ''
        }
    },
    props: ['players'],
    methods: {
        onSearchPlayer(){
            console.log('[CLIENT]: called search function')
            this.$emit('SearchedPlayer', this.search)
        },
        onChangeFilter(){
            this.$emit('FilteredByRole', this.filter);
        },
        onChangeOrder(){
            this.$emit('ChangeOrder', this.order);
        }
    }
}
</script>

<style>

</style>
