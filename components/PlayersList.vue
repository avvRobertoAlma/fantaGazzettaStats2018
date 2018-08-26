<template>
        <table class="table">
            <TableHeader/>
            <TableRow v-for="(player, index) in players" :key="index" :player="player"  />
        </table>
</template>

<script>
import TableHeader from '@/components/TableHeader'
import TableRow from '@/components/TableRow'

export default {
    components: {
        TableHeader,
        TableRow
    },
    props: ['players']
}
</script>

<style>

</style>
