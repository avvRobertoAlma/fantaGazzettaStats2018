<template>
    <tr>
        <td><b>{{player.nome}}</b></td>
        <td>{{player.squadra}}</td>
        <td>{{player.ruolo}}</td>
        <td>{{player.mediaVoto2017}}</td>
        <td>{{player.mediaFantaGazzetta2017}}</td>
        <td>{{player.partite2017}}</td>
        <td>{{player.goalFatti2017}}</td>
        <td>{{player.goalSubiti2017}}</td>
    </tr>
</template>

<script>
export default {
    props: ['player'],
    computed: {
        
    }
}
</script>

<style>

</style>
