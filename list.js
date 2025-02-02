export function createLinkedList(){
    return{
      head: null,
      tail: null,
      
      // Adds a new node to the end of the list
      append(value) {
        if (!this.head) { // If the list is empty, set head and tail to the new node
          let newNode = createNode(value);
          this.head = newNode;
          this.tail = newNode;
        } else { // Otherwise, add the new node at the end and update the tail
            let newNode = createNode(value);
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
      },
      
      // Adds a new node to the beginning of the list
      prepend(value) {
        let newNode = createNode(value);
        newNode.nextNode = this.head;
        this.head = newNode;
      },
      
      // Returns the total number of nodes in the list
      size() {
        let count = 0;
        let tempNode = this.head;
        
        while (tempNode) {
            count++;
            tempNode = tempNode.nextNode;
        }
        return count;
      },
      
      // Returns the first node (head) of the list
      getHead() {
        return this.head;
      },
      
      // Returns the last node (tail) of the list
      getTail() {
        return this.tail;
      },
      
      // Returns the node at a given index (0-based index)
      at(index) {
        let count = 0;
        let tempNode = this.head;
        
        while (tempNode) {
            if (count === index) {
                return tempNode;
            }
            tempNode = tempNode.nextNode;
            count++;
        }
        console.error("Index out of bounds");
        return null;
      },
      
      // Removes the last node from the list
      pop() {
        if (!this.head) return;
        
        if (this.head === this.tail) { // If only one node exists
            this.head = null;
            this.tail = null;
            return;
        }
        
        let tempNode = this.head;
        while (tempNode.nextNode !== this.tail) {
            tempNode = tempNode.nextNode;
        }
        tempNode.nextNode = null;
        this.tail = tempNode;
      },
      
      // Checks if a value exists in the list
      contains(value) {
        let tempNode = this.head;
        while (tempNode) {
            if (tempNode.value === value) {
                return true;
            }
            tempNode = tempNode.nextNode;
        }
        return false;
      },
      
      // Finds the index of a node with the given value, returns null if not found
      find(value) {
        let count = 0;
        let tempNode = this.head;
        
        while (tempNode) {
            if (tempNode.value === value) {
                return count;
            }
            tempNode = tempNode.nextNode;
            count++;
        }
        return null;
      },
      
      // Converts the list to a string representation
      toString() {
        let output = '';
        let tempNode = this.head;
        
        while (tempNode) {
            output += `( ${tempNode.value} ) --> `;
            tempNode = tempNode.nextNode;
        }
        output += 'null';
        return output;
      },
      
      // Inserts a new node at a specified index
      insertAt(value, index) {
        if (index > this.size()) {
            console.error('Index out of bounds');
            return;
        }
        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index === this.size()) {
            this.append(value);
            return;
        }
        
        let prev = this.at(index - 1);
        let newNode = createNode(value);
        newNode.nextNode = prev.nextNode;
        prev.nextNode = newNode;
      },
      
      // Removes the node at a specified index
      removeAt(index) {
        if (index >= this.size() || index < 0) {
            console.error('Index out of bounds');
            return;
        }
        if (index === 0) {
            this.head = this.head.nextNode;
            return;
        }
        
        let prev = this.at(index - 1);
        prev.nextNode = prev.nextNode.nextNode;
        
        if (!prev.nextNode) { // If the removed node was the tail, update tail
            this.tail = prev;
        }
      }
    };
}
  
// Creates a new node with a given value and nextNode reference
function createNode(value = null, nextNode = null){
    return{
        value,
        nextNode,
    };
}
