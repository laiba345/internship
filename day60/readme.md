# day60
- 使用Vue框架来创建表格的时候，可以将相关数据放置在data中，
通过遍历将数据全部进行展示
- 创建表格的样式
    - table
    - tr
    - th
    - td
- 数据的书写; 
```
data: {
    headers: ['Header 1', 'Header 2', 'Header 3', 'Header 4', 'Header 5'],
    data: [
        ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3', 'Row 1, Cell 4', 'Row 1, Cell 5'],
        ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3', 'Row 2, Cell 4', 'Row 2, Cell 5'],
        // Add rows 3 to 12 (similar to the row above)
        // ...
    ]
},
```
- template的书写，通过v-for来遍历数据
```
<table>
    <tr>
        <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
        <tr v-for="(row, index) in data" :key="index" :class="getRowClass(index)">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
    </tr>
</table>
```

- 样式的书写,尤其注意隔行换色
```
 table {
    border-collapse: collapse;
    width: 100%;
}

th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
}

th {
    background-color: blue;
    color: white;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}
```
注意点:
1. border-collapse: collapse; 是CSS中用于表格的属性，用于控制表格边框的合并方式。
    - collapse是默认值，表示表格边框会合并在一起，相邻的单元格之间的边框会合并为一个单一的边框，没有间隙。这样使得整个表格看起来更加紧凑和一致。
2. tr:nth-child(even) 是CSS中的选择器，它表示选中表格中的偶数行（即行号为偶数的行）。
    - 其中 :nth-child(even)是一个伪类选择器表示选中父元素中的偶数位置的子元素
