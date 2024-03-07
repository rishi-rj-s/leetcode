var middleNode = function (head) {
    let array = [];
    let length = 0;
    while (head !== null) {
        array.push(head);
        head = head.next;
        length++;
    }
    return array.at(length / 2)
};
