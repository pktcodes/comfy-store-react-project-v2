# Comfy Store 🛋️

> PROD [Live] : https://react-comfy-store-v2-prod.netlify.app/

#### Comfy Store consists of a straightforward user interface where there is a

- **Home** is the landing page which consists of sections i.e., **Header**, **Navbar**, **Hero**, **Featured Products**.
- **Header** has `Sign in / Guest` which on click takes the user to the **Login** page and `Create an account` to the **Register page**.
  -  **Login** page is where the user can log in or test the application with the Guest User.
  -  When the user is logged in **Hi, _username_** and **`LOGOUT`** will be shown
- **Navbar** consists of list of pages i.e., **`Home`**  , **`About`**  , **`Products`** , **`Cart`** , **`Checkout`** , **`Orders`** where the user can navigate between pages along with
  - **Toggle** for switching between the themes i.e. dark and light modes and a **`Cart`** icon button displaying the number of items present in the cart.
  - _Checkout_ , _Orders_ are the private/protected routes shown only to the user who has logged in.
- **Hero** consists of the introduction of the store along with _**Carousel**_ showcasing a few products.
- **Featured Products** highlights some of the popular products which on click of a product navigates to the page displaying the details about the product, **`ADD TO CART`** to add the item along the option of **`Amount`** selection.
- **About** displays a few details on the information about the company.
- **Products** consists of a list of products and different filters to search for specific items.
- **Cart** holds all the items the user added and the total amount for the items.
- **Checkout** is the place where the user can see the order total and enter the details to place an order.
- **Orders** shows the list of all orders the user has placed.
- Data is handled by **`API`**, and styles are handled by **`Tailwind CSS`**.
- For each page render the **Loading** has been implemented and unknown route URLs are handled by the **Error** component.
- Routing is implemented using **React Router**, **React Query** is used for caching the data requests, and **Daisy UI** for CSS components.
- To run the project locally, clone the repo, `npm install` to install the dependencies, and `npm run dev` to start up the development server on default port 5173.

#### Languages / Technologies

HTML, CSS, JavaScript, ECMAScript, React

#### API
https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi

#### Deployment / Hosting

Netlify

---

_Note: I have developed this project ~ [23] as part of the React 18 Tutorial and Projects Course (2023) taught by John Smilga._
