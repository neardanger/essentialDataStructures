//Time Complexity is

// 0(1) for adding and removing nodes

//Constant Time

//LinkedList methods


//addHead,addTail,removeHead,removeTail,search,indexOf,all


//Searching is


//0(n) so it is exponential when it comes to searching


//Why are these a good data structure to us in lower level languages

//break up data into small let pieces and dont need to be stored all together


//Each piece of data is stored on its own and can point to another even if it is not all stored
//in the same place


function LinkedList(){
    this.head = null;
    this.tail = null;
}

function Node(value,next,prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}


LinkedList.prototype.addHead = function(value){
    let newNode = new Node(value,this.head,null);
    if(this.head) this.head.prev = newNode;
    else
    this.tail = newNode;
    this.head = newNode;
}

LinkedList.prototype.addTail = function(value){
    var newNode = new Node(value,null,this.tail);
    if(this.tail) this.tail.next = newNode;
    else
    this.head = newNode;
    this.tail = newNode;
}


LinkedList.prototype.removeHead = function(){
    if(!this.head) return null;
    let val = this.head.value;
    this.head = this.head.next;
    if(this.head) this.head.prev = null;
    else this.tail = null;
    return val;

    
}

LinkedList.prototype.removeTail = function(){
    if(!this.tail) return null;
    let val = this.tail.value;
    this.tail = this.tail.prev;
    if(this.tail) this.tail.next = null;
    else this.head = null;
    return val;
}

LinkedList.prototype.search = function(value){
    let currentNode =  this.head;
    while(currentNode){
        if(currentNode.value === value) return 'This value exists ' + currentNode.value
        currentNode = currentNode.next;
    }
    return null;
}


LinkedList.prototype.indexOf = function(value){
    let currentNode = this.head;
    let indexes = [];
    let currentIndex = 0;
    while(currentNode){
        if(currentNode.value === value){
            indexes.push(currentIndex);
        }
        currentNode = currentNode.next;
        currentIndex++
    }
    return indexes
}



let ll = new LinkedList()