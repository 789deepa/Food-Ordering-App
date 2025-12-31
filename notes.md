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
