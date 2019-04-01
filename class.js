// 尝试一下ES6的class写法
// 注意所有可以用class完成的都可以在ES5完成，但是让语法更清晰了

// 用class写一个二叉树看看


// 节点class

class node{
    constructor(v){
        this.value = v;
        this.leftChild = undefined;
        this.rightChild = undefined;
        this.parent = undefined;
    }
    // getter methods
    getValue(){return this.value;}
    getParent(){return this.parent;}
    getLeftChild(){return this.leftChild;}
    getRightChild(){return this.rightChild;}

    //setter methods
    setParent(parentNode){this.parent=parentNode;}
    setLeftChild(leftNode){this.leftChild=leftNode;}
    setRightChild(RightNode){this.rightChild=RightNode;}
}


// 树的class

class tree{
    constructor(){
        this.root = undefined;
    }
    
    setRoot(node){this.root=node;}

    // 根据节点数据大小在合适的地方插入

    addNode(node){
        // 如果root未定义或者节点为空，直接返回
        if(this.root==undefined || node==undefined){
            console.log("undefined node or root");
            return;
        }
        let currentNode = this.root;
        while(true){
            if(node.getValue()<currentNode.getValue()){
                if(currentNode.getLeftChild()==undefined){
                    currentNode.setLeftChild(node);
                    console.log("successfully inserted as left child: " + node.getValue());
                    return;
                }else{
                    currentNode = currentNode.getLeftChild();
                }
            }else{
                if(currentNode.getRightChild()==undefined){
                    currentNode.setRightChild(node);
                    console.log("successfully inserted as right child: " + node.getValue());
                    return;
                }else{
                    currentNode = currentNode.getRightChild();
                }
            }
        }
    }

    // 各种形式的遍历，小小的用了一下闭包

    inOrderTraversal(){
        let result = "";
        function recur(node){
            if(node.getLeftChild()!=undefined){
                recur(node.getLeftChild());
            }
            result += node.getValue() +" ";
            if(node.getRightChild()!=undefined){
                recur(node.getRightChild());
            }
        }
        console.log("in order traversal");
        recur(this.root);
        console.log(result);
    }

    postOrderTraversal(){
        let result = "";
        function recur(node){
            if(node.getLeftChild()!=undefined){
                recur(node.getLeftChild());
            }
            if(node.getRightChild()!=undefined){
                recur(node.getRightChild());
            }
            result += node.getValue() +" ";
        }
        console.log("post order traversal");
        recur(this.root);
        console.log(result);
    }

    preOrderTraversal(){
        let result = "";
        function recur(node){
            result += node.getValue() +" ";
            if(node.getLeftChild()!=undefined){
                recur(node.getLeftChild());
            }
            if(node.getRightChild()!=undefined){
                recur(node.getRightChild());
            }
        }
        console.log("pre order traversal");
        recur(this.root);
        console.log(result);
    }

}

let t = new tree();
t.setRoot(new node(5));
t.addNode(new node(3));
t.addNode(new node(7));
t.addNode(new node(8));
t.addNode(new node(1));
t.addNode(new node(4));
console.log();
t.inOrderTraversal();
console.log();
t.postOrderTraversal();
console.log();
t.preOrderTraversal();