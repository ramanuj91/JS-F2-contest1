let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperswithMap(Myarr) {
    //Write your code here
    for(let i=0; i<arr.length; i++){
        let temp = arr[i];
        if(temp.profession === "developer"){
            console.log(temp);
        }
    }
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here
    arr.forEach((z) => {
        if(z === "developer"){
            console.log(z);
        }
    });

    
  }
  
  function addData() {
    //Write your code here
    arr.push({id:4,name:"susan",age:"20",profession:"intern"})
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here
    arr.pop();
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here
    let arr2 = [];
    let concatArr = arr.concat(arr2);
    console.log(concatArr);
  }