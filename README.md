<b>This project is about npm ui package for react app made on the top of opensource appwrite which provides ui buttons for authentication purpose</b>

```
To Contribute First
clone this repo
```

```
then go to src folder and download require npm package using npm i
```

```
make react component inside src folder with prefix Auth..
save them
update the version of package inside package.json -- increment it
run npm run build which will build the new components
```

```
Go to dist folder 
you can see your component
```

```
make PR to add your component or if you want to update some component
```

<h4>How To Use component in projects</h4>

```
make your react app 
setup for appwrite config file
inside your src folder make appwriteConfig.js file 
```
```
initially appwriteConfig.js contain this info
import { Client, Account } from "appwrite";

const client = new Client();

const account = new Account(client);

client
.setEndpoint('http://localhost:106/v1') // Your API Endpoint
.setProject('6425d19c7a8619e5cb51') // Your project ID
;
```

```
inside your client folder(or root folder name can vary) install authbpackage using
npm i authbpackage
```

```
open your .js/.jsx folder
import componet for use
for example 
import Authsignup from "authbapp/Authsignup";

and use it <Authsignup/> here Authsignup take email,password,and name as  props 
so passing this
<Authsignup email={email} password={password} name={name}/>
```
```
Yeee Finally you got the component that will automatically signup user and you can see the user entry inside appwrite console 
```

```
You Can See Other Component in this Repo Also And Use Them 
Thank you !!
```
