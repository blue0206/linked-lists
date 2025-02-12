export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        if (this.head == null) {
            this.head = new Node(value);
            this.tail = this.head;
            this.size++;
            return;
        }
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    prepend(value) {
        if (this.head == null) {
            this.head = new Node(value);
            this.tail = this.head;
            this.size++;
            return;
        }
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.size++;
    }

    at(index) {
        let currentIndex = 0;
        let iter = this.head;
        while (iter != null && currentIndex != index) {
            iter = iter.next;
            currentIndex++;
        }
        return iter;
    }

    pop() {
        if (this.tail != null) {
            let iter = this.head;
            while (iter.next != this.tail) {
                iter = iter.next;
            }
            this.tail = iter;
            this.tail.next = null;
            this.size--;
        }
    }

    contains(value) {
        let iter = this.head;
        while (iter != null) {
            if (iter.value === value) return true;
            iter = iter.next;
        }
        return false;
    }

    find(value) {
        let iter = this.head;
        let index = 0;
        while (iter != null) {
            if (iter.value === value) return index;
            iter = iter.next;
            index++;
        }
        return null;
    }

    insertAt(value, index) {
        let currentIndex = 0;
        let iter = this.head;
        let prev = null;
        while (iter != null && currentIndex != index) {
            prev = iter;
            iter = iter.next;
            currentIndex++;
        }

        const beforeNode = prev;
        const afterNode = iter;
        const newNode = new Node(value, afterNode);
        if (!afterNode) this.tail = newNode;
        else if (beforeNode) beforeNode.next = newNode;
        else this.head = newNode;
        this.size++;
    }

    removeAt(index) {
        let currentIndex = 0;
        let iter = this.head;
        let prev = null;
        while (iter != null && currentIndex != index) {
            prev = iter;
            iter = iter.next;
            currentIndex++;
        }

        const beforeNode = prev;
        const deleteNode = iter;
        if (!deleteNode) return;
        if (beforeNode) beforeNode.next = deleteNode.next;
        else if (beforeNode == null) this.head = deleteNode.next;
        deleteNode.next = null;
        this.size--;
    }

    toString() {
        let iter = this.head;
        let str = "";
        while (iter != null) {
            str += `( ${iter.value} ) -> `;
            iter = iter.next;
        }
        str += "null";
        return str;
    }
}

class Node {
    constructor(value, next) {
        this.value = value || null;
        this.next = next || null;
    }
}