
const $rusult = document.querySelector("#result");
const $inputs = document.querySelectorAll(".inputProduct");
const $productForm = document.querySelector("#productForm")
// const $uptadeInputs = $updateForm.querySelectorAll(".inputProduct")
// const $updateForm = document.querySelector("#updateForm")


fetch("https://6662ac4162966e20ef097175.mockapi.io/api/products/products") 
     .then(response => response.json())
     .then(data => renderUsers(data))
  

     const renderUsers = (data) =>{
        data.forEach(users => {
            const $div = document.createElement("div")
            $div.className = "card"
           $div.innerHTML =`
           <img src="${users.image}"/>
               <p>${users.title}</p>
               <p ${users.price}></p>
              <strong> ${users.discount}</strong>
              <p> ${users.description}</p>
              <strong>${ users.createdAt}</strong>
              <br><br>
              <button data-users-id class="delete">Delete</button>
              <button data-users-id class="edit">Edit</button>
            `
                $rusult.appendChild($div)
        })
       
      
     }
     const hendleProductAction = (event) =>{
         event.preventDefault()
         const values = [...$inputs].map(input => input.value)
         let product = {
             image: values[0],
             title: values[1],
             price: values[2],
             discount: values[3],
             description: values[4]
         }

         fetch("https://6662ac4162966e20ef097175.mockapi.io/api/products/products", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify(product)
         })
         .then(response => response.json())
         .then(data => console.log(data))

     }
     $rusult .addEventListener("click", (event) => {
        if(event.target.classList.contains("delete")){
          event.target.parentNode.remove()
        }
      })
      
    //   const hendleUpdateproductAction = (event) =>{
    //     event.preventDefault()
    //     const values = [...$uptadeInputs].map(input => input.value)
    //     let product = {
    //         image: values[0],
    //         title: values[1],
    //         price: values[2],
    //         discount: values[3],
    //         description: values[4]
    //     }
    //   }


     $productForm.addEventListener("submit", hendleProductAction)
    //  $updateForm.addEventListener("submit", hendleUpdateproductAction)