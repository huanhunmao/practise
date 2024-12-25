

function preorder(root){
    if(!root) return 

    console.log('当前遍历节点是：', root.val);
    preorder(root.left)
    preorder(root.right)
}

