class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  addFront(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  display() {
    let runner = this.head;
    let result = "";
    while (runner) {
      result += runner.data + ", ";
      runner = runner.next;
    }
    return result.slice(0, -2) || "Empty List"; // Remove trailing comma or return "Empty List"
  }
}

// Example Usage
const SLL1 = new SLL();
SLL1.addFront(76);
SLL1.addFront(2);
SLL1.addFront(11.41);
console.log(SLL1.display()); // Output: 11.41, 2, 76

const emptyList = new SLL();
console.log(emptyList.display()); // Output: Empty List
