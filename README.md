# React - Routing

if you got this error
App.jsx:2 Uncaught SyntaxError: The requested module '/src/components/Dashboard.jsx?t=1752855702301' does not provide an export named 'default' (at App.jsx:2:8)

To solve this error :
1) either use export default function f() while developing the components, or
2) import components using ' import {component_name} from 'Path' ' 


To keep some View that will static across all the routes we cal declare a div above BrowserRouter and make sure to keep both the div and browserroter in a top level div.
```javascript
'<div style={{background : "blue", color:"white"}}>
        Hi there this is Top Bar
      </div>'
