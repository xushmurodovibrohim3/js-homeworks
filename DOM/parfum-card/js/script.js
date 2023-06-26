document.body.style.cssText = `
   background-color: #F2EAE2;
   display: flex;
   height: 100vh;
   align-items: center;
   justify-content: center;
`

let wrapper = document.createElement('div')

wrapper.style.cssText = `
   display: flex;
   border-radius: 7px;
   overflow: hidden;
   width: 600px;
`

document.body.append(wrapper)

let cardImg = document.createElement('div')

cardImg.style.width = '50%'

wrapper.append(cardImg)

let img = document.createElement('img')

img.setAttribute('src', '../img/image.png')

img.style.cssText = `
   width: 100%;
   height: 100%
`

cardImg.append(img)

let cardInfo = document.createElement('div')

cardInfo.style.cssText = `
   background-color: white;
   padding: 32px;
   width: 50%;
`

cardImg.after(cardInfo)

let typeOfProduct = document.createElement('p')

typeOfProduct.innerText = 'Parfume'

typeOfProduct.style.cssText = `
   font-family: Montserrat;
   font-size: 12px;
   font-weight: 500;
   letter-spacing: 5px;
   text-transform: uppercase;
   margin-bottom: 20px;
   color: #6C7289;
`

cardInfo.insertAdjacentElement('afterbegin', typeOfProduct)

let heading = document.createElement('h3')

heading.style.cssText = `
   font-size: 32px;
   font-family: Fraunces;
   font-weight: 700;
   margin-bottom: 24px;
   color: #1C232B;
`

heading.innerText = 'Gabrielle Essence Eau De Parfum'

cardInfo.append(heading)

let parfumInfo = document.createElement('p')

parfumInfo.style.cssText = `
   font-size: 14px;
   font-family: Montserrat;
   font-weight: 500;
   color: #6C7289;
   margin-bottom: 29px;
`

parfumInfo.innerText = 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.'

cardInfo.append(parfumInfo)

let price = document.createElement('div')

price.style.cssText = `
   display: flex;
   align-items: center;
   column-gap: 19px;
   margin-bottom: 30px;
`
console.log(5);
cardInfo.append(price)

let presentPrice = document.createElement('p')

presentPrice.style.cssText = `
   font-size: 32px;
   font-family: Fraunces;
   font-weight: 700;
   line-height: 32px;
   color: #3D8168;
`

presentPrice.innerText = '$149.99'

price.append(presentPrice)

let oldPrice = document.createElement('p')

oldPrice.style.cssText = `
   font-size: 13px;
   font-family: Montserrat;
   font-weight: 500;
   line-height: 23px;
   text-decoration: line-through;
   color: #6C7289;
`

oldPrice.innerText = '$169.99'

price.append(oldPrice)

let button = document.createElement('button')

button.style.cssText = `
   display: flex;
   width: 100%;
   column-gap: 11px;
   padding: 15px 62px;
   background-color: #3D8168;
   border: 0;
   border-radius: 8px;
   cursor: pointer;
   font-size: 14px;
   font-family: Montserrat;
   font-weight: 700;
   color: white
`

button.innerHTML = `<img src = '../img/cart.svg'> Add to Cart`

cardInfo.append(button)