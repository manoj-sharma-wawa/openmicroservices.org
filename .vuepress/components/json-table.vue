<script>
    let md = require('markdown-it')();
    
    /**
     * Expects raw to be of the following structure:
     * {
     *     "contact": {
     *     "required": false,
     *     "desc": "foo",
     *     "$block": {
     *       "name": {
     *         "required": true,
     *         "desc": "bar"
     *       }
     *     }
     *   }
     * }
     * @param create
     * @param raw
     * @returns {table}
     */
    let createTable = function (create, raw) {
        let table = create('table', [
            create('tr', [
                create('th', 'Field'),
                create('th', 'Description'),
                create('th', 'Required')])
        ]);
        Object.keys(raw).forEach(key => {
            let row = raw[key];
            let descText = row.desc;

            if (descText.endsWith('.')) {
                descText = descText.substring(0, descText.length - 1);
            }
            let descRendered = md.render(descText);
            let desc = create('td', {domProps:{innerHTML: descRendered}}, []);
            if (row['$block']) {
                desc.children.push(createTable(create, row['$block']));
            }

            table.children.push(create('tr', [
                create('td', [create('code', key)]),
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