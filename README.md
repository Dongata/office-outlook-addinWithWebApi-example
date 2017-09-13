# office-outlook-addinWithWebApi-example
## An example for a calendar addin on oulook js with angular 4, C# webapi

### Steps to make it work

1. Configure a valid ssl certificate on your local IIS (this step is critical, office addin do not work if the machine doesn't trust the certificate).

2. Deploy the web api with the configured route (or change it and then modify the /src/app/app.service.ts of the addin web app with the new url)

3. Put the content of the folder "AddInWeb" on the root of your local IIS, or create an application inside the root site called "AddInWeb" that is routed to the specified folder.

4. From OWA: In your outlook account go to the configuration, then manage add-ins, click "Click here to add a custom add-in", select "From file" and select the manifest provided.

If you wanna change the addin web route you may wanna make sure that the manifest is pointing to the new routes, and you gotta change the /src/index.html base href.

---

### Web Add in build

If you wanna modify the web addin code i recomend you to download and install visual studio code and the node exension, but you can only download node only if you wanna.

On the folder of the add in web code, 
first execute `npm install` so it downloads all the dependencies,
then `npm -g install @angular/cli`
(this two steps needs to be excecuted only one time).

Finally `ng build` to build the proyect, this build is copied into /dist overriding the last build.

Enjoy!
