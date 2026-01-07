<!-- EP 02  -->
Bundlers are packadges that cleans our code, bundles it which helps it make production ready. 
'parcel' is one of the bundlers among 'webpack', 'vite'.

There are two types of dependancies 
1. Dev dependancy - generally required in development (-D)
2. Normal dependancy - used in production (no flag)

^ (caret) - update minor + patch 18.x.x 
~ (tilde) - update patch only 18.2.x

'Transitive Dependancy' - Parcel dependancy can have its own dependancy, those can hav their own dependancies. (parcel == beast)

whatever we can regenrate- dont have to put it on git (Ex. Node_modules)

npm - calling command
npx - executing packadge (npx parcel ___ )

parcel: 
-Dev build
-Local Server
-HMR = hot module replacement
-File watching algorithm - written in cpp
-Caching - faster builds
-Image optimization 
-Minification of files, for production 
-Consistent Hashing
-Code splitting
-Differential bundling
(big round of appolause for Parcel )
-when we do 'npx parcel build index.html(automatically generates app.js)', have to remove main = app.js from packadge.json file (otherwise error)

There are two types of exports/imports

-Default export
export default (component Name)
import LOGO_URL from "./doc/const" 

-Named export 
export const LOGO_URL
import {LOGO_URL} from "./doc/const" 

# React HOOKS
(normal js utility functions)

- useState() - gives the array
- useEffect() 

HOW to create a STATE Variable
const [listOfResto] = useState([]);                             its equal to 
let listOfResto = [];
[] = default value
 
** whenevr a state var updates, react rerenders the component 

we use OPTIONAL CHAINING here
we need to use shimmer UI for the time before loading actual data

WHY we use State Variables ?
cuz using local variables does not changes the UI.. whereas state variables updates the UI immediatly.

## Search & Filter Feature (Client-side filtering)

### What we did
- Implemented a search and filter feature for restaurant data.
- Used **two states**:
  - **Original list** → contains all restaurants (never modified).
  - **Filtered list** → used for rendering UI.
- On search or filter action:
  - Filtered the original list.
  - Updated the filtered list.
- UI always renders from the filtered list.

### Why we did it
- Filtering an already filtered list keeps shrinking data.
- Search breaks after first filter if original data is lost.
- Keeping original data untouched allows:
  - multiple searches
  - combining filters
  - easy reset

### Key idea
**Keep original data safe. Change only the UI data.**

## Routes 
Import createBrowserRouting , RouterProvider

<!-- 
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />, 
    }, 
    {
        path: "/about",
        element: <About/>,
    }
])
root.render(<RouterProvider router = {appRouter} />);
 -->