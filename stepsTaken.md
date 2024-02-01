# 1. npm create vite@latest client

    React JavaScript + SWC

    cd client
    npm i

# install tailwind

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

# 2.

apply base classes of tailwind css in index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# 3. Create pages and routes

    npm i react-router-dom

# 4. Intellisense supposedly not working

    <Route path='/' element={<Home />} />
    Home.jsx needs to be open in the tab, for the Home component to be auto imported 'import stmt'

# 5. warn on 'npm run dev'

    warn - No utility classes were detected in your source files. If this is unexpected, double-check the `content` option in your Tailwind CSS configuration.
    warn - https://tailwindcss.com/docs/content-configuration

# 6. Create Header section

    Add Header component to App.jsx inside BrowserRouter above Routes for it to be present on all pages

    change
        <div>Header</div>
    to the below: for SEO Purposes, something meaningful
        <header>Header</header>

                                for mobile  for pc          flex-wrap: so that both elements(Thal & Estate) come on top of each other in mobile
    <h1 className='font-bold    text-sm     sm:text-xl flex flex-wrap'>

                                        add shadow below the box
    <header className='bg-slate-200 shadow-md'>

    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        flex: get elements in the div in front of each other
        justify-between :  space between items
        items-center : align items vertically in center
        max-w-6xl :  set a maximum width of 1152px (for responsiveness)
        mx-auto :  make container centered from left and right
        p-3 :  padding around content

## npm i react-icons

    className="bg-transparent focus:outline-none w-24 sm:w-64"
        small devices: w-24
        small and above : w-64

# 7. create backend server

    init json file in project root for 'render' platform to detect while deploying

    npm i express

    node index.js


    Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

    Add this to package.json
        "type": "module",

    npm i nodemon

    mv .git ../ to move git from inside client folder to the root project folder: AMAZING

# 8. connect to database

    npm i mongoose

    abhishek1141mernrealestate

    npm i dotenv

# 9. create user model

# 10. create a test api route

# 11. create a signup api route

    npm i bcryptjs

# 12. create a middle ware and a function to handle errors

      return res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        messgage: messgage,
      })

    after ES6, if key and value are same then can be written as this also, it's correct
      return res.status(statusCode).json({
        success: false,
        statusCode,
        messgage,
      })

# 13. complete signup page UI

# 14. complete singup page functionality

    add unchanged eventlistener to input

    prevents from refreshing the page on form submission
    e.preventDefault();

    not safe to send data like this
    const res = await fetch("/api/auth/signup", formData);

    stringify and send it



    ISSUE: If user clicks Signup without filling any field, we get a "unexpected end of JSON input" error. Now what happens is both servers crash needing manual intervention to restart, nothing much is to be done to get them up and running, just make a minor change just so that we can save that file again and the server refreshes and is back up and running again, NOW, what can we do to avoid this

    clicking signup button without entering any data, clietside and backend servers both crashed, THEY ONLY start once i resave the files on both servers

```log
        7:03:18 pm [vite] http proxy error at /api/auth/signup:
        Error: read ECONNRESET
        at TCP.onStreamRead (node:internal/stream_base_commons:217:20)
        7:03:41 pm [vite] http proxy error at /api/auth/signup:
        Error: connect ECONNREFUSED ::1:3000
        at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1494:16)


    C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\bcryptjs\dist\bcrypt.js:189
                throw Error("Illegal arguments: "+(typeof s)+', '+(typeof salt));
                      ^

    Error: Illegal arguments: undefined, string
        at bcrypt.hashSync (C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\bcryptjs\dist\bcrypt.js:189:19)
        at signup (file:///C:/Users/abhis/Desktop/Project/VVIMP%20Projects%20Guthub/Private%20Github%20Uploads/RealEstate%20MERN/api/controllers/auth.controller.js:6:37)
        at Layer.handle [as handle_request] (C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\express\lib\router\layer.js:95:5)
        at next (C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\express\lib\router\route.js:144:13)
        at Route.dispatch (C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\express\lib\router\route.js:114:3)
        at Layer.handle [as handle_request] (C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\express\lib\router\layer.js:95:5)
        at C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\express\lib\router\index.js:284:15
        at Function.process_params (C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\express\lib\router\index.js:346:12)
        at next (C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\express\lib\router\index.js:280:10)
        at Function.handle (C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\express\lib\router\index.js:175:3)

    Node.js v18.16.1
    [nodemon] app crashed - waiting for file changes before starting...
```

    the error object has 3 fields
        message: "E11000 duplicate key error collection: realEstateCluster.users index: userName_1 dup key: { userName: null }"
        statusCode: 500
        success: false
