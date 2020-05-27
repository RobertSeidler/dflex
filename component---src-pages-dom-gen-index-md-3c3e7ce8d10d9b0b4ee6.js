(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4UgA":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return b}));t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("1c7q"),t("mXGw");var a=t("/FXl"),r=t("Bl7J");var l={},i={_frontmatter:l},s=r.a;function b(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(s,Object.assign({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"@dflex/dom-gen"),Object(a.b)("p",null,"DOM relations generator algorithm."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm install @dflex/dom-gen\n")),Object(a.b)("p",null,"Generates relations between DOM elements based on element depth. For each DOM\nnode, it generates three keys: Siblings, Parent and Children keys and two\nindexes one refers to node order in its level and the other refers to the parent\nindex in parental level. Together: keys and indexes combined form of\nuniqueness for each element."),Object(a.b)("p",null,"In case you are dealing with any DOM-tree, you can build entire branches and traverse\nthrough them using these generated unique keys and indexes. Think of relational\ndatabase or hash tables but applied in DOM tree."),Object(a.b)("h2",null,"Generates element pointer"),Object(a.b)("p",null,"Element pointer refers to the element position and its relationship in DOM tree.\nIt's represented with ",Object(a.b)("inlineCode",{parentName:"p"},"getElmPointer")," as following:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"const domGen = new Generator()\n\ndomGen.getElmPointer(id: string, depth: number)\n")),Object(a.b)("p",null,"Returns pointer object refers to element relation with its keys and related\nindex:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"order: Object <elementOrder>")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"self: number")," - Element self index among its siblings."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"parent: number")," - Parent index among its siblings."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"keys: Object <relationKey>")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"sK: string")," - Siblings Key, connects nodes in the same level."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"pK: string")," - Parent key, connects nodes in the higher level."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"chK: string")," - Children Key, connects nodes in the lower level.")))),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'import Generator from "@dflex/dom-gen";\n\nconst domGen = new Generator();\n\nlet pointer = domGen.getElmPointer("id-0", 0);\n\n// pointer = {\n//   keys: {\n//     chK: null,\n//     pK: "1-0",\n//     sK: "0-0",\n//   },\n//   order: {\n//     parent: 0,\n//     self: 0,\n//   },\n// };\n')),Object(a.b)("p",null,"Internally ",Object(a.b)("inlineCode",{parentName:"p"},"Generator")," has build dom tree as following:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),'DOM-root\n│\n│───id-0 => order: { parent: 0, self: 0 } || keys: { chK: null , pK: "1-0", sK: "0-0" }\n')),Object(a.b)("p",null,"Adding more elements on the same level:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'const pointer1 = domGen.getElmPointer("id-1", 0);\n\n// pointer1 = {\n//   keys: {\n//     chK: null,\n//     pK: "1-0",\n//     sK: "0-0",\n//   },\n//   order: {\n//     parent: 0,\n//     self: 1,\n//   },\n// };\n\nconst pointer2 = domGen.getElmPointer("id-2", 0);\n\n// pointer2 = {\n//   keys: {\n//     chK: null,\n//     pK: "1-0",\n//     sK: "0-0",\n//   },\n//   order: {\n//     parent: 0,\n//     self: 2,\n//   },\n// };\n')),Object(a.b)("p",null,"And dom tree is:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),'DOM-root\n│\n│───id-0 => order: {parent: 0, self: 0} || keys: {chK: null, pK: "1-0", sK: "0-0"}\n│\n│───id-1 => order: {parent: 0, self: 1} || keys: {chK: null, pK: "1-0", sK: "0-0"}\n│\n│───id-2 => order: {parent: 0, self: 2} || keys: {chK: null, pK: "1-0", sK: "0-0"}\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," ids form 0 to 2, all have same parent and siblings key. And it\nguarantees that any any incoming parent will carry key ",Object(a.b)("inlineCode",{parentName:"p"},"1-0")," and exists in\nposition ",Object(a.b)("inlineCode",{parentName:"p"},"0"),"."),Object(a.b)("p",null,"This goes also for any parent. Eventually, by using keys and indexes you can go up↑\nand down↓."),Object(a.b)("p",null,"Following the same logic we can go deeper:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'const pointer = domGen.getElmPointer("id-parent-1", 1);\n\n// pointer = {\n//   keys: {\n//     chK: "0-0",\n//     pK: "2-0",\n//     sK: "1-0", // this key was generated previously in children level.\n//   },\n//   order: {\n//     parent: 0, // all children aware of their parent index.\n//     self: 0,\n//   },\n// };\n')),Object(a.b)("p",null,"Changing the depth identifies new level. Take a look at current dom tree that we\nnow have:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),'DOM-root\n├───id-parent-1  => order: {parent: 0, self: 0} || keys: {chK: "0-0", pK: "2-0", sK: "1-0"}\n    |\n    │───id-0  => order: {parent: 0, self: 0} || keys: {chK: null, pK: "1-0", sK: "0-0"}\n    │\n    │───id-1 => ..\n    │\n    │───id-2 => ..\n\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Take into consideration some major points:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"It works both ascending and descending. So, it doesn't care how nodes are\nmounted and it works with async mounting.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"It automatically attaches the tree and links each node to the suitable parent\nand siblings."))),Object(a.b)("h2",null,"Dealing with branches"),Object(a.b)("p",null,"Despite the fact that ",Object(a.b)("inlineCode",{parentName:"p"},"Generator")," is not DOM store, it maintains some kind of\ndata to keep generate unique pointers. Every incoming node element belong to\nbranch contains all input ids distrusted by depth/level entries."),Object(a.b)("h3",null,"Getting branches"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"domGen.getElmBranch(sk: string) : string<id> | Array<ids>\n")),Object(a.b)("p",null,"where ",Object(a.b)("inlineCode",{parentName:"p"},"sk")," represents siblings key generated by ",Object(a.b)("inlineCode",{parentName:"p"},"getElmPointer"),". Going back to\nour generated tree:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'const branchChildren = domGen.getElmBranch("0-0");\n\n// branchChildren = ["id-0", "id-1", "id-2"];\n')),Object(a.b)("p",null,"Since we have only one parent ",Object(a.b)("inlineCode",{parentName:"p"},"branchParents")," contain one node only:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'const branchParents = domGen.getElmBranch("1-0");\n\n// branchParents = "id-parent-1";\n')),Object(a.b)("p",null,"To get all branches:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'const { branches } = domGen;\n\n// branches = {\n//   "0-0": ["id-0", "id-1", "id-2"],\n//   "1-0": "id-parent-1",\n// };\n')),Object(a.b)("h3",null,"Updating branches"),Object(a.b)("p",null,"There's no point in having DOM treemap without the ability to update it\naccording to some logic you've already implemented in your app. Following common\nsense, you can do it easily with ",Object(a.b)("inlineCode",{parentName:"p"},"setElmBranch"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"domGen.setElmBranch(sk: string, branch: string<id>|Array<ids>)\n")),Object(a.b)("p",null,"Let's continue working on our branches by switching the order of children.\nCurrently, we have: ",Object(a.b)("inlineCode",{parentName:"p"},'"0-0": ["id-0", "id-1", "id-2"]')," but element with ",Object(a.b)("inlineCode",{parentName:"p"},"id-1"),"\nhas been switched with ",Object(a.b)("inlineCode",{parentName:"p"},"id-2"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'const { branches } = domGen;\n\nconst newBranch = ["id-0", "id-2", "id-1"];\n\ndomGen.setElmBranch("0-0", newBranch);\n\n// branches = {\n//   "0-0": ["id-0", "id-2", "id-1"],\n//   "1-0": "id-parent-1",\n// };\n')),Object(a.b)("h2",null,"Test"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-sh"}),"yarn test dom-gen\n")),Object(a.b)("h2",null,"License"),Object(a.b)("p",null,"This package is licensed under the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/jalal246/dflex/tree/master/packages/dom-gen/LICENSE"}),"GPL-3.0 License")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-dom-gen-index-md-3c3e7ce8d10d9b0b4ee6.js.map