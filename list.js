function createLinkedList(){
    return{
      head: null,
      tail: null,
      append(value) {
        // if head is null make it the head and tail
        if (!this.head) {
          let newNode = createNode(value);
          this.head = newNode;
          this.tail = newNode;
        } else {
            let newNode = createNode(value);
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
      },
      prepend(value) {
        let newNode = createNode(value);
        newNode.nextNode = this.head;
        this.head = newNode;
      },
      size() {
        let tempNode;
        let count = 0;
        if (!this.head) {
            return 0;
        } else {
            count++;
            tempNode = this.head;
            while(tempNode.nextNode) {
                tempNode = tempNode.nextNode;
                count++;
            }
            return count;
        }
      },
      getHead() {
        return this.head;
      },
      getTail() {
        return this.tail;
      },
      at(index) {
        if (!head) {
            return 0;
        } else {
            tempNode = this.head;
            while(tempNode.nextNode) {
                tempNode = tempNode.nextNode;
                count++;
                if (count === index) {
                    return tempNode;
                }
            }
            return console.error("not found");
            
        }
      }
    };
  }
  
  function createNode(value = null, nextNode = null){
    return{
      value,
      nextNode,
    };

  }
  
  let listTest = createLinkedList();
  listTest.append(3);
  listTest.append(4);
  listTest.append(5);
  listTest.prepend(8);
//   console.log(listTest);
  let count = listTest.size();
//   console.log(count);
let tail = listTest.getTail();
let head = listTest.getHead();

// console.log(head);
// console.log(tail);
  
let test = listTest.at(1);

console.log(test);