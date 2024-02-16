# Comfy Store 🛋️

> PROD [Live] : https://react-comfy-store-v2-prod.netlify.app/

#### Comfy Store consists of a straightforward user interface where there is a

- **Home** is the landing page which consists of **Header**, **Navbar**, **Hero**, **Featured Products**.
  - **Header** has **`Sign in / Guest`** which takes the user to **Login** page and `Create and account` to **Register page** when logged in the username and **`LOGOUT`**
    -  **Login** page is where the user can login or test the application with Guest User.
  - **Navbar** consists of list of pages i.e. **Home** , **About** , **Products** , **Cart** , **Checkout**, **Orders** where the user can navigate between pages.
  - **Hero** consists of introduction of the store along with **Carousel** showcasing few products images.
  - **Featured Products** highlights some of the products
- **About** will have detailed information about the company.
- **Products** consists of list of products and different filters to search for specific items.
   - To get more details of a specific item in the list, click on the item which opens a page with more details about the item and user can add items to the cart
- **Cart** holds all the items the user added and the total amount of the items
- **Checkout** is an private route shown to the user logged in where the user can enter the details 
- **Orders** is an private route shown to the user logged in that shows the list of orders the user has made
- Data is handled by **`API`**, and styles are handled by **`Tailwind CSS`**.
- For each page render the **Loading** has been implemented and unknown route URLs are handled by the **Error** component.
- Routing is implemented using **React Router**, **React Query** is used for caching the data requests and **Daisy UI** for CSS components.
- To run the project locally, clone the repo, `npm install` to install the dependencies, and `npm run dev` to start up the development server on default port 5173.

#### Languages

HTML, CSS, JavaScript, ECMAScript, React

#### API
https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi

#### Deployment / Hosting

Netlify

---

_Note: I have developed this project ~ [23] as part of the React 18 Tutorial and Projects Course (2023) taught by John Smilga._
