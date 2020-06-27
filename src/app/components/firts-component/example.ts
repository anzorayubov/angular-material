// /* jshint esnext: true */

// let disc = {
//     folder1: {
//         'folder2': {
//             'file.txt': 'some content',
//             'file2.txt': 'lorem ipsum'
//         },
//         'file.txt': 'some content',
//         'file2.txt': 'lorem ipsum'
//     },
//     'file.txt': 'demo'
// },
//     path = [],

//     isObject = (it) => it !== null && typeof it === 'object',

//     folderHTML = (data) => {
//         if(isObject(data)) {
//             return Object.keys(data).reduce(((html,it) => html  + `<my-file class="type-${isObject(data[it]) ? 'folder' : 'file'}">${it}</my-file>`),'');
//         } else {
//             return `<div>${data}</div>`;
//         }
//     },

//     renderTree = (tree) => document.body.innerHTML = (path.length > 0 ? '<my-file>..</my-file>' : '') + folderHTML(tree);


//     window.addEventListener('click',  (event) => {

//         let node = event.target;

//         if(node.tagName === 'MY-FILE') {
//             if(node.textContent == '..')
//                 path.pop();
//             else
//                 path.push(node.textContent);

//             let tree = path.reduce((tree,name) => tree[name], disc);

//             renderTree(tree);

//         }

//     });

//     renderTree(disc);

