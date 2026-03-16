const getSoteredBook = () =>{
    const storedBookSTR = localStorage.getItem("readList");
    if(storedBookSTR){
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else{
        return [];
    }

}

const addToWishlist  = (id) =>{
    const storedBookData =JSON.parse(localStorage.getItem("wishList")) || []

    if(storedBookData.includes(id)){
         alert("bhai ei id already exist")

    }
else{
    storedBookData.push(id)
    localStorage.setItem("wishList", JSON.stringify(storedBookData))
}
}

const addToStoredDb = (id) =>{
    const storedBookData = getSoteredBook();

    if(storedBookData.includes(id)){
        alert("bhai ei id already exist")
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData)

        localStorage.setItem("readList", data)
    }

}

export {addToStoredDb, addToWishlist,getSoteredBook }