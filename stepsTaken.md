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

##    npm i react-icons

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

    





























































































































































































































