<script>

    let createTable = function (create, raw) {
        let table = create('table', [
            create('tr', [
                create('th', 'Field'),
                create('th', 'Description'),
                create('th', 'Required')])
        ]);
        Object.keys(raw).forEach(key => {
            let row = raw[key];

            let desc = create('td', row.desc);
            if (row['$block']) {
                desc.children.push(createTable(create, row['$block']));
            }

            table.children.push(create('tr', [
                create('td', key),
                desc,
                create('td', row.required)
            ]));
        });
        return table;
    };
    export default {
        name: 'json-table',

        render: function (create) {
            let tables = [];
            this.$slots.default.forEach(vNode => {
                vNode.children.forEach(child => {
                    let raw = JSON.parse(child.text);
                    tables.push(createTable(create, raw));
                })
            });

            return create('div', tables);
        }
    }
</script>

<style scoped>

</style>