


function inorder(root){
    if(!root) return 

    inorder(root.left)
    console.log('当前遍历是', root.val);
    inorder(root.right)
}