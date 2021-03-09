
// function q(nums, k) {
//     for(let i =0; i<nums.length-1;i++){
//         for(let j =i+1; j<nums.length;j++){
//             if(nums[i]+nums[j]===k){
//                 console.log(true);
//                 return true;
//             }
//         }
//     }

//     return false;
// }

// q([1,2,3], 5);

export class Cart {
    constructor() {
        this.items = [];
    }

    countItem() {
        return this.items.length;
    }

    getItemList() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(index) {
        this.items.splice(index, 1);
    }
}



