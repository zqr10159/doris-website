"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[495609],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var a=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),c=i,y=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return t?a.createElement(y,r(r({ref:n},u),{},{components:t})):a.createElement(y,r({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},308630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(58168),i=(t(296540),t(15680));const l={title:"Select Manual",language:"en"},r=void 0,o={unversionedId:"query/query-data/select",id:"version-3.0/query/query-data/select",title:"Select Manual",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/query/query-data/select.md",sourceDirName:"query/query-data",slug:"/query/query-data/select",permalink:"/docs/query/query-data/select",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Select Manual",language:"en"},sidebar:"docs",previous:{title:"MySQL Compatibility",permalink:"/docs/query/query-data/mysql-compatibility"},next:{title:"Complex Type",permalink:"/docs/query/query-data/complex-type"}},s={},p=[{value:"Select",id:"select",level:2},{value:"Syntax explanation",id:"syntax-explanation",level:2},{value:"Syntax constraints",id:"syntax-constraints",level:2},{value:"Join syntax",id:"join-syntax",level:2},{value:"Example",id:"example",level:2},{value:"Best practice",id:"best-practice",level:2}],u={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"select"},"Select"),(0,i.yg)("p",null,"Select syntax"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SELECT\n    [hint_statement, ...]\n    [ALL | DISTINCT | DISTINCTROW | ALL EXCEPT ( col_name1 [, col_name2, col_name3, ...] )]\n    select_expr [, select_expr ...]\n    [FROM table_references\n      [PARTITION partition_list]\n      [TABLET tabletid_list]\n      [TABLESAMPLE sample_value [ROWS | PERCENT]\n        [REPEATABLE pos_seek]]\n    [WHERE where_condition]\n    [GROUP BY [GROUPING SETS | ROLLUP | CUBE] {col_name | expr | position}]\n    [HAVING where_condition]\n    [ORDER BY {col_name | expr | position}\n      [ASC | DESC], ...]\n    [LIMIT {[offset,] row_count | row_count OFFSET offset}]\n    [INTO OUTFILE 'file_name']\n")),(0,i.yg)("h2",{id:"syntax-explanation"},"Syntax explanation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"select_expr, ..."),"Specifies the columns to retrieve and display in the result set. Aliases can be used, and ",(0,i.yg)("inlineCode",{parentName:"li"},"as")," is optional."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"table_references"),"Specifies the target tables for retrieval, which can be one or more tables (including temporary tables generated by subqueries)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"where_definition"),"Specifies the retrieval conditions (expressions). If a WHERE clause exists, its conditions filter the row data. The ",(0,i.yg)("inlineCode",{parentName:"li"},"where_condition")," is an expression that evaluates to true for each row to be selected. If there is no WHERE clause, the statement selects all rows. In a WHERE expression, you can use any MySQL-supported functions and operators except aggregate functions."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALL | DISTINCT"),"Filters the result set. ",(0,i.yg)("inlineCode",{parentName:"li"},"ALL")," selects all rows, while ",(0,i.yg)("inlineCode",{parentName:"li"},"DISTINCT")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"DISTINCTROW")," filters out duplicate rows. The default is ",(0,i.yg)("inlineCode",{parentName:"li"},"ALL"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALL EXCEPT"),"Filters the result set from ",(0,i.yg)("inlineCode",{parentName:"li"},"ALL")," by specifying one or more column names to exclude from the full result set. All matching column names will be ignored in the output."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"INTO OUTFILE 'file_name'"),"Saves the result set to a new file (which must not exist beforehand), with differences in the saved format."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Group by having"),"Groups the result set by one or more columns. If ",(0,i.yg)("inlineCode",{parentName:"li"},"HAVING")," is present, it filters the groups produced by ",(0,i.yg)("inlineCode",{parentName:"li"},"GROUP BY"),". Extensions to ",(0,i.yg)("inlineCode",{parentName:"li"},"GROUP BY")," such as ",(0,i.yg)("inlineCode",{parentName:"li"},"GROUPING SETS"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"ROLLUP"),", and ",(0,i.yg)("inlineCode",{parentName:"li"},"CUBE")," are available and detailed in the ",(0,i.yg)("a",{parentName:"li",href:"../../../../docusaurus-plugin-content-docs-community/current/design/grouping_sets_design.md"},"GROUPING SETS"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Order by"),"Sorts the final result set. ",(0,i.yg)("inlineCode",{parentName:"li"},"ORDER BY")," sorts the result set by comparing values in one or more columns. Sorting operations can be time-consuming and resource-intensive because all data needs to be sent to a single node for sorting. Sorting requires more memory compared to non-sorted operations. If you need to return the top N sorted results, use the ",(0,i.yg)("inlineCode",{parentName:"li"},"LIMIT")," clause. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Limit n"),"Limits the number of rows in the output result set. ",(0,i.yg)("inlineCode",{parentName:"li"},"LIMIT m,n")," means to start outputting from the mth row and return n records. Using ",(0,i.yg)("inlineCode",{parentName:"li"},"LIMIT m,n")," is meaningful only when combined with ",(0,i.yg)("inlineCode",{parentName:"li"},"ORDER BY"),", otherwise the data returned may be inconsistent each time the query is executed."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Having"),"The ",(0,i.yg)("inlineCode",{parentName:"li"},"HAVING")," clause does not filter rows in the table but filters the results produced by aggregate functions. Typically, ",(0,i.yg)("inlineCode",{parentName:"li"},"HAVING")," is used with aggregate functions (such as ",(0,i.yg)("inlineCode",{parentName:"li"},"COUNT()"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"SUM()"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"AVG()"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"MIN()"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"MAX()"),") and the ",(0,i.yg)("inlineCode",{parentName:"li"},"GROUP BY")," clause."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SELECT")," supports explicit partition selection using ",(0,i.yg)("inlineCode",{parentName:"li"},"PARTITION"),", which includes a list of partitions or subpartitions (or both) following the table name in ",(0,i.yg)("inlineCode",{parentName:"li"},"table_reference"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"[TABLET tids] TABLESAMPLE n [ROWS | PERCENT] [REPEATABLE seek]"),"Limits the number of rows read from a table in the ",(0,i.yg)("inlineCode",{parentName:"li"},"FROM")," clause by pseudo-randomly selecting several tablets based on the specified number of rows or percentage. ",(0,i.yg)("inlineCode",{parentName:"li"},"REPEATABLE")," with a specified seed allows the same sample to be returned again. Alternatively, Tablet IDs can be manually specified, but this is only applicable to OLAP tables."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"hint_statement"),"Using hints before the select list can influence the optimizer's behavior to obtain a desired execution plan. For more information, refer to the ",(0,i.yg)("a",{parentName:"li",href:"../join-optimization/join-hint"},"joinHint Document"),".")),(0,i.yg)("h2",{id:"syntax-constraints"},"Syntax constraints"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SELECT")," can also be used to retrieve calculated rows without referencing any tables."),(0,i.yg)("li",{parentName:"ul"},"All clauses must strictly follow the above format. A ",(0,i.yg)("inlineCode",{parentName:"li"},"HAVING")," clause must come after the ",(0,i.yg)("inlineCode",{parentName:"li"},"GROUP BY")," clause and before the ",(0,i.yg)("inlineCode",{parentName:"li"},"ORDER BY")," clause."),(0,i.yg)("li",{parentName:"ul"},"The alias keyword ",(0,i.yg)("inlineCode",{parentName:"li"},"AS")," is optional. Aliases can be used in ",(0,i.yg)("inlineCode",{parentName:"li"},"GROUP BY"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"ORDER BY,")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"HAVING"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"WHERE")," clause: Executes the ",(0,i.yg)("inlineCode",{parentName:"li"},"WHERE")," statement to determine which rows should be included in the ",(0,i.yg)("inlineCode",{parentName:"li"},"GROUP BY")," section, while ",(0,i.yg)("inlineCode",{parentName:"li"},"HAVING")," is used to determine which rows from the result set should be used."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"HAVING")," clause can reference aggregate functions, such as ",(0,i.yg)("inlineCode",{parentName:"li"},"count, sum, max, min, avg"),", while the ",(0,i.yg)("inlineCode",{parentName:"li"},"WHERE")," clause cannot. However, the ",(0,i.yg)("inlineCode",{parentName:"li"},"WHERE")," clause can reference other functions besides aggregate functions. Column aliases cannot be used in the ",(0,i.yg)("inlineCode",{parentName:"li"},"WHERE")," clause to define conditions."),(0,i.yg)("li",{parentName:"ul"},"Following ",(0,i.yg)("inlineCode",{parentName:"li"},"GROUP BY")," with ",(0,i.yg)("inlineCode",{parentName:"li"},"WITH ROLLUP")," allows for one or more aggregations of the results.")),(0,i.yg)("h2",{id:"join-syntax"},"Join syntax"),(0,i.yg)("p",null,"Doris supports the following JOIN syntax."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"JOIN\ntable_references:\n    table_reference [, table_reference] \u2026\ntable_reference:\n    table_factor\n  | join_table\ntable_factor:\n    tbl_name [[AS] alias]\n        [{USE|IGNORE|FORCE} INDEX (key_list)]\n  | ( table_references )\n  | { OJ table_reference LEFT OUTER JOIN table_reference\n        ON conditional_expr }\njoin_table:\n    table_reference [INNER | CROSS] JOIN table_factor [join_condition]\n  | table_reference LEFT [OUTER] JOIN table_reference join_condition\n  | table_reference NATURAL [LEFT [OUTER]] JOIN table_factor\n  | table_reference RIGHT [OUTER] JOIN table_reference join_condition\n  | table_reference NATURAL [RIGHT [OUTER]] JOIN table_factor\njoin_condition:\n    ON conditional_expr\n")),(0,i.yg)("p",null,"UNION:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SELECT ...\nUNION [ALL| DISTINCT] SELECT ......\n[UNION [ALL| DISTINCT] SELECT ...]\n")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"UNION")," is used to combine the results of multiple ",(0,i.yg)("inlineCode",{parentName:"p"},"SELECT")," statements into a single result set. The column names from the first ",(0,i.yg)("inlineCode",{parentName:"p"},"SELECT")," statement are used as the column names for the returned result. The selected columns listed in the corresponding positions of each ",(0,i.yg)("inlineCode",{parentName:"p"},"SELECT")," statement should have the same data type. (For example, the first column selected in the first statement should have the same type as the first column selected in the other statements.)"),(0,i.yg)("p",null,"By default, ",(0,i.yg)("inlineCode",{parentName:"p"},"UNION")," removes duplicate rows from the result. The optional ",(0,i.yg)("inlineCode",{parentName:"p"},"DISTINCT")," keyword has no effect beyond the default, as it also specifies duplicate row removal. Using the optional ",(0,i.yg)("inlineCode",{parentName:"p"},"ALL")," keyword, no duplicate row removal occurs, and the result includes all matching rows from all ",(0,i.yg)("inlineCode",{parentName:"p"},"SELECT")," statements."),(0,i.yg)("p",null,"WITH:"),(0,i.yg)("p",null,"To specify a common table expression, use a ",(0,i.yg)("inlineCode",{parentName:"p"},"WITH")," clause with one or more comma-separated subclauses. Each subclause provides a subquery that generates a result set and associates a name with the subquery. The following example defines CTEs named ",(0,i.yg)("inlineCode",{parentName:"p"},"cte1")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"cte2")," in the ",(0,i.yg)("inlineCode",{parentName:"p"},"WITH")," clause, and refers to them in the top-level ",(0,i.yg)("inlineCode",{parentName:"p"},"SELECT "),"following the WITH clause."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"WITH\n  cte1 AS (SELECT a\uff0cb FROM table1),\n  cte2 AS (SELECT c\uff0cd FROM table2)\nSELECT b\uff0cd FROM cte1 JOIN cte2\nWHERE cte1.a = cte2.c;\n")),(0,i.yg)("p",null,"In statements that include this ",(0,i.yg)("inlineCode",{parentName:"p"},"WITH")," clause, each CTE name can be referenced to access the corresponding CTE result set. CTE names can be referenced in other CTEs, allowing CTEs to be defined based on other CTEs. Currently, recursive CTEs are not supported."),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Query the names of students whose ages are 18, 20, and 25.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"select Name from student where age in (18,20,25);\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ALL EXCEPT ")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"-- Query all information except for the age of the students.\nselect * except(age) from student; \n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"GROUP BY ")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"--Query the tb_book table, group by type, and calculate the average price for each category of books.\nselect type,avg(price) from tb_book group by type;\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"DISTINCT ")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"--Query the tb_book table and remove duplicate type data.\nselect distinct type from tb_book;\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ORDER BY ")),(0,i.yg)("p",null,"Sort the query results in ascending order (by default) or descending order (DESC). In ascending order, NULL values should appear at the beginning, and in descending order, NULL values should appear at the end."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"--Query all records from the tb_book table, sort them in descending order by id, and display only the first three records.\nselect * from tb_book order by id desc limit 3;\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"LIKE ")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"LIKE")," can perform fuzzy queries with two wildcards: ",(0,i.yg)("inlineCode",{parentName:"p"},"%")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"_"),". The ",(0,i.yg)("inlineCode",{parentName:"p"},"%")," wildcard matches one or more characters, while the ",(0,i.yg)("inlineCode",{parentName:"p"},"_")," wildcard matches a single character."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"-- Find all books where the second character is 'h'.\nselect * from tb_book where name like('_h%');\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"LIMIT (Limit the number of result rows.)")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"-- Display 3 records in descending order.\nselect * from tb_book order by price desc limit 3;\n\nDisplay 4 records starting from id=1\nselect * from tb_book where id limit 1,4;\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"CONCAT (Concatenate multiple columns")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"--Concatenate 'name' and 'price' into a new string for output.\nselect id,concat(name,\":\",price) as info,type from tb_book;\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Functions and expressions")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'--Calculate the total price of each category of books in the tb_book table.\nselect sum(price) as total,type from tb_book group by type;\n--20% off the price\nselect *,(price * 0.8) as "20% off" from tb_book;\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"UNION ")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SELECT a FROM t1 WHERE a = 10 AND B = 1 ORDER by a LIMIT 10\nUNION\nSELECT a FROM t2 WHERE a = 11 AND B = 2 ORDER by a LIMIT 10;\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"WITH clause")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"WITH cte AS\n(\n  SELECT 1 AS col1, 2 AS col2\n  UNION ALL\n  SELECT 3, 4\n)\nSELECT col1, col2 FROM cte;\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"JOIN ")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SELECT * FROM t1 LEFT JOIN (t2, t3, t4)\n                 ON (t2.a = t1.a AND t3.b = t1.b AND t4.c = t1.c)\n")),(0,i.yg)("p",null,"the same as"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SELECT * FROM t1 LEFT JOIN (t2 CROSS JOIN t3 CROSS JOIN t4)\n                 ON (t2.a = t1.a AND t3.b = t1.b AND t4.c = t1.c)\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"INNER JOIN")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SELECT t1.name, t2.salary\n  FROM employee AS t1 INNER JOIN info AS t2 ON t1.name = t2.name;\n\nSELECT t1.name, t2.salary\n  FROM employee t1 INNER JOIN info t2 ON t1.name = t2.name;\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"LEFT JOIN")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SELECT left_tbl.*\n  FROM left_tbl LEFT JOIN right_tbl ON left_tbl.id = right_tbl.id\n  WHERE right_tbl.id IS NULL;\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"RIGHT JOIN")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql SELECT * FROM t1 RIGHT JOIN t2 ON (t1.a = t2.a);\n+------+------+------+------+\n| a    | b    | a    | c    |\n+------+------+------+------+\n|    2 | y    |    2 | z    |\n| NULL | NULL |    3 | w    |\n+------+------+------+------+\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"TABLESAMPLE")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"--Randomly sample 1000 rows in t1 using pseudo-random method. Note that the actual process is to select several Tablets based on the statistical information of the table, and the total number of rows in the selected Tablets may be greater than 1000. Therefore, if you want to return exactly 1000 rows, you need to add a Limit clause.\nSELECT * FROM t1 TABLET(10001) TABLESAMPLE(1000 ROWS) REPEATABLE 2 limit 1000;\n")),(0,i.yg)("h2",{id:"best-practice"},"Best practice"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Additional explanation about the SELECT clause:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"An alias can be specified for ",(0,i.yg)("inlineCode",{parentName:"li"},"select_expr")," using ",(0,i.yg)("inlineCode",{parentName:"li"},"AS alias_name"),". The alias serves as the column name for the expression and can be used in ",(0,i.yg)("inlineCode",{parentName:"li"},"GROUP BY"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"ORDER BY"),", or ",(0,i.yg)("inlineCode",{parentName:"li"},"HAVING")," clauses."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"table_references")," after ",(0,i.yg)("inlineCode",{parentName:"li"},"FROM")," indicate one or multiple tables involved in the query. If multiple tables are listed, a ",(0,i.yg)("inlineCode",{parentName:"li"},"JOIN")," operation will be performed. Each specified table can be assigned an alias."),(0,i.yg)("li",{parentName:"ul"},"The selected columns after ",(0,i.yg)("inlineCode",{parentName:"li"},"SELECT")," can be referenced in ",(0,i.yg)("inlineCode",{parentName:"li"},"ORDER BY")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"GROUP BY")," clauses using column names, column aliases, or integers representing the column position (starting from 1).")))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SELECT college, region, seed FROM tournament\n  ORDER BY region, seed;\n\nSELECT college, region AS r, seed AS s FROM tournament\n  ORDER BY r, s;\n\nSELECT college, region, seed FROM tournament\n  ORDER BY 2, 3;\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If ",(0,i.yg)("inlineCode",{parentName:"li"},"ORDER BY")," appears in a subquery and is also applied to the outer query, the outermost ",(0,i.yg)("inlineCode",{parentName:"li"},"ORDER BY")," takes precedence."),(0,i.yg)("li",{parentName:"ul"},"When using ",(0,i.yg)("inlineCode",{parentName:"li"},"GROUP BY"),", the grouped columns are automatically sorted in ascending order (as if an ",(0,i.yg)("inlineCode",{parentName:"li"},"ORDER BY")," clause followed with the same columns). To avoid the overhead caused by the automatic sorting of ",(0,i.yg)("inlineCode",{parentName:"li"},"GROUP BY"),", adding ",(0,i.yg)("inlineCode",{parentName:"li"},"ORDER BY NULL")," can solve the issue:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SELECT a, COUNT(b) FROM test_table GROUP BY a ORDER BY NULL;\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"When sorting columns in a ",(0,i.yg)("inlineCode",{parentName:"li"},"SELECT")," statement using ",(0,i.yg)("inlineCode",{parentName:"li"},"ORDER BY")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"GROUP BY"),", the server only sorts the values using the initial number of bytes indicated by the ",(0,i.yg)("inlineCode",{parentName:"li"},"max_sort_length")," system variable."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"HAVING")," clause is typically applied at the end, just before the result set is returned to the client, and it is not optimized (whereas ",(0,i.yg)("inlineCode",{parentName:"li"},"LIMIT")," is applied after ",(0,i.yg)("inlineCode",{parentName:"li"},"HAVING"),")."),(0,i.yg)("li",{parentName:"ul"},"According to the SQL standard, ",(0,i.yg)("inlineCode",{parentName:"li"},"HAVING")," must reference columns that are either in the ",(0,i.yg)("inlineCode",{parentName:"li"},"GROUP BY")," list or used in aggregate functions. However, MySQL extends this by allowing ",(0,i.yg)("inlineCode",{parentName:"li"},"HAVING")," to reference columns from the ",(0,i.yg)("inlineCode",{parentName:"li"},"SELECT")," clause list and columns from outer subqueries."),(0,i.yg)("li",{parentName:"ul"},"If a column referenced in ",(0,i.yg)("inlineCode",{parentName:"li"},"HAVING")," is ambiguous, a warning will be generated. In the following statement, ",(0,i.yg)("inlineCode",{parentName:"li"},"col2")," is ambiguous:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SELECT COUNT(col1) AS col2 FROM t GROUP BY col2 HAVING col2 = 2;\n")),(0,i.yg)("p",null,"Do not use ",(0,i.yg)("inlineCode",{parentName:"p"},"HAVING")," where ",(0,i.yg)("inlineCode",{parentName:"p"},"WHERE")," should be used. ",(0,i.yg)("inlineCode",{parentName:"p"},"HAVING")," is intended to be used with ",(0,i.yg)("inlineCode",{parentName:"p"},"GROUP BY"),"."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"HAVING")," clause can reference aggregate functions, whereas ",(0,i.yg)("inlineCode",{parentName:"p"},"WHERE")," cannot."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SELECT user, MAX(salary) FROM users\n  GROUP BY user HAVING MAX(salary)  10;\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"LIMIT")," clause can be used to restrict the number of rows returned by a ",(0,i.yg)("inlineCode",{parentName:"li"},"SELECT")," statement. ",(0,i.yg)("inlineCode",{parentName:"li"},"LIMIT")," can have one or two parameters, both of which must be non-negative integers.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"-- Retrieve rows 6 to 15 from the result set.\nSELECT * FROM tbl LIMIT 5,10;\n-- If you want to retrieve all rows starting from a certain offset, you can set a very large constant as the second parameter. The following query retrieves all data starting from the 96th row:\nSELECT * FROM tbl LIMIT 95,18446744073709551615;\n-- If LIMIT has only one parameter, then the parameter specifies the number of rows that should be retrieved, and the offset is defaulted to 0, which means starting from the first row.\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SELECT...INTO")," allows the query results to be written to a file."),(0,i.yg)("li",{parentName:"ul"},"Modifiers for the ",(0,i.yg)("inlineCode",{parentName:"li"},"SELECT")," keyword:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Primarily used for removing duplicates."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"ALL")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"DISTINCT")," modifiers specify whether to remove duplicate rows (not a specific column) from the result set."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALL")," is the default modifier, meaning all rows that meet the criteria will be retrieved."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DISTINCT "),"removes duplicate rows."))),(0,i.yg)("li",{parentName:"ul"},"Key advantages of subqueries:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Subqueries enable structured queries, allowing each part of a statement to be isolated."),(0,i.yg)("li",{parentName:"ul"},"Some operations require complex joins and associations. Subqueries provide alternative methods to perform these operations."))),(0,i.yg)("li",{parentName:"ul"},"Accelerating queries:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Utilize Doris's partitioning and bucketing as data filtering conditions to reduce the data scanning range as much as possible."),(0,i.yg)("li",{parentName:"ul"},"Make full use of Doris's prefix index fields as data filtering conditions to speed up query performance."))),(0,i.yg)("li",{parentName:"ul"},"UNION:Using only the ",(0,i.yg)("inlineCode",{parentName:"li"},"union")," keyword has the same effect as using ",(0,i.yg)("inlineCode",{parentName:"li"},"union distinct"),". Since deduplication can be memory-intensive, using ",(0,i.yg)("inlineCode",{parentName:"li"},"union all")," for queries can result in faster performance and reduced memory consumption. If users want to perform ",(0,i.yg)("inlineCode",{parentName:"li"},"order by")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"limit")," operations on the returned result set, they should place the ",(0,i.yg)("inlineCode",{parentName:"li"},"union")," operation within a subquery, then select from that subquery, and finally, place the subquery along with ",(0,i.yg)("inlineCode",{parentName:"li"},"order by")," outside.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"select * from (select age from student_01 union all select age from student_02) as t1 \norder by age limit 4;\n\n+-------------+\n|     age     |\n+-------------+\n|      18     |\n|      19     |\n|      20     |\n|      21     |\n+-------------+\n4 rows in set (0.01 sec)\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"JOIN",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"In addition to supporting equi-join in inner join conditions, non-equi-join is also supported. However, for performance considerations, it is recommended to use equi-join."),(0,i.yg)("li",{parentName:"ul"},"Other types of joins only support equi-join.")))))}m.isMDXComponent=!0}}]);