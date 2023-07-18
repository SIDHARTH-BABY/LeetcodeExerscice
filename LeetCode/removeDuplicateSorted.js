function removeDuplicate(head) {
let cur= head
while( cur &&  cur.next){
  if(cur.value === cur.next){
    cur.next  = cur.next.next
  }else{
    cur = cur.next
  }
 
}
return head
}

const array = [1,1,2,3,3];
console.log(removeDuplicate(array));
