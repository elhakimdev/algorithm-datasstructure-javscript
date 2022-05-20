export default class List {
    /**
     * Thge List instances.
     */
    constructor(){
        this.size = 0;
        this.storage = [];
        this.position = 0;
    }

    /**
     * This function appends a new element onto the list at the next available position, 
     * which will be equal to the value of the size property:
     * 
     * @param {*} element The list element 
     */
    append(element){
        this.storage[this.size++] = element;
    }

    /**
     * Convert the list to array representation.
     * 
     * @returns array
     */
    toArray(){
        return this.storage;
    }


    /**
     * convert the current list instance to json representation.
     * 
     * @returns object | JSON
     */
    toJson(){
        let arr = new Array();

        for (let index = 0; index < this.size; index++) {
            let el  = this.storage[index];
            let obj = new Object({
                id: index,
                element: el,
                type: typeof el,
            });
            arr.push(obj);
        }

        return arr;
    }
}